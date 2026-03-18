import { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { callGemini }    from "../lib/gemini";
import { callGroq }      from "../lib/groq";
import { callOpenRouter } from "../lib/openrouter";
import { callCerebras }  from "../lib/cerebras";
import { callTogetherAI } from "../lib/together";
import { callMistral }   from "../lib/mistral";
import { callCohere }    from "../lib/cohere";
import { callDeepSeek }  from "../lib/deepseek";
import { getStoredKey, storeKey } from "../lib/apiKeys";

// ── Free API Helpers ───────────────────────────────────────────────────────────

// 3-second timeout wrapper for all fetch-based lookups
async function withTimeout<T>(fn: (signal: AbortSignal) => Promise<T | null>, ms = 3000): Promise<T | null> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  try { return await fn(ctrl.signal); }
  catch { return null; }
  finally { clearTimeout(timer); }
}

// Shared quality gate — returns true when a canonical name is clearly wrong for the input.
// Applied after lookup to prevent enzyme/protein names from matching simple metabolites/ions.
function isJunkCanonical(name: string, canonical: string): boolean {
  const ENZYME_WORDS = /\b(carboxylase|synthase|kinase|reductase|oxidase|dehydrogenase|transferase|isomerase|hydrolase|lyase|phosphatase|esterase|peptidase|protease|nuclease|polymerase|ligase|carboxytransferase|acetyltransferase|methyltransferase)\b/i;
  // Reject if canonical gains enzyme words not present in the input (e.g. "Pyruvate" → "Pyruvate Carboxylase")
  if (ENZYME_WORDS.test(canonical) && !ENZYME_WORDS.test(name)) return true;
  return false;
}

async function lookupRxNorm(name: string): Promise<{ canonical: string } | null> {
  return withTimeout(async signal => {
    const r1 = await fetch(
      `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${encodeURIComponent(name)}&search=1`,
      { signal }
    );
    if (!r1.ok) return null;
    const d1 = await r1.json();
    const rxcui = d1.idGroup?.rxnormId?.[0];
    if (!rxcui) return null;
    const r2 = await fetch(`https://rxnav.nlm.nih.gov/REST/rxcui/${rxcui}/properties.json`, { signal });
    if (!r2.ok) return null;
    const d2 = await r2.json();
    const canonical = d2.properties?.name;
    if (!canonical) return null;
    return { canonical };
  });
}

async function lookupWikidata(name: string): Promise<{ canonical: string; description: string } | null> {
  return withTimeout(async signal => {
    const url = `https://www.wikidata.org/w/api.php?action=wbsearchentities&search=${encodeURIComponent(name)}&language=en&type=item&format=json&origin=*`;
    const r = await fetch(url, { signal });
    if (!r.ok) return null;
    const d = await r.json();
    const medKW = ["medical","clinical","test","procedure","drug","disease","examination","imaging","scan","blood","laboratory","medication","diagnosis","treatment","health","surgical","therapy","pharmaceutical","protein","enzyme","hormone","infection","bacteria","virus"];
    const hits: any[] = d.search || [];
    const hit = hits.find(x => medKW.some(kw => (x.description || "").toLowerCase().includes(kw))) || hits[0];
    if (!hit) return null;
    const canonical = hit.label || name;
    if (canonical.toLowerCase() === name.toLowerCase()) return null;
    // Quality filter: reject overly long labels or domain-junk protein entries
    const tooLong = canonical.length > name.length * 3;
    const domainJunk = /\b(domain|superfamily|protein family|homolog|subunit|isoform)\b/i.test(canonical)
                    && !/\b(domain|superfamily|family|homolog)\b/i.test(name);
    if (tooLong || domainJunk) return null;
    return { canonical, description: hit.description || "" };
  });
}

async function lookupPubChem(name: string): Promise<{ canonical: string } | null> {
  return withTimeout(async signal => {
    const r = await fetch(
      `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(name)}/synonyms/JSON`,
      { signal }
    );
    if (!r.ok) return null;
    const d = await r.json();
    const syns: string[] = d.InformationList?.Information?.[0]?.Synonym || [];
    const inn = syns.find(s => s.length < 30 && /^[a-zA-Z\s-]+$/.test(s) && !s.includes("(") && !/\d/.test(s)) || syns[0];
    if (!inn) return null;
    return { canonical: inn };
  });
}

// Tier 4b: OpenFDA — drug generic/substance names (pharmacy items)
async function lookupOpenFDA(name: string): Promise<{ canonical: string } | null> {
  return withTimeout(async signal => {
    const r = await fetch(
      `https://api.fda.gov/drug/label.json?search=openfda.substance_name:"${encodeURIComponent(name)}"&limit=1`,
      { signal }
    );
    if (!r.ok) return null;
    const d = await r.json();
    const generic = d.results?.[0]?.openfda?.generic_name?.[0] || d.results?.[0]?.openfda?.substance_name?.[0];
    if (!generic || generic.toLowerCase() === name.toLowerCase()) return null;
    return { canonical: generic.charAt(0).toUpperCase() + generic.slice(1).toLowerCase() };
  });
}

// Tier 4c: NCI Thesaurus (EVS) — clinical/lab/oncology terminology
async function lookupNCIEvs(name: string): Promise<{ canonical: string; description: string } | null> {
  return withTimeout(async signal => {
    const r = await fetch(
      `https://api-evsrest.nci.nih.gov/api/v1/concept/ncit?term=${encodeURIComponent(name)}&type=contains&include=summary&pageSize=3`,
      { signal }
    );
    if (!r.ok) return null;
    const d = await r.json();
    const top = (d.concepts || [])[0];
    if (!top) return null;
    const canonical = top.name;
    if (!canonical || canonical.toLowerCase() === name.toLowerCase()) return null;
    if (isJunkCanonical(name, canonical)) return null;
    const def = top.definitions?.[0]?.definition || "";
    return { canonical, description: def.slice(0, 120) };
  });
}

// Tier 4d: MeSH (Medical Subject Headings) — broad medical vocabulary
async function lookupMeSH(name: string): Promise<{ canonical: string } | null> {
  return withTimeout(async signal => {
    const r = await fetch(
      `https://id.nlm.nih.gov/mesh/lookup/descriptor?label=${encodeURIComponent(name)}&match=contains&limit=3&language=en`,
      { signal }
    );
    if (!r.ok) return null;
    const d: any[] = await r.json();
    const top = d[0];
    if (!top?.label) return null;
    if (top.label.toLowerCase() === name.toLowerCase()) return null;
    // Reject enzyme/protein results
    if (isJunkCanonical(name, top.label)) return null;
    // Reject if input is long (4+ words) but canonical is very generic (≤2 words)
    // e.g. "CT angio chest PE protocol" → "CT protocol" is too vague
    const inputWords = name.trim().split(/\s+/).length;
    const canonWords = top.label.trim().split(/\s+/).length;
    if (inputWords >= 4 && canonWords <= 2) return null;
    return { canonical: top.label };
  });
}

// Tier 4e: KEGG Compound — biochemical compounds & metabolites (lab chemistry)
async function lookupKEGG(name: string): Promise<{ canonical: string } | null> {
  return withTimeout(async signal => {
    const r = await fetch(`https://rest.kegg.jp/find/compound/${encodeURIComponent(name)}`, { signal });
    if (!r.ok) return null;
    const text = await r.text();
    const firstLine = text.trim().split("\n")[0];
    if (!firstLine) return null;
    const parts = firstLine.split("\t");
    if (parts.length < 2) return null;
    const synonyms = parts[1].split(";").map(s => s.trim());
    const canonical = synonyms[0];
    if (!canonical || canonical.toLowerCase() === name.toLowerCase()) return null;
    return { canonical };
  });
}

// Tier 4f: UniProt — proteins, enzymes, biomarkers used in lab tests
async function lookupUniProt(name: string): Promise<{ canonical: string; description: string } | null> {
  return withTimeout(async signal => {
    const r = await fetch(
      `https://rest.uniprot.org/uniprotkb/search?query=${encodeURIComponent(name)}+AND+reviewed:true&fields=protein_name,organism_name&format=json&size=3`,
      { signal }
    );
    if (!r.ok) return null;
    const d = await r.json();
    const top = d.results?.[0];
    if (!top) return null;
    const canonical = top.proteinDescription?.recommendedName?.fullName?.value || top.proteinDescription?.submittedNames?.[0]?.fullName?.value;
    if (!canonical || canonical.toLowerCase() === name.toLowerCase()) return null;
    const organism = top.organism?.scientificName || "";
    return { canonical, description: organism ? `Protein — ${organism}` : "Protein/enzyme" };
  });
}

// Tier 4g: SNOMED CT — master clinical library (diagnoses, procedures, devices, anatomy)
async function lookupSNOMED(name: string): Promise<{ canonical: string; description: string } | null> {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 4000);
    const r = await fetch(
      `https://browser.ihtsdotools.org/snowstorm/snomed-ct/browser/MAIN/descriptions?term=${encodeURIComponent(name)}&active=true&limit=5`,
      { signal: ctrl.signal }
    );
    clearTimeout(timer);
    if (!r.ok) return null;
    const d = await r.json();
    const top = (d.items || [])[0];
    if (!top) return null;
    // Strip SNOMED semantic qualifiers: "(substance)", "(finding)", "(disorder)", "(procedure)", etc.
    const rawTerm = top.concept?.pt?.term || top.term || "";
    const canonical = rawTerm.replace(/\s*\([^)]+\)\s*$/, "").trim();
    if (!canonical || canonical.toLowerCase() === name.toLowerCase()) return null;
    if (isJunkCanonical(name, canonical)) return null;
    return { canonical, description: (top.concept?.fsn?.term || "").replace(/\s*\([^)]+\)\s*$/, "").trim() };
  } catch { return null; }
}

// Tier 4h: LOINC — universal standard for lab tests and imaging orders
async function lookupLOINC(name: string): Promise<{ canonical: string; loincCode: string } | null> {
  return withTimeout(async signal => {
    const r = await fetch(
      `https://clinicaltables.nlm.nih.gov/api/loinc_items/v3/search?terms=${encodeURIComponent(name)}&maxList=5&df=LONG_COMMON_NAME,COMPONENT`,
      { signal }
    );
    if (!r.ok) return null;
    const d = await r.json();
    const rows: any[][] = d[3] || [];
    if (!rows.length) return null;
    const canonical: string = rows[0][1] || rows[0][0] || "";
    if (!canonical || canonical.toLowerCase() === name.toLowerCase()) return null;
    // Relevance filter: first significant input term must appear in the LOINC component.
    // Prevents "Chloride" → "Dimethylcarbamoyl chloride" and "Campylobacter" → "Helicobacter".
    const inputTerms = name.toLowerCase().split(/[\s\/,\-\.\(\)]+/).filter(t => t.length > 2 && !/^\d+$/.test(t));
    if (inputTerms.length > 0) {
      const canonLower = canonical.toLowerCase();
      if (inputTerms.length === 1) {
        // Single-word input: canonical must START with that word (not just contain it as a modifier)
        if (!canonLower.startsWith(inputTerms[0])) return null;
      } else {
        // Multi-word: at least one significant input term must appear in the canonical
        if (!inputTerms.some(t => canonLower.includes(t))) return null;
      }
    }
    return { canonical, loincCode: rows[0][0] || "" };
  });
}

// Tier 4i: ICD-10-PCS — granular inpatient procedure coding system
async function lookupICD10PCS(name: string): Promise<{ canonical: string; pcsCode: string } | null> {
  return withTimeout(async signal => {
    const r = await fetch(
      `https://clinicaltables.nlm.nih.gov/api/icd10pcs/v3/search?terms=${encodeURIComponent(name)}&maxList=5&df=code,display`,
      { signal }
    );
    if (!r.ok) return null;
    const d = await r.json();
    const rows: any[][] = d[3] || [];
    if (!rows.length) return null;
    const display: string = rows[0][1] || rows[0][0] || "";
    if (!display || display.toLowerCase() === name.toLowerCase()) return null;
    return { canonical: display, pcsCode: rows[0][0] || "" };
  });
}

// Tier 4j: UMLS Metathesaurus — cross-maps 200+ medical vocabularies (requires free NLM API key)
async function lookupUMLS(name: string, apiKey: string): Promise<{ canonical: string; rootSource: string } | null> {
  if (!apiKey.trim()) return null;
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 5000);
    const r = await fetch(
      `https://uts-ws.nlm.nih.gov/rest/search/current?string=${encodeURIComponent(name)}&apiKey=${encodeURIComponent(apiKey)}&returnIdType=concept&pageSize=3&searchType=words`,
      { signal: ctrl.signal }
    );
    clearTimeout(timer);
    if (!r.ok) return null;
    const d = await r.json();
    const top = (d.result?.results || [])[0];
    if (!top?.name) return null;
    if (top.name.toLowerCase() === name.toLowerCase()) return null;
    if (isJunkCanonical(name, top.name)) return null;
    return { canonical: top.name, rootSource: top.rootSource || "UMLS" };
  } catch { return null; }
}

// Tier 4k: EMBL-EBI ChEMBL — bioactive molecules & pharmacological data (no key required)
// Only meaningful for pharmacy/drug/compound items — do not use for imaging, procedures, etc.
async function lookupChEMBL(name: string): Promise<{ canonical: string } | null> {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 5000);
    const r = await fetch(
      `https://www.ebi.ac.uk/chembl/api/data/molecule/search.json?q=${encodeURIComponent(name)}&limit=1`,
      { signal: ctrl.signal }
    );
    clearTimeout(timer);
    if (!r.ok) return null;
    const d = await r.json();
    const top = (d.molecules || [])[0];
    if (!top) return null;
    const canonical = top.pref_name || top.molecule_synonyms?.[0]?.molecule_synonym || "";
    if (!canonical || canonical.toLowerCase() === name.toLowerCase()) return null;
    // Relevance filter: at least one core input word must appear in the ChEMBL canonical name.
    // Excludes dosage-form words (injection, capsule, etc.) from the check so only the
    // drug substance name drives the match — prevents e.g. "MYOZYME INJECTION" → "RINGER'S INJECTION".
    const FORM_WORDS = new Set(["injection","capsule","capsules","tablet","tablets","solution","syrup",
      "suspension","cream","ointment","paste","drops","powder","gel","spray","patch","infusion",
      "oral","topical","inhaler","capsule","ampoule","vial"]);
    const inputCore = name.toLowerCase()
      .split(/[\s\-\/,\.()%]+/)
      .filter(w => w.length > 3 && !/^\d+$/.test(w) && !FORM_WORDS.has(w));
    if (inputCore.length > 0 && !inputCore.some(w => canonical.toLowerCase().includes(w))) return null;
    return { canonical };
  } catch { return null; }
}

// Tier 4l: NLM ClinicalTable ICD-10-CM — diagnosis codes (no key required)
async function lookupICD10CM(name: string): Promise<{ canonical: string; icd10cmCode: string } | null> {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 4000);
    const r = await fetch(
      `https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code,name&terms=${encodeURIComponent(name)}&maxList=1`,
      { signal: ctrl.signal }
    );
    clearTimeout(timer);
    if (!r.ok) return null;
    const d: any[] = await r.json();
    // Response: [totalCount, [codes], null, [[code, name]]]
    const codeDescs = d?.[3];
    if (!Array.isArray(codeDescs) || !codeDescs[0]) return null;
    const [icd10cmCode, canonical] = codeDescs[0];
    if (!canonical || canonical.toLowerCase() === name.toLowerCase()) return null;
    return { canonical, icd10cmCode };
  } catch { return null; }
}

// Tier 4m: NCBO BioPortal — 800+ ontologies including RadLex (imaging) & GMDN (devices)
async function lookupBioPortal(name: string, apiKey: string): Promise<{ canonical: string; ontology: string } | null> {
  if (!apiKey.trim()) return null;
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 5000);
    const r = await fetch(
      `https://data.bioontology.org/search?q=${encodeURIComponent(name)}&pagesize=1&include=prefLabel&apikey=${encodeURIComponent(apiKey)}`,
      { signal: ctrl.signal }
    );
    clearTimeout(timer);
    if (!r.ok) return null;
    const d = await r.json();
    const top = (d.collection || [])[0];
    if (!top?.prefLabel) return null;
    if (top.prefLabel.toLowerCase() === name.toLowerCase()) return null;
    const prefLabel: string = top.prefLabel;
    // Reject single-word or very short results when the input is a longer multi-word name —
    // these are usually generic category terms, not specific canonical names (e.g. "Capsules").
    if (prefLabel.length < 5 && name.length > 10) return null;
    // Relevance: at least one non-dosage-form significant input word must appear in the result.
    const FORM_WORDS = new Set(["capsule","capsules","tablet","tablets","injection","solution",
      "syrup","suspension","cream","paste","drops","powder","gel","spray","patch","infusion"]);
    // Exclude measurement words (starting with a digit: "15cm", "4mm", "1.1mm") — they create
    // false positives when the same dimension appears in unrelated items (e.g. wound dressing vs bur)
    const inputCore = name.toLowerCase()
      .split(/[\s\-\/,\.()%]+/)
      .filter(w => w.length > 3 && !/^\d/.test(w) && !FORM_WORDS.has(w));
    // Reject if canonical is a single generic word but input has multiple content words —
    // "Balloon" for "BALLOON ACROSS CTO 1.1MM X15" loses all clinical specificity
    const prefWordCount = prefLabel.trim().split(/\s+/).length;
    if (prefWordCount === 1 && inputCore.length >= 2) return null;
    if (inputCore.length > 0 && !inputCore.some(w => prefLabel.toLowerCase().includes(w))) return null;
    const ontology = top["@id"]?.match(/ontologies\/([^/]+)/)?.[1] || "BioPortal";
    return { canonical: prefLabel, ontology };
  } catch { return null; }
}

function isPharmacyItem(row: { name: string; category: string }): boolean {
  const c = (row.category || "").toLowerCase();
  const n = (row.name || "").toLowerCase();
  return c.includes("pharm") || c.includes("drug") || c.includes("med") || c.includes("rx") ||
    n.includes(" mg") || n.includes(" ml") || n.includes("tablet") || n.includes("capsule") ||
    n.includes("injection") || n.includes("syrup") || n.includes("cream") || n.includes("ointment") ||
    n.includes("suspension") || n.includes("drops") || n.includes("infusion");
}

function detectDomain(row: { name: string; category: string }): string {
  const c = (row.category || "").toLowerCase();
  const n = (row.name || "").toLowerCase();
  if (c.includes("pharm") || c.includes("drug") || c.includes("rx") || n.includes(" mg") || n.includes("tablet")) return "Pharmacy";
  if (c.includes("lab") || c.includes("path") || c.includes("haem") || c.includes("chem") || c.includes("micro") || c.includes("biochem")) return "Laboratory";
  if (c.includes("rad") || c.includes("xray") || c.includes("imaging") || c.includes("mri") || c.includes("ct") || c.includes("scan")) return "Radiology";
  if (c.includes("theatre") || c.includes("icu") || c.includes("hdu") || c.includes("svc") || c.includes("service") || c.includes("cons")) return "Services";
  if (c.includes("device") || c.includes("equip") || c.includes("machine")) return "Medical Devices";
  if (n.includes("drip") || n.includes("cannula") || n.includes("catheter") || n.includes("saline") || n.includes("suture")) return "Consumables";
  if (n.includes("x-ray") || n.includes("ultrasound") || n.includes("scan") || n.includes("mri") || n.includes("ct ")) return "Radiology";
  return "Unknown";
}

function isLabOrImagingItem(row: { name: string; category: string }): boolean {
  const d = detectDomain(row);
  return d === "Laboratory" || d === "Radiology";
}

function isProcedureItem(row: { name: string; category: string }): boolean {
  const d = detectDomain(row);
  return d === "Services" || d === "Medical Devices" || d === "Consumables" ||
    (row.category || "").toLowerCase().includes("procedure") ||
    (row.category || "").toLowerCase().includes("surgery");
}

function sourceLabel(s: string): string {
  return ({
    rxnorm:"RxNorm API", wikidata:"Wikidata", pubchem:"PubChem",
    openfda:"OpenFDA", ncievs:"NCI Thesaurus", mesh:"MeSH", kegg:"KEGG", uniprot:"UniProt",
    snomed:"SNOMED CT", loinc:"LOINC", icd10pcs:"ICD-10-PCS", umls:"UMLS",
    chembl:"ChEMBL (EBI)", icd10cm:"ICD-10-CM", bioportal:"NCBO BioPortal",
    ai:"AI (Gemini)", "ai-groq":"AI (Groq)", "ai-openrouter":"AI (OpenRouter)",
    "ai-cerebras":"AI (Cerebras)", "ai-together":"AI (Together)", "ai-mistral":"AI (Mistral)",
    "ai-cohere":"AI (Cohere)", "ai-deepseek":"AI (DeepSeek)",
    dictionary:"Dictionary",
  } as any)[s] || s;
}
function sourceIcon(s: string): string {
  return ({
    rxnorm:"💊", wikidata:"🌐", pubchem:"🧪",
    openfda:"💉", ncievs:"🔬", mesh:"📚", kegg:"⚗️", uniprot:"🧬",
    snomed:"🩺", loinc:"🧫", icd10pcs:"🏥", umls:"🔗",
    chembl:"🔬", icd10cm:"🏷️", bioportal:"🧭",
    ai:"🤖", "ai-groq":"🤖", "ai-openrouter":"🤖",
    "ai-cerebras":"🤖", "ai-together":"🤖", "ai-mistral":"🤖",
    "ai-cohere":"🤖", "ai-deepseek":"🤖",
    dictionary:"⚡",
  } as any)[s] || "❓";
}
function sourceBadgeColor(s: string): { bg: string; c: string } {
  return ({
    rxnorm:          { bg:"#fff7ed", c:"#ea580c" },
    wikidata:        { bg:"#eff6ff", c:"#2563eb" },
    pubchem:         { bg:"#f5f3ff", c:"#7c3aed" },
    openfda:         { bg:"#fff1f2", c:"#e11d48" },
    ncievs:          { bg:"#f0fdf4", c:"#15803d" },
    mesh:            { bg:"#fefce8", c:"#a16207" },
    kegg:            { bg:"#fdf4ff", c:"#9333ea" },
    uniprot:         { bg:"#f0f9ff", c:"#0369a1" },
    snomed:          { bg:"#fff0f6", c:"#be185d" },
    loinc:           { bg:"#f0fdfa", c:"#0f766e" },
    icd10pcs:        { bg:"#fff7ed", c:"#c2410c" },
    umls:            { bg:"#f8fafc", c:"#475569" },
    chembl:          { bg:"#f0f9ff", c:"#0369a1" },
    icd10cm:         { bg:"#fef9c3", c:"#92400e" },
    bioportal:       { bg:"#fdf4ff", c:"#7e22ce" },
    ai:              { bg:"#ecfdf5", c:"#059669" },
    "ai-groq":       { bg:"#ecfdf5", c:"#059669" },
    "ai-openrouter": { bg:"#ecfdf5", c:"#059669" },
    "ai-cerebras":   { bg:"#ecfdf5", c:"#059669" },
    "ai-together":   { bg:"#ecfdf5", c:"#059669" },
    "ai-mistral":    { bg:"#ecfdf5", c:"#059669" },
    "ai-cohere":     { bg:"#ecfdf5", c:"#059669" },
    "ai-deepseek":   { bg:"#ecfdf5", c:"#059669" },
    dictionary:      { bg:"#dcfce7", c:"#16a34a" },
  } as any)[s] || { bg:"#f1f5f9", c:"#64748b" };
}

async function runFreeAPIWaterfall(
  misses: any[],
  logFn: (m: string) => void,
  umlsKey = "",
  bioportalKey = ""
): Promise<Record<number, { source: string; canonical: string; confidence: number; description?: string }>> {
  const out: Record<number, any> = {};
  const BATCH = 10;
  const pharma    = misses.filter(r => isPharmacyItem(r));
  const labImg    = misses.filter(r => isLabOrImagingItem(r));
  const procedure = misses.filter(r => isProcedureItem(r));

  // Take highest-confidence result per item (multiple APIs may resolve the same item in parallel)
  function record(idx: number, source: string, canonical: string, confidence: number, extra?: any) {
    if (!out[idx] || confidence > out[idx].confidence)
      out[idx] = { source, canonical, confidence, ...extra };
  }

  async function runBatched<T extends { canonical: string } | null>(
    items: any[],
    fn: (row: any) => Promise<T>,
    source: string,
    confidence: number,
    extraFn?: (hit: NonNullable<T>, row: any) => Record<string, any>
  ) {
    for (let i = 0; i < items.length; i += BATCH) {
      await Promise.all(items.slice(i, i + BATCH).map(async row => {
        const hit = await fn(row);
        if (hit) {
          const extra = extraFn ? extraFn(hit as NonNullable<T>, row) : {};
          record(row._idx, source, hit.canonical, confidence, extra);
          logFn(`${sourceIcon(source)} "${row.name}" → "${hit.canonical}"`);
        }
      }));
    }
  }

  // ── Phase 1: Authoritative primary sources (NLM credentials) ─────────────────
  // UMLS, RxNorm, SNOMED CT, LOINC — run in parallel, wait for completion.
  // These are the most trusted sources (200+ vocabularies via UMLS; gold-standard
  // drug, clinical, and lab standards for the others). Items resolved here do NOT
  // proceed to Phase 2, saving API rate limits for the secondary sources.
  logFn(`🏛️ Phase 1: Authoritative sources (UMLS · RxNorm · SNOMED CT · LOINC) — ${misses.length} items...`);

  await Promise.all([
    umlsKey.trim()
      ? runBatched(misses, r => lookupUMLS(r.name, umlsKey), "umls", 86,
          (hit: any) => ({ description: `via ${hit.rootSource}` }))
      : Promise.resolve(),
    runBatched(pharma, r => lookupRxNorm(r.name),    "rxnorm", 88),
    runBatched(misses, r => lookupSNOMED(r.name),    "snomed", 88,
      (hit: any) => ({ description: hit.description })),
    runBatched(labImg, r => lookupLOINC(r.name),     "loinc",  90,
      (hit: any) => ({ description: `LOINC: ${hit.loincCode}` })),
  ]);

  const phase1Resolved = misses.filter(r => out[r._idx]).length;
  logFn(`✅ Phase 1 done: ${phase1Resolved}/${misses.length} resolved. Sending remaining to secondary sources...`);

  // ── Phase 2: Secondary sources — only unresolved items ────────────────────
  // Sorted by confidence descending so `record()` keeps the best hit.
  const unresolved   = misses.filter(r => !out[r._idx]);
  const unresPharma  = unresolved.filter(r => isPharmacyItem(r));
  const unresLabImg  = unresolved.filter(r => isLabOrImagingItem(r));
  const unresProc    = unresolved.filter(r => isProcedureItem(r));

  if (unresolved.length) {
    logFn(`🚀 Phase 2: ${unresolved.length} unresolved items → all secondary APIs in parallel...`);

    await Promise.all([
      // Confidence ≥ 85
      runBatched(unresPharma, r => lookupOpenFDA(r.name),  "openfda",  85),
      runBatched(unresProc,   r => lookupICD10PCS(r.name), "icd10pcs", 85,
        (hit: any) => ({ description: `ICD-10-PCS: ${hit.pcsCode}` })),

      // Confidence 80–84
      bioportalKey.trim()
        ? runBatched(unresolved, r => lookupBioPortal(r.name, bioportalKey), "bioportal", 82,
            (hit: any) => ({ description: `via ${hit.ontology}` }))
        : Promise.resolve(),
      runBatched(unresolved,   r => lookupNCIEvs(r.name),  "ncievs",   82,
        (hit: any) => ({ description: hit.description })),
      runBatched(unresPharma,  r => lookupPubChem(r.name), "pubchem",  80),
      runBatched(unresolved,   r => lookupKEGG(r.name),    "kegg",     80),

      // Confidence 75–79
      runBatched(unresolved,   r => lookupMeSH(r.name),    "mesh",     78),
      runBatched(unresolved,   r => lookupUniProt(r.name), "uniprot",  77,
        (hit: any) => ({ description: hit.description })),
      runBatched(unresPharma,  r => lookupChEMBL(r.name),  "chembl",   76), // pharma items only
      runBatched(unresolved,   r => lookupWikidata(r.name),"wikidata",  75,
        (hit: any) => ({ description: hit.description })),

      // Confidence < 75 (broadest fallback)
      runBatched(unresolved,   r => lookupICD10CM(r.name), "icd10cm",  73,
        (hit: any) => ({ description: `ICD-10-CM: ${hit.icd10cmCode}` })),
    ]);
  }

  const totalResolved = misses.filter(r => out[r._idx]).length;
  logFn(`✅ API blast complete: ${totalResolved}/${misses.length} resolved (${phase1Resolved} primary + ${totalResolved - phase1Resolved} secondary).`);
  return out;
}

// ── Comprehensive Seed Dictionary (150+ entries, all 8 domains) ───────────────
const SEED_ALIASES = [
  // ── LABORATORY ─────────────────────────────────────────────────────────────
  { messy:"FBC",              canonical:"Full Blood Count",                           domain:"Laboratory",      code:"LAB001", confidence:100 },
  { messy:"CBC",              canonical:"Full Blood Count",                           domain:"Laboratory",      code:"LAB001", confidence:100 },
  { messy:"FULL BLOOD CT",    canonical:"Full Blood Count",                           domain:"Laboratory",      code:"LAB001", confidence:100 },
  { messy:"HB",               canonical:"Haemoglobin",                               domain:"Laboratory",      code:"LAB002", confidence:100 },
  { messy:"HGB",              canonical:"Haemoglobin",                               domain:"Laboratory",      code:"LAB002", confidence:100 },
  { messy:"TFT",              canonical:"Thyroid Function Test",                     domain:"Laboratory",      code:"LAB003", confidence:100 },
  { messy:"THYROID FN",       canonical:"Thyroid Function Test",                     domain:"Laboratory",      code:"LAB003", confidence:100 },
  { messy:"TSH",              canonical:"Thyroid Stimulating Hormone",               domain:"Laboratory",      code:"LAB003", confidence:100 },
  { messy:"T3 T4",            canonical:"Thyroid Function Test",                     domain:"Laboratory",      code:"LAB003", confidence:100 },
  { messy:"LFT",              canonical:"Liver Function Panel",                      domain:"Laboratory",      code:"LAB004", confidence:100 },
  { messy:"LFTS",             canonical:"Liver Function Panel",                      domain:"Laboratory",      code:"LAB004", confidence:100 },
  { messy:"LIVER FN",         canonical:"Liver Function Panel",                      domain:"Laboratory",      code:"LAB004", confidence:100 },
  { messy:"RFT",              canonical:"Renal Function Tests",                      domain:"Laboratory",      code:"LAB005", confidence:100 },
  { messy:"RFTS",             canonical:"Renal Function Tests",                      domain:"Laboratory",      code:"LAB005", confidence:100 },
  { messy:"KFT",              canonical:"Kidney Function Test",                      domain:"Laboratory",      code:"LAB005", confidence:100 },
  { messy:"U/E",              canonical:"Urea and Electrolytes",                     domain:"Laboratory",      code:"LAB006", confidence:100 },
  { messy:"UEC",              canonical:"Urea and Electrolytes",                     domain:"Laboratory",      code:"LAB006", confidence:100 },
  { messy:"U AND E",          canonical:"Urea and Electrolytes",                     domain:"Laboratory",      code:"LAB006", confidence:100 },
  { messy:"FBS",              canonical:"Fasting Blood Sugar",                       domain:"Laboratory",      code:"LAB007", confidence:100 },
  { messy:"RBS",              canonical:"Random Blood Sugar",                        domain:"Laboratory",      code:"LAB008", confidence:100 },
  { messy:"FBGR",             canonical:"Fasting Blood Glucose",                     domain:"Laboratory",      code:"LAB007", confidence:100 },
  { messy:"HBA1C",            canonical:"Glycated Haemoglobin HbA1c",               domain:"Laboratory",      code:"LAB009", confidence:100 },
  { messy:"HAEMOGLOBIN A1C",  canonical:"Glycated Haemoglobin HbA1c",               domain:"Laboratory",      code:"LAB009", confidence:100 },
  { messy:"ESR",              canonical:"Erythrocyte Sedimentation Rate",            domain:"Laboratory",      code:"LAB010", confidence:100 },
  { messy:"CRP",              canonical:"C-Reactive Protein",                        domain:"Laboratory",      code:"LAB011", confidence:100 },
  { messy:"PT",               canonical:"Prothrombin Time",                          domain:"Laboratory",      code:"LAB012", confidence:100 },
  { messy:"PTT",              canonical:"Partial Thromboplastin Time",               domain:"Laboratory",      code:"LAB013", confidence:100 },
  { messy:"INR",              canonical:"International Normalised Ratio",            domain:"Laboratory",      code:"LAB014", confidence:100 },
  { messy:"APTT",             canonical:"Activated Partial Thromboplastin Time",     domain:"Laboratory",      code:"LAB013", confidence:100 },
  { messy:"U/A",              canonical:"Urinalysis",                                domain:"Laboratory",      code:"LAB015", confidence:100 },
  { messy:"URINE ANALYSIS",   canonical:"Urinalysis",                                domain:"Laboratory",      code:"LAB015", confidence:100 },
  { messy:"MCS",              canonical:"Microscopy Culture and Sensitivity",        domain:"Laboratory",      code:"LAB016", confidence:100 },
  { messy:"BLOOD C/S",        canonical:"Blood Culture and Sensitivity",             domain:"Laboratory",      code:"LAB017", confidence:100 },
  { messy:"URINE C/S",        canonical:"Urine Culture and Sensitivity",             domain:"Laboratory",      code:"LAB018", confidence:100 },
  { messy:"WIDAL",            canonical:"Widal Test",                                domain:"Laboratory",      code:"LAB019", confidence:100 },
  { messy:"MALARIA RDT",      canonical:"Malaria Rapid Diagnostic Test",             domain:"Laboratory",      code:"LAB020", confidence:100 },
  { messy:"MALARIA MP",       canonical:"Malaria Blood Film",                        domain:"Laboratory",      code:"LAB021", confidence:100 },
  { messy:"HIV SCREEN",       canonical:"HIV Screening Test",                        domain:"Laboratory",      code:"LAB022", confidence:100 },
  { messy:"CD4",              canonical:"CD4 Count",                                 domain:"Laboratory",      code:"LAB023", confidence:100 },
  { messy:"VIRAL LOAD",       canonical:"HIV Viral Load",                            domain:"Laboratory",      code:"LAB024", confidence:100 },
  { messy:"LIPID PROFILE",    canonical:"Lipid Profile",                             domain:"Laboratory",      code:"LAB025", confidence:100 },
  { messy:"CHOLESTEROL",      canonical:"Serum Cholesterol",                         domain:"Laboratory",      code:"LAB025", confidence:100 },
  { messy:"TROPONIN",         canonical:"Troponin I/T",                              domain:"Laboratory",      code:"LAB026", confidence:100 },
  { messy:"BNP",              canonical:"Brain Natriuretic Peptide",                 domain:"Laboratory",      code:"LAB027", confidence:100 },
  { messy:"PSA",              canonical:"Prostate Specific Antigen",                 domain:"Laboratory",      code:"LAB028", confidence:100 },
  { messy:"BETA HCG",         canonical:"Beta Human Chorionic Gonadotropin",         domain:"Laboratory",      code:"LAB029", confidence:100 },
  { messy:"PREGNANCY TEST",   canonical:"Urine Pregnancy Test",                      domain:"Laboratory",      code:"LAB030", confidence:100 },
  { messy:"STOOL R/E",        canonical:"Stool Routine Examination",                 domain:"Laboratory",      code:"LAB031", confidence:100 },
  { messy:"STOOL OCP",        canonical:"Stool Ova Cysts and Parasites",             domain:"Laboratory",      code:"LAB032", confidence:100 },
  { messy:"H PYLORI",         canonical:"H. Pylori Test",                            domain:"Laboratory",      code:"LAB033", confidence:100 },
  { messy:"DENGUE NS1",       canonical:"Dengue NS1 Antigen Test",                   domain:"Laboratory",      code:"LAB034", confidence:100 },
  { messy:"SERUM CREATININE", canonical:"Serum Creatinine",                          domain:"Laboratory",      code:"LAB035", confidence:100 },
  { messy:"URIC ACID",        canonical:"Serum Uric Acid",                           domain:"Laboratory",      code:"LAB036", confidence:100 },
  { messy:"SERUM CALCIUM",    canonical:"Serum Calcium",                             domain:"Laboratory",      code:"LAB037", confidence:100 },
  { messy:"SERUM AMYLASE",    canonical:"Serum Amylase",                             domain:"Laboratory",      code:"LAB038", confidence:100 },
  { messy:"SERUM LIPASE",     canonical:"Serum Lipase",                              domain:"Laboratory",      code:"LAB039", confidence:100 },
  { messy:"ABG",              canonical:"Arterial Blood Gas",                        domain:"Laboratory",      code:"LAB040", confidence:100 },
  // ── RADIOLOGY / IMAGING ─────────────────────────────────────────────────────
  { messy:"CXR",              canonical:"Chest X-Ray PA View",                       domain:"Radiology",       code:"RAD001", confidence:100 },
  { messy:"CHEST XRAY",       canonical:"Chest X-Ray PA View",                       domain:"Radiology",       code:"RAD001", confidence:100 },
  { messy:"CHEST X-RAY",      canonical:"Chest X-Ray PA View",                       domain:"Radiology",       code:"RAD001", confidence:100 },
  { messy:"AXR",              canonical:"Abdominal X-Ray",                           domain:"Radiology",       code:"RAD002", confidence:100 },
  { messy:"KUB",              canonical:"Kidney Ureter Bladder X-Ray",               domain:"Radiology",       code:"RAD003", confidence:100 },
  { messy:"U/S ABDOMEN",      canonical:"Ultrasound Abdomen",                        domain:"Radiology",       code:"RAD004", confidence:100 },
  { messy:"USS ABDOMEN",      canonical:"Ultrasound Abdomen",                        domain:"Radiology",       code:"RAD004", confidence:100 },
  { messy:"USS PELVIS",       canonical:"Ultrasound Pelvis",                         domain:"Radiology",       code:"RAD005", confidence:100 },
  { messy:"USS OBS",          canonical:"Obstetric Ultrasound",                      domain:"Radiology",       code:"RAD006", confidence:100 },
  { messy:"DOPPLER USS",      canonical:"Doppler Ultrasound",                        domain:"Radiology",       code:"RAD007", confidence:100 },
  { messy:"CT BRAIN",         canonical:"CT Scan Brain Plain",                       domain:"Radiology",       code:"RAD008", confidence:100 },
  { messy:"CT HEAD",          canonical:"CT Scan Brain Plain",                       domain:"Radiology",       code:"RAD008", confidence:100 },
  { messy:"CT ABDOMEN",       canonical:"CT Scan Abdomen",                           domain:"Radiology",       code:"RAD009", confidence:100 },
  { messy:"CT CHEST",         canonical:"CT Scan Chest",                             domain:"Radiology",       code:"RAD010", confidence:100 },
  { messy:"ECHO",             canonical:"Echocardiogram 2D",                         domain:"Radiology",       code:"RAD011", confidence:100 },
  { messy:"2D ECHO",          canonical:"Echocardiogram 2D",                         domain:"Radiology",       code:"RAD011", confidence:100 },
  { messy:"MRI BRAIN",        canonical:"MRI Scan Brain",                            domain:"Radiology",       code:"RAD012", confidence:100 },
  { messy:"MRI SPINE",        canonical:"MRI Scan Spine",                            domain:"Radiology",       code:"RAD013", confidence:100 },
  { messy:"MAMMOGRAM",        canonical:"Mammography",                               domain:"Radiology",       code:"RAD014", confidence:100 },
  { messy:"DEXA SCAN",        canonical:"Bone Mineral Density DEXA Scan",            domain:"Radiology",       code:"RAD015", confidence:100 },
  { messy:"IVU",              canonical:"Intravenous Urogram",                       domain:"Radiology",       code:"RAD016", confidence:100 },
  { messy:"HSG",              canonical:"Hysterosalpingogram",                       domain:"Radiology",       code:"RAD017", confidence:100 },
  // ── PROCEDURES ──────────────────────────────────────────────────────────────
  { messy:"ECG",              canonical:"Electrocardiogram 12-Lead",                 domain:"Procedures",      code:"PRO001", confidence:100 },
  { messy:"EKG",              canonical:"Electrocardiogram 12-Lead",                 domain:"Procedures",      code:"PRO001", confidence:100 },
  { messy:"12 LEAD ECG",      canonical:"Electrocardiogram 12-Lead",                 domain:"Procedures",      code:"PRO001", confidence:100 },
  { messy:"LP",               canonical:"Lumbar Puncture",                           domain:"Procedures",      code:"PRO002", confidence:100 },
  { messy:"OGD",              canonical:"Oesophagogastroduodenoscopy",               domain:"Procedures",      code:"PRO003", confidence:100 },
  { messy:"GASTROSCOPY",      canonical:"Oesophagogastroduodenoscopy",               domain:"Procedures",      code:"PRO003", confidence:100 },
  { messy:"COLONOSCOPY",      canonical:"Colonoscopy",                               domain:"Procedures",      code:"PRO004", confidence:100 },
  { messy:"ERCP",             canonical:"Endoscopic Retrograde Cholangiopancreatography", domain:"Procedures", code:"PRO005", confidence:100 },
  { messy:"BRONCHOSCOPY",     canonical:"Bronchoscopy",                              domain:"Procedures",      code:"PRO006", confidence:100 },
  { messy:"HOLTER",           canonical:"Holter Monitor 24-Hour",                    domain:"Procedures",      code:"PRO007", confidence:100 },
  { messy:"HOLTER MONITOR",   canonical:"Holter Monitor 24-Hour",                    domain:"Procedures",      code:"PRO007", confidence:100 },
  { messy:"BONE MARROW",      canonical:"Bone Marrow Aspiration",                    domain:"Procedures",      code:"PRO008", confidence:100 },
  { messy:"FNAB",             canonical:"Fine Needle Aspiration Biopsy",             domain:"Procedures",      code:"PRO009", confidence:100 },
  { messy:"FNA",              canonical:"Fine Needle Aspiration",                    domain:"Procedures",      code:"PRO009", confidence:100 },
  { messy:"CYSTOSCOPY",       canonical:"Cystoscopy",                                domain:"Procedures",      code:"PRO010", confidence:100 },
  // ── PHARMACY (Kenya trade names → generics) ─────────────────────────────────
  { messy:"PANADOL",          canonical:"Paracetamol 500mg Tablet",                  domain:"Pharmacy",        code:"PHA001", confidence:100 },
  { messy:"PARACETAMOL",      canonical:"Paracetamol 500mg Tablet",                  domain:"Pharmacy",        code:"PHA001", confidence:100 },
  { messy:"PCM",              canonical:"Paracetamol 500mg Tablet",                  domain:"Pharmacy",        code:"PHA001", confidence:100 },
  { messy:"AUGMENTIN",        canonical:"Amoxicillin-Clavulanate 625mg Tablet",      domain:"Pharmacy",        code:"PHA002", confidence:100 },
  { messy:"CO-AMOXICLAV",     canonical:"Amoxicillin-Clavulanate 625mg Tablet",      domain:"Pharmacy",        code:"PHA002", confidence:100 },
  { messy:"AMOX",             canonical:"Amoxicillin 500mg Capsule",                 domain:"Pharmacy",        code:"PHA003", confidence:100 },
  { messy:"AMOXIL",           canonical:"Amoxicillin 500mg Capsule",                 domain:"Pharmacy",        code:"PHA003", confidence:100 },
  { messy:"BRUFEN",           canonical:"Ibuprofen 400mg Tablet",                    domain:"Pharmacy",        code:"PHA004", confidence:100 },
  { messy:"FLAGYL",           canonical:"Metronidazole 400mg Tablet",                domain:"Pharmacy",        code:"PHA005", confidence:100 },
  { messy:"METRO",            canonical:"Metronidazole 400mg Tablet",                domain:"Pharmacy",        code:"PHA005", confidence:100 },
  { messy:"SEPTRIN",          canonical:"Co-trimoxazole 960mg Tablet",               domain:"Pharmacy",        code:"PHA006", confidence:100 },
  { messy:"COTRIMOXAZOLE",    canonical:"Co-trimoxazole 960mg Tablet",               domain:"Pharmacy",        code:"PHA006", confidence:100 },
  { messy:"CIPROXIN",         canonical:"Ciprofloxacin 500mg Tablet",                domain:"Pharmacy",        code:"PHA007", confidence:100 },
  { messy:"CIPRO",            canonical:"Ciprofloxacin 500mg Tablet",                domain:"Pharmacy",        code:"PHA007", confidence:100 },
  { messy:"VOLTAREN",         canonical:"Diclofenac 50mg Tablet",                    domain:"Pharmacy",        code:"PHA008", confidence:100 },
  { messy:"DICLOFENAC",       canonical:"Diclofenac 50mg Tablet",                    domain:"Pharmacy",        code:"PHA008", confidence:100 },
  { messy:"OMEPRAZOLE",       canonical:"Omeprazole 20mg Capsule",                   domain:"Pharmacy",        code:"PHA009", confidence:100 },
  { messy:"LOSEC",            canonical:"Omeprazole 20mg Capsule",                   domain:"Pharmacy",        code:"PHA009", confidence:100 },
  { messy:"LASIX",            canonical:"Furosemide 40mg Tablet",                    domain:"Pharmacy",        code:"PHA010", confidence:100 },
  { messy:"FRUSEMIDE",        canonical:"Furosemide 40mg Tablet",                    domain:"Pharmacy",        code:"PHA010", confidence:100 },
  { messy:"FUROSEMIDE",       canonical:"Furosemide 40mg Tablet",                    domain:"Pharmacy",        code:"PHA010", confidence:100 },
  { messy:"ACTRAPID",         canonical:"Insulin Regular (Soluble)",                 domain:"Pharmacy",        code:"PHA011", confidence:100 },
  { messy:"MIXTARD",          canonical:"Insulin Mixtard 30/70",                     domain:"Pharmacy",        code:"PHA012", confidence:100 },
  { messy:"GLUCOPHAGE",       canonical:"Metformin 500mg Tablet",                    domain:"Pharmacy",        code:"PHA013", confidence:100 },
  { messy:"METFORMIN",        canonical:"Metformin 500mg Tablet",                    domain:"Pharmacy",        code:"PHA013", confidence:100 },
  { messy:"AMLODIPINE",       canonical:"Amlodipine 5mg Tablet",                     domain:"Pharmacy",        code:"PHA014", confidence:100 },
  { messy:"NORVASC",          canonical:"Amlodipine 5mg Tablet",                     domain:"Pharmacy",        code:"PHA014", confidence:100 },
  { messy:"ATENOLOL",         canonical:"Atenolol 50mg Tablet",                      domain:"Pharmacy",        code:"PHA015", confidence:100 },
  { messy:"TENORMIN",         canonical:"Atenolol 50mg Tablet",                      domain:"Pharmacy",        code:"PHA015", confidence:100 },
  { messy:"LISINOPRIL",       canonical:"Lisinopril 5mg Tablet",                     domain:"Pharmacy",        code:"PHA016", confidence:100 },
  { messy:"CAPTOPRIL",        canonical:"Captopril 25mg Tablet",                     domain:"Pharmacy",        code:"PHA017", confidence:100 },
  { messy:"ASPIRIN",          canonical:"Aspirin 75mg Tablet",                       domain:"Pharmacy",        code:"PHA018", confidence:100 },
  { messy:"WARFARIN",         canonical:"Warfarin 5mg Tablet",                       domain:"Pharmacy",        code:"PHA019", confidence:100 },
  { messy:"HEPARIN",          canonical:"Heparin Sodium Injection",                  domain:"Pharmacy",        code:"PHA020", confidence:100 },
  { messy:"CEFTRIAXONE",      canonical:"Ceftriaxone 1g Injection",                  domain:"Pharmacy",        code:"PHA021", confidence:100 },
  { messy:"ROCEPHIN",         canonical:"Ceftriaxone 1g Injection",                  domain:"Pharmacy",        code:"PHA021", confidence:100 },
  { messy:"DOXYCYCLINE",      canonical:"Doxycycline 100mg Capsule",                 domain:"Pharmacy",        code:"PHA022", confidence:100 },
  { messy:"COARTEM",          canonical:"Artemether-Lumefantrine Tablet",            domain:"Pharmacy",        code:"PHA023", confidence:100 },
  { messy:"ARTEMETHER",       canonical:"Artemether-Lumefantrine Tablet",            domain:"Pharmacy",        code:"PHA023", confidence:100 },
  { messy:"QUININE",          canonical:"Quinine 300mg Tablet",                      domain:"Pharmacy",        code:"PHA024", confidence:100 },
  { messy:"PREDNISOLONE",     canonical:"Prednisolone 5mg Tablet",                   domain:"Pharmacy",        code:"PHA025", confidence:100 },
  { messy:"DEXAMETHASONE",    canonical:"Dexamethasone 4mg Injection",               domain:"Pharmacy",        code:"PHA026", confidence:100 },
  { messy:"HYDROCORTISONE",   canonical:"Hydrocortisone 100mg Injection",            domain:"Pharmacy",        code:"PHA027", confidence:100 },
  { messy:"SALBUTAMOL",       canonical:"Salbutamol 2.5mg Nebuliser Solution",       domain:"Pharmacy",        code:"PHA028", confidence:100 },
  { messy:"VENTOLIN",         canonical:"Salbutamol 2.5mg Nebuliser Solution",       domain:"Pharmacy",        code:"PHA028", confidence:100 },
  { messy:"ZITHROMAX",        canonical:"Azithromycin 500mg Tablet",                 domain:"Pharmacy",        code:"PHA029", confidence:100 },
  { messy:"AZITHROMYCIN",     canonical:"Azithromycin 500mg Tablet",                 domain:"Pharmacy",        code:"PHA029", confidence:100 },
  { messy:"ERYTHROMYCIN",     canonical:"Erythromycin 500mg Tablet",                 domain:"Pharmacy",        code:"PHA030", confidence:100 },
  { messy:"GENTAMICIN",       canonical:"Gentamicin 80mg Injection",                 domain:"Pharmacy",        code:"PHA031", confidence:100 },
  // ── MEDICAL DEVICES ─────────────────────────────────────────────────────────
  { messy:"BP MACHINE",       canonical:"Sphygmomanometer Electronic",               domain:"Medical Devices", code:"DEV001", confidence:100 },
  { messy:"GLUCOMETER",       canonical:"Blood Glucose Monitor",                     domain:"Medical Devices", code:"DEV002", confidence:100 },
  { messy:"PULSE OX",         canonical:"Pulse Oximeter",                            domain:"Medical Devices", code:"DEV003", confidence:100 },
  { messy:"SPO2",             canonical:"Pulse Oximeter",                            domain:"Medical Devices", code:"DEV003", confidence:100 },
  { messy:"NEBULISER",        canonical:"Nebuliser Machine",                         domain:"Medical Devices", code:"DEV004", confidence:100 },
  { messy:"NEBULIZER",        canonical:"Nebuliser Machine",                         domain:"Medical Devices", code:"DEV004", confidence:100 },
  { messy:"INFUSION PUMP",    canonical:"Infusion Pump",                             domain:"Medical Devices", code:"DEV005", confidence:100 },
  { messy:"SYRINGE PUMP",     canonical:"Syringe Infusion Pump",                    domain:"Medical Devices", code:"DEV006", confidence:100 },
  { messy:"ECG MACHINE",      canonical:"ECG Machine 12-Lead",                       domain:"Medical Devices", code:"DEV007", confidence:100 },
  { messy:"SUCTION MACHINE",  canonical:"Suction Machine",                           domain:"Medical Devices", code:"DEV008", confidence:100 },
  // ── CONSUMABLES ─────────────────────────────────────────────────────────────
  { messy:"IV DRIP",          canonical:"IV Administration Set",                     domain:"Consumables",     code:"CON001", confidence:100 },
  { messy:"DRIP SET",         canonical:"IV Administration Set",                     domain:"Consumables",     code:"CON001", confidence:100 },
  { messy:"IV SET",           canonical:"IV Administration Set",                     domain:"Consumables",     code:"CON001", confidence:100 },
  { messy:"CANNULA",          canonical:"IV Cannula",                                domain:"Consumables",     code:"CON002", confidence:100 },
  { messy:"VENFLON",          canonical:"IV Cannula",                                domain:"Consumables",     code:"CON002", confidence:100 },
  { messy:"BRANULA",          canonical:"IV Cannula",                                domain:"Consumables",     code:"CON002", confidence:100 },
  { messy:"NORMAL SALINE",    canonical:"Normal Saline 0.9% 500ml",                 domain:"Consumables",     code:"CON003", confidence:100 },
  { messy:"DEXTROSE",         canonical:"Dextrose 5% 500ml",                         domain:"Consumables",     code:"CON004", confidence:100 },
  { messy:"RINGER LACTATE",   canonical:"Ringers Lactate 500ml",                    domain:"Consumables",     code:"CON005", confidence:100 },
  { messy:"RL",               canonical:"Ringers Lactate 500ml",                    domain:"Consumables",     code:"CON005", confidence:90  },
  { messy:"URINARY CATH",     canonical:"Urinary Catheter Foley",                   domain:"Consumables",     code:"CON006", confidence:100 },
  { messy:"FOLEY CATH",       canonical:"Urinary Catheter Foley",                   domain:"Consumables",     code:"CON006", confidence:100 },
  { messy:"NGT",              canonical:"Nasogastric Tube",                         domain:"Consumables",     code:"CON007", confidence:100 },
  { messy:"SUTURES",          canonical:"Sutures Absorbable",                       domain:"Consumables",     code:"CON008", confidence:100 },
  { messy:"BANDAGE",          canonical:"Bandage Crepe",                            domain:"Consumables",     code:"CON009", confidence:100 },
  { messy:"OXYGEN MASK",      canonical:"Oxygen Mask",                              domain:"Consumables",     code:"CON010", confidence:100 },
  // ── SERVICES ────────────────────────────────────────────────────────────────
  { messy:"SPEC CONS",        canonical:"Specialist Consultation",                  domain:"Services",        code:"SVC001", confidence:100 },
  { messy:"SPEC REVIEW",      canonical:"Specialist Review",                        domain:"Services",        code:"SVC002", confidence:100 },
  { messy:"OPD CONS",         canonical:"Outpatient Consultation",                  domain:"Services",        code:"SVC003", confidence:100 },
  { messy:"CASUALTY",         canonical:"Emergency Consultation",                   domain:"Services",        code:"SVC004", confidence:100 },
  { messy:"A/E CONS",         canonical:"Accident and Emergency Consultation",      domain:"Services",        code:"SVC004", confidence:100 },
  { messy:"IPD CONS",         canonical:"Inpatient Consultation",                   domain:"Services",        code:"SVC005", confidence:100 },
  { messy:"WARD ROUNDS",      canonical:"Inpatient Ward Round",                     domain:"Services",        code:"SVC006", confidence:100 },
  { messy:"ICU",              canonical:"Intensive Care Unit Charges",              domain:"Services",        code:"SVC007", confidence:100 },
  { messy:"HDU",              canonical:"High Dependency Unit Charges",             domain:"Services",        code:"SVC008", confidence:100 },
  { messy:"NURSING CARE",     canonical:"Nursing Care Daily",                       domain:"Services",        code:"SVC009", confidence:100 },
  { messy:"PHYSIO",           canonical:"Physiotherapy Session",                    domain:"Services",        code:"SVC010", confidence:100 },
  { messy:"PHYSIOTHERAPY",    canonical:"Physiotherapy Session",                    domain:"Services",        code:"SVC010", confidence:100 },
  { messy:"THEATRE",          canonical:"Operating Theatre Charges",                domain:"Services",        code:"SVC011", confidence:100 },
  { messy:"OT CHARGES",       canonical:"Operating Theatre Charges",                domain:"Services",        code:"SVC011", confidence:100 },
  { messy:"ANAESTHESIA",      canonical:"General Anaesthesia",                      domain:"Services",        code:"SVC012", confidence:100 },
  { messy:"GA",               canonical:"General Anaesthesia",                      domain:"Services",        code:"SVC012", confidence:90  },
  { messy:"SPINAL",           canonical:"Spinal Anaesthesia",                       domain:"Services",        code:"SVC013", confidence:100 },
  { messy:"LA",               canonical:"Local Anaesthesia",                        domain:"Services",        code:"SVC014", confidence:90  },
  { messy:"DIETICIAN",        canonical:"Dietitian Consultation",                   domain:"Services",        code:"SVC015", confidence:100 },
  // ── BILLING ─────────────────────────────────────────────────────────────────
  { messy:"BED CHARGES",      canonical:"Hospital Bed Charges Daily",               domain:"Billing",         code:"BIL001", confidence:100 },
  { messy:"ACCOMMODATION",    canonical:"Hospital Bed Charges Daily",               domain:"Billing",         code:"BIL001", confidence:100 },
  { messy:"ADMISSION FEE",    canonical:"Hospital Admission Fee",                   domain:"Billing",         code:"BIL002", confidence:100 },
  { messy:"DISCHARGE FEE",    canonical:"Hospital Discharge Processing Fee",        domain:"Billing",         code:"BIL003", confidence:100 },
  { messy:"REGISTRATION",     canonical:"Patient Registration Fee",                 domain:"Billing",         code:"BIL004", confidence:100 },
];

// ── Helpers ────────────────────────────────────────────────────────────────────
function normalize(str: any): string {
  return String(str || "").toUpperCase().trim()
    .replace(/[^A-Z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function aliasLookup(name: any, aliases: any[]) {
  const n = normalize(name);
  if (!n) return null;
  // Exact match
  const exact = aliases.find(a => normalize(a.messy) === n);
  if (exact) return { hit: exact, matchType: "exact" };
  // Starts-with match (both directions)
  const starts = aliases.find(a => n.startsWith(normalize(a.messy)) || normalize(a.messy).startsWith(n));
  if (starts) return { hit: starts, matchType: "partial" };
  // Contains match — only for alias terms ≥5 chars to prevent "LA", "RL", "NS" false-positives
  const contains = aliases.find(a => {
    const m = normalize(a.messy);
    return m.length >= 5 && (n.includes(m) || m.includes(n));
  });
  if (contains) return { hit: contains, matchType: "contains" };
  return null;
}

async function aiSuggestAliases(
  rows: any[], existingAliases: any[], logFn: (m: string) => void,
  apiKey: string, groqKey = "", orKey = "",
  cerebrasKey = "", togetherKey = "", mistralKey = "", cohereKey = "", deepseekKey = ""
) {
  const CHUNK = 30;
  const results: Record<number, any> = {};
  const RAW_JSON_SUFFIX = "\n\nRespond with ONLY a raw JSON array. No markdown, no backticks.";

  // Provider chain: try each in order until one succeeds
  type ProviderEntry = { id: string; key: string; call: (p: string) => Promise<string> };
  const providerChain: ProviderEntry[] = [
    { id:"ai",           key:apiKey,      call:(p)=>callGemini(apiKey, p, 3000) },
    { id:"ai-deepseek",  key:deepseekKey, call:(p)=>callDeepSeek(deepseekKey, p+RAW_JSON_SUFFIX, 2000) },
    { id:"ai-cerebras",  key:cerebrasKey, call:(p)=>callCerebras(cerebrasKey, p+RAW_JSON_SUFFIX, 2000) },
    { id:"ai-groq",      key:groqKey,     call:(p)=>callGroq(groqKey, p+RAW_JSON_SUFFIX, 2000) },
    { id:"ai-openrouter",key:orKey,       call:(p)=>callOpenRouter(orKey, p+RAW_JSON_SUFFIX, 2000) },
    { id:"ai-mistral",   key:mistralKey,  call:(p)=>callMistral(mistralKey, p+RAW_JSON_SUFFIX, 2000) },
    { id:"ai-together",  key:togetherKey, call:(p)=>callTogetherAI(togetherKey, p+RAW_JSON_SUFFIX, 2000) },
    { id:"ai-cohere",    key:cohereKey,   call:(p)=>callCohere(cohereKey, p+RAW_JSON_SUFFIX, 2000) },
  ].filter(e => e.key.trim()); // only include providers with a key set

  for (let i = 0; i < rows.length; i += CHUNK) {
    const chunk = rows.slice(i, i + CHUNK);
    const batchNum = Math.floor(i / CHUNK) + 1;
    logFn(`🤖 AI batch ${batchNum} (${chunk.length} items)...`);

    const prompt = `You are a clinical terminology expert for an East African hospital insurance system.
For each item below determine if it is a known abbreviation, shorthand, or alternate name for a standard medical term.

Items to analyze:
${JSON.stringify(chunk.map(r => ({ id: r._idx, name: r.name, category: r.category })))}

Respond ONLY with a valid JSON array. No markdown, no backticks:
[{"id":0,"isAlias":true,"canonicalName":"Full Blood Count","suggestAdd":true,"confidence":95,"reason":"FBC is a standard abbreviation"}]`;

    let text = "";
    let usedProvider = "";

    for (const prov of providerChain) {
      try {
        text = await prov.call(prompt);
        if (text.trim()) { usedProvider = prov.id; break; }
      } catch (e: any) {
        logFn(`⚠️ ${sourceLabel(prov.id)} batch ${batchNum}: ${e.message.slice(0, 80)}`);
      }
    }

    if (!text) { logFn(`❌ All AI providers failed for batch ${batchNum} — ${chunk.length} items left unresolved`); continue; }

    const clean = text.replace(/^```(?:json)?\s*/im, "").replace(/\s*```\s*$/im, "").trim();
    const m = clean.match(/\[[\s\S]*\]/);
    if (!m) { logFn(`⚠️ No JSON array in AI response (${usedProvider}) batch ${batchNum}`); continue; }

    JSON.parse(m[0]).forEach((r: any) => { results[r.id] = { ...r, _provider: usedProvider }; });
    logFn(`🤖 Batch ${batchNum} done via ${sourceLabel(usedProvider)}.`);
  }
  return results;
}

function parseFile(file: File): Promise<{ headers: string[]; rows: any[] }> {
  return new Promise((res, rej) => {
    const ext = file.name.split(".").pop()?.toLowerCase();
    const r = new FileReader();
    r.onerror = () => rej(new Error("Read failed"));
    if (ext === "csv") {
      r.onload = e => {
        try {
          const lines = (e.target!.result as string).split(/\r?\n/).filter(Boolean);
          const hdrs = lines[0].split(",").map(h => h.trim().replace(/^"|"$/g, ""));
          const rows = lines.slice(1).map(l => {
            const v = l.split(",").map(x => x.trim().replace(/^"|"$/g, ""));
            return Object.fromEntries(hdrs.map((h, i) => [h, v[i] || ""]));
          });
          res({ headers: hdrs, rows });
        } catch (err) { rej(err); }
      };
      r.readAsText(file);
    } else {
      r.onload = e => {
        try {
          const wb = XLSX.read(e.target!.result, { type: "binary" });
          const rows = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { defval: "" });
          res({ headers: rows.length ? Object.keys(rows[0] as any) : [], rows: rows as any[] });
        } catch (err) { rej(err); }
      };
      r.readAsBinaryString(file);
    }
  });
}

function detectCols(rows: any[]) {
  if (!rows.length) return {} as any;
  const keys = Object.keys(rows[0]);
  const find = (ps: string[]) => keys.find(k => ps.some(p => k.toLowerCase().includes(p)));
  return {
    code:     find(["code", "id", "ref"]),
    name:     find(["name", "description", "procedure", "item", "test"]),
    category: find(["category", "cat", "type", "domain", "dept"]),
  };
}

function exportExcel(rows: any[], fname: string) {
  const ws = XLSX.utils.json_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Results");
  XLSX.writeFile(wb, fname);
}

// ── Test Scenarios ─────────────────────────────────────────────────────────────
const TEST_SCENARIOS = [
  {
    id: "abbrev", label: "⚡ Abbreviations & Shorthand",
    desc: "Tests instant dictionary lookup — should all resolve in milliseconds, no API calls needed",
    rows: [
      { code:"T001", name:"FBC",           category:"HAEM"  },
      { code:"T002", name:"CBC",           category:"HAEM"  },
      { code:"T003", name:"CXR",           category:"XRAY"  },
      { code:"T004", name:"TFT",           category:"ENDO"  },
      { code:"T005", name:"LFT",           category:"CHEM"  },
      { code:"T006", name:"ECG",           category:"CARD"  },
      { code:"T007", name:"USS ABDOMEN",   category:"RAD"   },
      { code:"T008", name:"PANADOL",       category:"PHARM" },
      { code:"T009", name:"AUGMENTIN",     category:"PHARM" },
      { code:"T010", name:"COARTEM",       category:"PHARM" },
      { code:"T011", name:"OPD CONS",      category:"CONS"  },
      { code:"T012", name:"ICU",           category:"SVC"   },
      { code:"T013", name:"IV DRIP",       category:"CONS"  },
      { code:"T014", name:"VENFLON",       category:"CONS"  },
    ]
  },
  {
    id: "freeapi", label: "🌐 Trade Names & Free API Lookup",
    desc: "Tests RxNorm / Wikidata / PubChem — drug brand names & clinical terms NOT in seed dictionary",
    rows: [
      { code:"F001", name:"Panado",              category:"PHARM" },
      { code:"F002", name:"Nurofen",             category:"PHARM" },
      { code:"F003", name:"Zovirax",             category:"PHARM" },
      { code:"F004", name:"Penicillin V",        category:"PHARM" },
      { code:"F005", name:"Thoracic X-Ray",      category:"XRAY"  },
      { code:"F006", name:"Abdominal CT",        category:"CT"    },
      { code:"F007", name:"Peak Flow Meter",     category:"DEVICE"},
      { code:"F008", name:"Lactulose",           category:"PHARM" },
      { code:"F009", name:"Adrenaline",          category:"PHARM" },
      { code:"F010", name:"Activated Charcoal",  category:"PHARM" },
    ]
  },
  {
    id: "mixed", label: "🔀 Mixed — All Tiers",
    desc: "Mix of instant dictionary hits, free API lookups, and AI-required jargon",
    rows: [
      { code:"M001", name:"FBC",                     category:"HAEM"  },
      { code:"M002", name:"Holter Monitor 24HR",      category:"CARD"  },
      { code:"M003", name:"Brufen",                   category:"PHARM" },
      { code:"M004", name:"CT Brain Plain",           category:"CT"    },
      { code:"M005", name:"TFT",                      category:"ENDO"  },
      { code:"M006", name:"Atorvastatin",             category:"PHARM" },
      { code:"M007", name:"HEART TRACING",            category:"CARD"  },
      { code:"M008", name:"CXR",                      category:"XRAY"  },
      { code:"M009", name:"BLOOD SUGAR FASTING",      category:"ENDO"  },
      { code:"M010", name:"BLOOD THINNERS HEPARIN",   category:"PHARM" },
      { code:"M011", name:"DRIP SET",                 category:"CONS"  },
      { code:"M012", name:"BRAIN SCAN MRI",           category:"MRI"   },
    ]
  },
];

// ── Badges ─────────────────────────────────────────────────────────────────────
function Badge({ type, text }: { type: string; text: string }) {
  const cfg: Record<string, { bg: string; c: string }> = {
    "instant":   { bg:"#dcfce7", c:"#16a34a" },
    "partial":   { bg:"#fef9c3", c:"#b45309" },
    "ai-found":  { bg:"#ecfdf5", c:"#059669" },
    "no-match":  { bg:"#f1f5f9", c:"#64748b" },
    "free-rxnorm":   { bg:"#fff7ed", c:"#ea580c" },
    "free-wikidata": { bg:"#eff6ff", c:"#2563eb" },
    "free-pubchem":  { bg:"#f5f3ff", c:"#7c3aed" },
  };
  const s = cfg[type] || cfg["no-match"];
  return <span style={{ padding:"2px 9px", borderRadius:99, fontSize:10, fontWeight:700, background:s.bg, color:s.c }}>{text}</span>;
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function AliasEngine({
  onComplete,
  prefillData,
}: {
  onComplete?: (data: { resolved: any[]; aliases: any[] }) => void;
  prefillData?: { triaged?: any[] } | null;
} = {}) {
  const [aliases, setAliases]               = useState([...SEED_ALIASES]);
  const [results, setResults]               = useState<any[]>([]);
  const [pending, setPending]               = useState<any[]>([]);
  const [approvedUpdates, setApprovedUpdates] = useState<any[]>([]);
  const [status, setStatus]                 = useState("idle");
  const [mode, setMode]                     = useState("home");
  const [logs, setLogs]                     = useState<string[]>([]);
  const [tab, setTab]                       = useState("results");
  const [stats, setStats]                   = useState<any>(null);
  const [fileName, setFileName]             = useState("");
  const [activeScenario, setActive]         = useState<string | null>(null);
  const [dictionarySearch, setDSearch]      = useState("");
  const [newAlias, setNewAlias]             = useState({ messy:"", canonical:"", domain:"Laboratory", code:"" });
  const [apiKey,       setApiKey]      = useState(() => getStoredKey("gemini"));
  const [groqKey,      setGroqKey]     = useState(() => getStoredKey("groq"));
  const [orKey,        setOrKey]       = useState(() => getStoredKey("openRouter")); // fixed: was "openrouter"
  const [cerebrasKey]                  = useState(() => getStoredKey("cerebras"));
  const [togetherKey]                  = useState(() => getStoredKey("togetherAI"));
  const [mistralKey]                   = useState(() => getStoredKey("mistral"));
  const [cohereKey]                    = useState(() => getStoredKey("cohere"));
  const [deepseekKey]                  = useState(() => getStoredKey("deepseek"));
  const [umlsKey]                      = useState(() => getStoredKey("umls"));
  const [bioportalKey]                 = useState(() => getStoredKey("bioportal"));
  const [showKey, setShowKey]               = useState(false);

  useEffect(() => {
    if (prefillData?.triaged?.length) {
      setFileName("Pre-filled from M2 Triage");
      setMode("upload");
      process(prefillData.triaged, null, null);
    }
  }, [prefillData]);

  const log = (msg: string) => setLogs(p => [...p, `[${new Date().toLocaleTimeString()}] ${msg}`]);

  async function process(rawRows: any[], colMap: any, scenarioId: string | null) {
    setStatus("processing"); setResults([]); setPending([]); setLogs([]);

    const allNorm = rawRows.map((row, idx) => ({
      _idx: idx,
      code:     colMap ? (row[colMap.code] || "") : (row.code || ""),
      name:     colMap ? (row[colMap.name] || "") : (row.name || ""),
      category: colMap ? (row[colMap.category] || "") : (row.category || ""),
    }));

    // Deduplicate by normalized name
    const nameMap = new Map<string, any>();
    allNorm.forEach(row => { const k = normalize(row.name); if (k && !nameMap.has(k)) nameMap.set(k, row); });
    const uniqueRows = Array.from(nameMap.values());
    log(`${allNorm.length} rows → ${uniqueRows.length} unique names (${allNorm.length - uniqueRows.length} duplicates skipped)`);

    // Tier 1: Dictionary
    const hits: any[] = [], misses: any[] = [];
    uniqueRows.forEach(row => {
      const r = aliasLookup(row.name, aliases);
      if (r) {
        hits.push({ ...row, aliasHit: r.hit, matchType: r.matchType });
        log(`⚡ INSTANT: "${row.name}" → "${r.hit.canonical}" [${r.matchType}]`);
      } else {
        misses.push(row);
      }
    });
    log(`Dictionary: ${hits.length} instant, ${misses.length} sent to free APIs...`);

    // Tiers 2-4: Free APIs
    let freeHits: Record<number, any> = {};
    if (misses.length > 0) {
      setStatus("freeapi");
      try { freeHits = await runFreeAPIWaterfall(misses, log, umlsKey, bioportalKey); }
      catch (err: any) { log(`Free API ERROR: ${err.message}`); }
    }

    // Tier 5: Gemini AI for remaining unknowns
    const aiTargets = misses.filter(r => !freeHits[r._idx]);
    let aiResults: Record<number, any> = {};
    if (aiTargets.length > 0) {
      const hasAnyAI = apiKey.trim() || groqKey.trim() || orKey.trim() || cerebrasKey.trim() || togetherKey.trim() || mistralKey.trim() || cohereKey.trim() || deepseekKey.trim();
      if (hasAnyAI) {
        setStatus("ai");
        try { aiResults = await aiSuggestAliases(aiTargets, aliases, log, apiKey, groqKey, orKey, cerebrasKey, togetherKey, mistralKey, cohereKey, deepseekKey); }
        catch (err: any) { log(`AI ERROR: ${err.message}`); }
      } else {
        log(`⚠️ ${aiTargets.length} items still unresolved — add an API key (Gemini / Groq / OpenRouter / Cerebras / DeepSeek / etc.) to resolve them.`);
      }
    }

    // Build final resolved map (unique)
    const newPending: any[] = [];
    const resolvedByIdx: Record<number, any> = {};

    hits.forEach(h => {
      resolvedByIdx[h._idx] = {
        resolvedName:   h.aliasHit.canonical,
        resolvedCode:   h.aliasHit.code,
        resolvedDomain: h.aliasHit.domain,
        confidence:     h.aliasHit.confidence,
        stage:          "dictionary",
        matchBadge:     h.matchType === "exact" ? "instant" : "partial",
        source:         "dictionary",
        aiReason:       null,
      };
    });

    misses.forEach(row => {
      const fh = freeHits[row._idx];
      if (fh) {
        resolvedByIdx[row._idx] = {
          resolvedName:   fh.canonical,
          resolvedCode:   "",
          resolvedDomain: detectDomain(row),
          confidence:     fh.confidence,
          stage:          fh.source,
          matchBadge:     `free-${fh.source}`,
          source:         fh.source,
          aiReason:       fh.description || null,
        };
        newPending.push({
          messy:    row.name,
          canonical: fh.canonical,
          domain:   detectDomain(row),
          code:     "",
          confidence: fh.confidence,
          reason:   `${sourceLabel(fh.source)}: "${fh.canonical}"${fh.description ? ` — ${fh.description.slice(0, 80)}` : ""}`,
          source:   fh.source,
          sourceRow: row,
          primsUrl: isPharmacyItem(row)
            ? `https://prims.pharmacyboardkenya.org/pharma_register_r_public/?search=${encodeURIComponent(row.name)}`
            : null,
        });
        return;
      }
      const ai = aiResults[row._idx];
      const isAlias = ai?.isAlias && ai.confidence >= 70;
      if (ai?.suggestAdd && ai.confidence >= 70) {
        newPending.push({
          messy:     row.name,
          canonical: ai.canonicalName,
          domain:    detectDomain(row),
          code:      "",
          confidence: ai.confidence,
          reason:    ai.reason,
          source:    "ai",
          sourceRow: row,
          primsUrl:  isPharmacyItem(row)
            ? `https://prims.pharmacyboardkenya.org/pharma_register_r_public/?search=${encodeURIComponent(row.name)}`
            : null,
        });
      }
      resolvedByIdx[row._idx] = {
        resolvedName:   isAlias ? ai.canonicalName : row.name,
        resolvedCode:   "",
        resolvedDomain: isAlias ? detectDomain(row) : "",
        confidence:     ai?.confidence ?? 0,
        stage:          isAlias ? "ai" : "no-match",
        matchBadge:     isAlias ? "ai-found" : "no-match",
        source:         "ai",
        aiReason:       ai?.reason ?? null,
      };
    });

    // Re-map back to all rows (including duplicates)
    const resolvedByName = new Map<string, any>();
    uniqueRows.forEach(row => resolvedByName.set(normalize(row.name), resolvedByIdx[row._idx] || {}));

    const allResults = allNorm.map((row, i) => {
      const resolved = resolvedByName.get(normalize(row.name)) || {};
      return { ...row, _idx: i, code: row.code, ...resolved };
    });

    const countBy = (field: string, val: string) => allResults.filter(r => r[field] === val).length;
    const instants      = countBy("stage", "dictionary");
    const rxnormHits    = countBy("stage", "rxnorm");
    const wikidataHits  = countBy("stage", "wikidata");
    const pubchemHits   = countBy("stage", "pubchem");
    const openfdaHits   = countBy("stage", "openfda");
    const ncievsHits    = countBy("stage", "ncievs");
    const meshHits      = countBy("stage", "mesh");
    const keggHits      = countBy("stage", "kegg");
    const uniprotHits   = countBy("stage", "uniprot");
    const snomedHits    = countBy("stage", "snomed");
    const loincHits     = countBy("stage", "loinc");
    const icd10pcsHits  = countBy("stage", "icd10pcs");
    const umlsHits      = countBy("stage", "umls");
    const chemblHits    = countBy("stage", "chembl");
    const icd10cmHits   = countBy("stage", "icd10cm");
    const bioportalHits = countBy("stage", "bioportal");
    const aiFound       = countBy("stage","ai") + countBy("stage","ai-groq") + countBy("stage","ai-openrouter")
                        + countBy("stage","ai-cerebras") + countBy("stage","ai-together")
                        + countBy("stage","ai-mistral") + countBy("stage","ai-cohere") + countBy("stage","ai-deepseek");
    const noMatch       = countBy("stage", "no-match");

    setPending(newPending);
    setStats({ total: allResults.length, instants, rxnormHits, wikidataHits, pubchemHits, openfdaHits, ncievsHits, meshHits, keggHits, uniprotHits, snomedHits, loincHits, icd10pcsHits, umlsHits, chemblHits, icd10cmHits, bioportalHits, aiFound, noMatch, suggestions: newPending.length });
    setResults(allResults);
    setStatus("done");
    setTab("results");
    const freeTotal = rxnormHits + wikidataHits + pubchemHits + openfdaHits + ncievsHits + meshHits + keggHits + uniprotHits + snomedHits + loincHits + icd10pcsHits + umlsHits + chemblHits + icd10cmHits + bioportalHits;
    log(`✅ Done. ⚡${instants} dict | 🌐${freeTotal} free APIs | 🤖${aiFound} AI | ❓${noMatch} unresolved`);
  }

  async function handleTestScenario(s: any) {
    setActive(s.id); setFileName(`TEST: ${s.label}`);
    await process(s.rows, null, s.id);
  }

  async function handleRealFile(file: File) {
    setActive(null); setFileName(file.name); setStatus("parsing");
    try {
      const { rows } = await parseFile(file);
      const c = detectCols(rows);
      log(`Parsed: ${rows.length} rows | Name col: ${c.name}`);
      await process(rows, c, null);
    } catch (err: any) { log(`ERROR: ${err.message}`); setStatus("idle"); }
  }

  function approvePending(idx: number) {
    const p = pending[idx];
    const entry = { messy: normalize(p.messy), canonical: p.canonical, domain: p.domain || "Unknown", code: p.code || "", confidence: p.confidence };
    setAliases(prev => [...prev, entry]);
    setApprovedUpdates(prev => [...prev, { ...p, approvedAt: new Date().toISOString() }]);
    setPending(prev => prev.filter((_, i) => i !== idx));
    log(`✅ Approved: "${p.messy}" → "${p.canonical}" [${p.domain}] via ${sourceLabel(p.source)}`);
  }

  function rejectPending(idx: number) {
    const p = pending[idx];
    setPending(prev => prev.filter((_, i) => i !== idx));
    log(`❌ Rejected: "${p.messy}"`);
  }

  function approveAll() {
    const all = [...pending];
    const newEntries = all.map(p => ({ messy: normalize(p.messy), canonical: p.canonical, domain: p.domain || "Unknown", code: p.code || "", confidence: p.confidence }));
    setAliases(prev => [...prev, ...newEntries]);
    setApprovedUpdates(prev => [...prev, ...all.map(p => ({ ...p, approvedAt: new Date().toISOString() }))]);
    setPending([]);
    log(`✅ Approved all ${all.length} aliases.`);
  }

  function addManualAlias() {
    if (!newAlias.messy.trim() || !newAlias.canonical.trim()) return;
    setAliases(prev => [...prev, { ...newAlias, messy: normalize(newAlias.messy), confidence: 100 }]);
    setNewAlias({ messy:"", canonical:"", domain:"Laboratory", code:"" });
    log(`✅ Manual alias added: "${newAlias.messy}" → "${newAlias.canonical}"`);
  }

  function removeAlias(idx: number) { setAliases(prev => prev.filter((_, i) => i !== idx)); }

  function exportMasterUpdates() {
    if (!approvedUpdates.length) return;
    const date = new Date().toLocaleDateString();
    const edenRows = approvedUpdates.map(a => ({
      "Eden Code":           a.code || "(assign code)",
      "Eden Name":           a.canonical,
      "Domain / Category":   a.domain,
      "Resolution Source":   sourceLabel(a.source),
      "Hospital Term":       a.messy,
      "Date Approved":       a.approvedAt ? new Date(a.approvedAt).toLocaleDateString() : date,
      "Notes":               (a.reason || "").slice(0, 100),
    }));
    const mappingRows = approvedUpdates.map(a => ({
      "Hospital Term":       a.messy,
      "Eden Code":           a.code || "(assign code)",
      "Eden Name":           a.canonical,
      "Domain":              a.domain,
      "Source":              sourceLabel(a.source),
      "PRIMS Verify":        a.primsUrl ? `Yes — ${a.primsUrl}` : "N/A",
      "Date":                a.approvedAt ? new Date(a.approvedAt).toLocaleDateString() : date,
    }));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(edenRows), "Eden Master Additions");
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(mappingRows), "Hospital Alias Mapping");
    const fname = `Eden_Updates_${new Date().toISOString().slice(0, 10)}.xlsx`;
    XLSX.writeFile(wb, fname);
    log(`📥 Exported ${approvedUpdates.length} approved updates → ${fname}`);
  }

  function reset() {
    setStatus("idle"); setResults([]); setPending([]); setLogs([]); setStats(null);
    setFileName(""); setActive(null); setMode("home");
  }

  const isProcessing = ["processing", "freeapi", "ai", "parsing"].includes(status);
  const DOMAIN_LIST = ["Laboratory","Radiology","Procedures","Pharmacy","Medical Devices","Consumables","Services","Billing"];
  const filteredDict = aliases.filter(a =>
    !dictionarySearch ||
    a.messy.toLowerCase().includes(dictionarySearch.toLowerCase()) ||
    a.canonical.toLowerCase().includes(dictionarySearch.toLowerCase())
  );

  const statusIcon = status === "parsing" ? "📂" : status === "freeapi" ? "🌐" : status === "ai" ? "🤖" : "⚡";
  const statusText = status === "parsing" ? "Parsing file..." : status === "processing" ? "Checking dictionary..." :
    status === "freeapi" ? "Querying RxNorm · Wikidata · PubChem..." : "AI analyzing remaining unknowns...";

  return (
    <div style={{ fontFamily:"system-ui,sans-serif", maxWidth:1100, margin:"0 auto", padding:24, background:"#f1f5f9", minHeight:"100vh" }}>

      {/* Header */}
      <div style={{ background:"linear-gradient(135deg,#064e3b,#059669)", borderRadius:14, padding:"18px 24px", marginBottom:24, color:"#fff" }}>
        <div style={{ fontSize:20, fontWeight:700 }}>📚 M3 — Alias / Synonym Engine</div>
        <div style={{ fontSize:12, opacity:.8, marginTop:3 }}>
          5-tier resolution: ⚡ Dictionary ({aliases.length}) → 💊 RxNorm → 🌐 Wikidata → 🧪 PubChem → 🤖 Gemini AI. Learns from every run.
        </div>
      </div>

      {/* HOME */}
      {mode === "home" && (
        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          {/* API Key */}
          <div style={{ background:"#fff", borderRadius:12, padding:16, boxShadow:"0 1px 4px #0001" }}>
            <div style={{ fontWeight:700, fontSize:13, marginBottom:8, color:"#064e3b" }}>🔑 Gemini API Key <span style={{ fontWeight:400, color:"#94a3b8", fontSize:11 }}>(only needed for unknown items that miss all free APIs)</span></div>
            <div style={{ position:"relative" }}>
              <input type={showKey ? "text" : "password"} value={apiKey} onChange={e => { setApiKey(e.target.value); storeKey("gemini", e.target.value); }}
                placeholder="AIza..." style={{ width:"100%", padding:"9px 40px 9px 12px", borderRadius:8, border:"1px solid #e2e8f0", fontSize:13, outline:"none", boxSizing:"border-box", fontFamily:"monospace" }} />
              <button type="button" onClick={() => setShowKey(p => !p)} tabIndex={-1}
                style={{ position:"absolute", right:10, top:"50%", transform:"translateY(-50%)", background:"none", border:"none", cursor:"pointer", fontSize:14, color:"#94a3b8" }}>
                {showKey ? "🙈" : "👁️"}
              </button>
            </div>
            {!apiKey.trim() && <div style={{ fontSize:11, color:"#f59e0b", marginTop:5 }}>⚠️ RxNorm, Wikidata & PubChem are always free. Gemini only activates for items all three miss.</div>}
          </div>

          {/* How it works */}
          <div style={{ background:"#fff", borderRadius:12, padding:20, boxShadow:"0 1px 4px #0001" }}>
            <div style={{ fontWeight:700, fontSize:14, marginBottom:10, color:"#064e3b" }}>Resolution Pipeline</div>
            <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:18 }}>
              {[
                { icon:"⚡", title:`Tier 1 — Dictionary (${aliases.length} entries)`, desc:"Instant lookup across Labs, Radiology, Procedures, Pharmacy, Devices, Consumables, Services, Billing.", color:"#16a34a" },
                { icon:"💊", title:"Tier 2 — RxNorm API (Free)",  desc:"US National Library of Medicine drug database. Resolves trade names → generic INNs. E.g. Panadol → Paracetamol.", color:"#ea580c" },
                { icon:"🌐", title:"Tier 3 — Wikidata (Free)",    desc:"Open medical knowledge graph. Covers labs, procedures, devices, imaging. No API key needed.", color:"#2563eb" },
                { icon:"🧪", title:"Tier 4 — PubChem (Free)",     desc:"NCBI compound database. Molecular synonyms for edge-case drugs not in RxNorm.", color:"#7c3aed" },
                { icon:"🤖", title:"Tier 5 — Gemini AI",          desc:"Only for items all free tiers miss. Identifies hospital jargon and suggests canonical names.", color:"#059669" },
              ].map(s => (
                <div key={s.title} style={{ display:"flex", gap:12, alignItems:"flex-start", padding:10, background:"#f8fafc", borderRadius:8 }}>
                  <div style={{ fontSize:20, width:28, flexShrink:0 }}>{s.icon}</div>
                  <div>
                    <div style={{ fontWeight:700, fontSize:12, color:s.color }}>{s.title}</div>
                    <div style={{ fontSize:11, color:"#64748b", marginTop:1 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              <button onClick={() => setMode("test")} style={{ flex:1, minWidth:160, padding:14, borderRadius:12, border:"2px solid #059669", background:"#f0fdf4", cursor:"pointer", textAlign:"left" }}>
                <div style={{ fontSize:20, marginBottom:4 }}>🧪</div>
                <div style={{ fontWeight:700, color:"#059669" }}>Test Mode</div>
                <div style={{ fontSize:12, color:"#64748b", marginTop:2 }}>3 built-in scenarios including free-API tier tests.</div>
              </button>
              <button onClick={() => setMode("upload")} style={{ flex:1, minWidth:160, padding:14, borderRadius:12, border:"2px solid #2563eb", background:"#eff6ff", cursor:"pointer", textAlign:"left" }}>
                <div style={{ fontSize:20, marginBottom:4 }}>📂</div>
                <div style={{ fontWeight:700, color:"#2563eb" }}>Process Real File</div>
                <div style={{ fontSize:12, color:"#64748b", marginTop:2 }}>Upload CSV / XLSX from your hospital data.</div>
              </button>
              <button onClick={() => { setMode("done"); setTab("dictionary"); }} style={{ flex:1, minWidth:160, padding:14, borderRadius:12, border:"2px solid #7c3aed", background:"#faf5ff", cursor:"pointer", textAlign:"left" }}>
                <div style={{ fontSize:20, marginBottom:4 }}>📖</div>
                <div style={{ fontWeight:700, color:"#7c3aed" }}>View / Edit Dictionary</div>
                <div style={{ fontSize:12, color:"#64748b", marginTop:2 }}>{aliases.length} entries across 8 domains.</div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TEST SELECTION */}
      {mode === "test" && status === "idle" && (
        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          <div style={{ background:"#fff", borderRadius:12, padding:18, boxShadow:"0 1px 4px #0001" }}>
            <div style={{ fontWeight:700, fontSize:14, marginBottom:4, color:"#059669" }}>🧪 Test Mode — 3 Scenarios</div>
            <div style={{ fontSize:12, color:"#64748b", marginBottom:14 }}>Test all 5 tiers: abbreviations hit the dictionary, trade names hit RxNorm/Wikidata, jargon hits Gemini AI.</div>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {TEST_SCENARIOS.map(s => (
                <button key={s.id} onClick={() => handleTestScenario(s)}
                  style={{ padding:14, borderRadius:12, border:"2px solid #6ee7b7", background:"#f0fdf4", cursor:"pointer", textAlign:"left" }}>
                  <div style={{ fontWeight:700, fontSize:13, color:"#059669" }}>{s.label}</div>
                  <div style={{ fontSize:12, color:"#64748b", marginTop:3 }}>{s.desc}</div>
                  <div style={{ fontSize:11, color:"#94a3b8", marginTop:4 }}>{s.rows.length} rows · {s.rows.map(r => r.name).slice(0, 5).join(", ")}…</div>
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => setMode("home")} style={{ padding:"10px 20px", borderRadius:8, border:"none", background:"#e2e8f0", color:"#475569", fontWeight:600, cursor:"pointer", fontSize:13, alignSelf:"flex-start" }}>← Back</button>
        </div>
      )}

      {/* UPLOAD */}
      {mode === "upload" && status === "idle" && (
        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          <div onClick={() => (document.getElementById("m3-upload") as any)?.click()}
            style={{ border:"2px dashed #059669", borderRadius:12, padding:28, textAlign:"center", cursor:"pointer", background:"#f0fdf4" }}>
            <input id="m3-upload" type="file" accept=".csv,.xlsx,.xls" style={{ display:"none" }}
              onChange={e => { const f = e.target.files?.[0]; if (f) handleRealFile(f); }} />
            <div style={{ fontSize:32 }}>📂</div>
            <div style={{ fontWeight:600, color:"#059669", marginTop:8 }}>Drop file here or click to upload</div>
            <div style={{ fontSize:12, color:"#94a3b8", marginTop:4 }}>CSV / XLSX · Handles 50,000+ rows via deduplication</div>
          </div>
          <button onClick={() => setMode("home")} style={{ padding:"10px 20px", borderRadius:8, border:"none", background:"#e2e8f0", color:"#475569", fontWeight:600, cursor:"pointer", fontSize:13, alignSelf:"flex-start" }}>← Back</button>
        </div>
      )}

      {/* PROCESSING */}
      {isProcessing && (
        <div style={{ background:"#fff", borderRadius:12, padding:32, textAlign:"center", boxShadow:"0 1px 4px #0001" }}>
          <div style={{ fontSize:40, marginBottom:10 }}>{statusIcon}</div>
          <div style={{ fontWeight:700, color:"#059669", fontSize:15 }}>{statusText}</div>
          <div style={{ fontSize:12, color:"#94a3b8", marginTop:4 }}>{fileName}</div>
          <div style={{ marginTop:16, background:"#0f172a", borderRadius:10, padding:12, maxHeight:240, overflowY:"auto", textAlign:"left" }}>
            {logs.map((l, i) => (
              <div key={i} style={{ fontFamily:"monospace", fontSize:11, marginBottom:3,
                color: l.includes("ERROR") ? "#f87171" : l.includes("✅") ? "#86efac" : l.includes("⚡") ? "#34d399" : l.includes("💊") ? "#fb923c" : l.includes("🌐") ? "#60a5fa" : l.includes("🧪") ? "#a78bfa" : l.includes("🤖") ? "#34d399" : "#94a3b8" }}>
                {l}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* RESULTS */}
      {(status === "done" || mode === "done") && (
        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>

          {/* Stats */}
          {stats && (
            <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
              {[
                { l:"Total Rows",     v:stats.total,           c:"#059669" },
                { l:"⚡ Dictionary",  v:stats.instants,        c:"#16a34a" },
                { l:"💊 RxNorm",      v:stats.rxnormHits,      c:"#ea580c" },
                { l:"🌐 Wikidata",    v:stats.wikidataHits,    c:"#2563eb" },
                { l:"🧪 PubChem",     v:stats.pubchemHits,     c:"#7c3aed" },
                { l:"💉 OpenFDA",     v:stats.openfdaHits,     c:"#e11d48", hideZero:true },
                { l:"🔬 NCI EVS",     v:stats.ncievsHits,      c:"#15803d", hideZero:true },
                { l:"📚 MeSH",        v:stats.meshHits,        c:"#a16207", hideZero:true },
                { l:"⚗️ KEGG",        v:stats.keggHits,        c:"#9333ea", hideZero:true },
                { l:"🧬 UniProt",     v:stats.uniprotHits,     c:"#0369a1", hideZero:true },
                { l:"🩺 SNOMED CT",   v:stats.snomedHits,      c:"#be185d", hideZero:true },
                { l:"🧫 LOINC",       v:stats.loincHits,       c:"#0f766e", hideZero:true },
                { l:"🏥 ICD-10-PCS",  v:stats.icd10pcsHits,    c:"#c2410c", hideZero:true },
                { l:"🔗 UMLS",        v:stats.umlsHits,        c:"#475569", hideZero:true },
                { l:"🤖 AI",          v:stats.aiFound,         c:"#059669" },
                { l:"❓ Unresolved",  v:stats.noMatch,         c:"#94a3b8" },
                { l:"➕ Suggested",   v:stats.suggestions,     c:"#7c3aed" },
              ].filter(s => !(s as any).hideZero || s.v > 0).map(s => (
                <div key={s.l} style={{ background:"#fff", borderRadius:10, padding:"10px 14px", flex:"1 1 90px", boxShadow:"0 1px 4px #0001", minWidth:80 }}>
                  <div style={{ fontSize:20, fontWeight:700, color:s.c }}>{s.v}</div>
                  <div style={{ fontSize:10, color:"#64748b" }}>{s.l}</div>
                </div>
              ))}
            </div>
          )}

          {/* Pending banner */}
          {pending.length > 0 && (
            <div style={{ background:"#faf5ff", border:"2px solid #c4b5fd", borderRadius:12, padding:14, display:"flex", justifyContent:"space-between", alignItems:"center", gap:10, flexWrap:"wrap" }}>
              <div>
                <div style={{ fontWeight:700, color:"#7c3aed", fontSize:14 }}>➕ {pending.length} New Aliases Found</div>
                <div style={{ fontSize:12, color:"#64748b", marginTop:2 }}>Review, approve, then export to update Eden master list + hospital mapping table.</div>
              </div>
              <button onClick={() => setTab("pending")} style={{ padding:"8px 18px", borderRadius:8, border:"none", background:"#7c3aed", color:"#fff", fontWeight:600, cursor:"pointer", fontSize:13 }}>Review Now →</button>
            </div>
          )}

          {/* Approved export banner */}
          {approvedUpdates.length > 0 && (
            <div style={{ background:"#f0fdf4", border:"2px solid #86efac", borderRadius:12, padding:14, display:"flex", justifyContent:"space-between", alignItems:"center", gap:10, flexWrap:"wrap" }}>
              <div>
                <div style={{ fontWeight:700, color:"#16a34a", fontSize:14 }}>📥 {approvedUpdates.length} Approved — Ready to Export</div>
                <div style={{ fontSize:12, color:"#64748b", marginTop:2 }}>Generates 2-sheet XLSX: "Eden Master Additions" + "Hospital Alias Mapping"</div>
              </div>
              <button onClick={exportMasterUpdates} style={{ padding:"8px 18px", borderRadius:8, border:"none", background:"#16a34a", color:"#fff", fontWeight:600, cursor:"pointer", fontSize:13 }}>📥 Export Eden Updates</button>
            </div>
          )}

          {/* Tabs */}
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            {[
              stats && ["results", `📋 Results (${stats.total})`],
              pending.length > 0 && ["pending", `➕ Pending (${pending.length})`],
              approvedUpdates.length > 0 && ["approved", `✅ Approved (${approvedUpdates.length})`],
              ["dictionary", `📖 Dictionary (${aliases.length})`],
              logs.length > 0 && ["logs", "🖥️ Logs"],
            ].filter(Boolean).map(([t, l]: any) => (
              <button key={t} onClick={() => setTab(t)}
                style={{ padding:"8px 16px", borderRadius:8, border:"none", cursor:"pointer", fontWeight:600, fontSize:12, background:tab===t?"#059669":"#e2e8f0", color:tab===t?"#fff":"#475569" }}>
                {l}
              </button>
            ))}
          </div>

          {/* Results tab */}
          {tab === "results" && results.length > 0 && (
            <div style={{ background:"#fff", borderRadius:12, boxShadow:"0 1px 4px #0001" }}>
              <div style={{ padding:"10px 16px", borderBottom:"1px solid #f1f5f9", display:"flex", justifyContent:"flex-end" }}>
                <button onClick={() => exportExcel(results.map(r => ({
                  Code: r.code, "Original Name": r.name, "Resolved Name": r.resolvedName,
                  "Mapped Code": r.resolvedCode, Domain: r.resolvedDomain,
                  "Confidence %": r.confidence, Stage: r.stage, Source: sourceLabel(r.source || ""), "AI Reason": r.aiReason || "",
                })), "Alias_Results.xlsx")}
                  style={{ padding:"5px 14px", borderRadius:8, border:"none", background:"#16a34a", color:"#fff", cursor:"pointer", fontWeight:600, fontSize:11 }}>⬇️ Export</button>
              </div>
              <div style={{ overflowX:"auto" }}>
                <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
                  <thead>
                    <tr style={{ background:"#064e3b", color:"#fff" }}>
                      {["Code","Original Name","Resolved Name","Domain","Conf","Source","Reason"].map(h => (
                        <th key={h} style={{ padding:"9px 10px", textAlign:"left", whiteSpace:"nowrap" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((row, i) => (
                      <tr key={i} style={{ background:i%2===0?"#fff":"#f8fafc", borderBottom:"1px solid #f1f5f9" }}>
                        <td style={{ padding:"7px 10px", fontFamily:"monospace", color:"#7c3aed", fontSize:11 }}>{row.code || "—"}</td>
                        <td style={{ padding:"7px 10px", color:row.stage==="dictionary"?"#94a3b8":"#334155", fontStyle:row.stage==="dictionary"?"italic":"normal" }}>{row.name}</td>
                        <td style={{ padding:"7px 10px", fontWeight:600, color:"#064e3b" }}>{row.resolvedName || "—"}</td>
                        <td style={{ padding:"7px 10px", fontSize:11, color:"#64748b" }}>{row.resolvedDomain || "—"}</td>
                        <td style={{ padding:"7px 10px" }}>
                          <span style={{ padding:"2px 7px", borderRadius:99, fontSize:10, fontWeight:700,
                            background: row.confidence>=85?"#dcfce7":row.confidence>=60?"#fef9c3":"#f1f5f9",
                            color: row.confidence>=85?"#16a34a":row.confidence>=60?"#b45309":"#94a3b8" }}>
                            {row.confidence}%
                          </span>
                        </td>
                        <td style={{ padding:"7px 10px" }}>
                          <Badge
                            type={row.matchBadge}
                            text={
                              row.matchBadge==="instant" ? "⚡ Dict" :
                              row.matchBadge==="partial" ? "≈ Partial" :
                              row.matchBadge==="free-rxnorm" ? "💊 RxNorm" :
                              row.matchBadge==="free-wikidata" ? "🌐 Wikidata" :
                              row.matchBadge==="free-pubchem" ? "🧪 PubChem" :
                              row.matchBadge==="ai-found" ? "🤖 AI" : "❓ Unknown"
                            }
                          />
                        </td>
                        <td style={{ padding:"7px 10px", fontSize:11, color:"#94a3b8", fontStyle:"italic", maxWidth:220, wordBreak:"break-word" }}>{row.aiReason || "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Pending tab */}
          {tab === "pending" && (
            <div style={{ background:"#fff", borderRadius:12, padding:16, boxShadow:"0 1px 4px #0001" }}>
              <div style={{ fontWeight:700, fontSize:14, marginBottom:4, color:"#7c3aed" }}>➕ Pending Alias Approvals</div>
              <div style={{ fontSize:12, color:"#64748b", marginBottom:14 }}>
                Approve to add to the dictionary permanently. Assigned codes will appear in the Eden Updates export. Click the PRIMS link to verify Kenya-registered drugs.
              </div>
              {pending.length === 0
                ? <div style={{ color:"#16a34a", fontSize:13 }}>✅ No pending approvals.</div>
                : pending.map((p, i) => {
                  const bc = sourceBadgeColor(p.source);
                  return (
                    <div key={i} style={{ border:"1px solid #e9d5ff", borderRadius:10, padding:14, marginBottom:10, background:"#faf5ff" }}>
                      <div style={{ display:"flex", gap:10, alignItems:"flex-start", flexWrap:"wrap" }}>
                        <div style={{ flex:1 }}>
                          <div style={{ display:"flex", gap:8, alignItems:"center", flexWrap:"wrap", marginBottom:8 }}>
                            <span style={{ fontFamily:"monospace", fontSize:12, background:"#f3f4f6", padding:"2px 8px", borderRadius:6 }}>{p.messy}</span>
                            <span style={{ color:"#94a3b8" }}>→</span>
                            <input value={p.canonical} onChange={e => setPending(prev => prev.map((x, j) => j===i ? {...x, canonical:e.target.value} : x))}
                              style={{ padding:"4px 10px", borderRadius:8, border:"1px solid #e2e8f0", fontSize:12, minWidth:200 }} />
                            <select value={p.domain || "Laboratory"} onChange={e => setPending(prev => prev.map((x, j) => j===i ? {...x, domain:e.target.value} : x))}
                              style={{ padding:"4px 10px", borderRadius:8, border:"1px solid #e2e8f0", fontSize:12 }}>
                              {DOMAIN_LIST.map(d => <option key={d}>{d}</option>)}
                            </select>
                            <input value={p.code || ""} onChange={e => setPending(prev => prev.map((x, j) => j===i ? {...x, code:e.target.value} : x))}
                              placeholder="Eden Code" style={{ padding:"4px 10px", borderRadius:8, border:"1px solid #e2e8f0", fontSize:12, width:120 }} />
                          </div>
                          <div style={{ display:"flex", gap:8, alignItems:"center", flexWrap:"wrap" }}>
                            <span style={{ padding:"2px 8px", borderRadius:99, fontSize:10, fontWeight:700, background:bc.bg, color:bc.c }}>
                              {sourceIcon(p.source)} {sourceLabel(p.source)}
                            </span>
                            <span style={{ fontSize:11, color:"#7c3aed" }}>{p.reason}</span>
                            <span style={{ fontSize:11, color:"#94a3b8" }}>Confidence: {p.confidence}%</span>
                            {p.primsUrl && (
                              <a href={p.primsUrl} target="_blank" rel="noopener noreferrer"
                                style={{ fontSize:11, color:"#0284c7", textDecoration:"none", padding:"2px 8px", borderRadius:6, background:"#e0f2fe", border:"1px solid #bae6fd" }}>
                                🔍 Validate on PRIMS Kenya →
                              </a>
                            )}
                          </div>
                        </div>
                        <div style={{ display:"flex", gap:8, flexShrink:0 }}>
                          <button onClick={() => approvePending(i)} style={{ padding:"6px 14px", borderRadius:8, border:"none", background:"#dcfce7", color:"#16a34a", fontWeight:600, cursor:"pointer", fontSize:12 }}>✓ Approve</button>
                          <button onClick={() => rejectPending(i)} style={{ padding:"6px 14px", borderRadius:8, border:"none", background:"#fee2e2", color:"#dc2626", fontWeight:600, cursor:"pointer", fontSize:12 }}>✗ Reject</button>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
              {pending.length > 1 && (
                <div style={{ display:"flex", gap:10, marginTop:8 }}>
                  <button onClick={approveAll} style={{ padding:"8px 18px", borderRadius:8, border:"none", background:"#7c3aed", color:"#fff", fontWeight:600, cursor:"pointer", fontSize:13 }}>✓ Approve All ({pending.length})</button>
                </div>
              )}
            </div>
          )}

          {/* Approved tab */}
          {tab === "approved" && (
            <div style={{ background:"#fff", borderRadius:12, padding:16, boxShadow:"0 1px 4px #0001" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14, flexWrap:"wrap", gap:10 }}>
                <div>
                  <div style={{ fontWeight:700, fontSize:14, color:"#16a34a" }}>✅ Approved Updates ({approvedUpdates.length})</div>
                  <div style={{ fontSize:12, color:"#64748b", marginTop:2 }}>These will be exported to Eden Master Additions + Hospital Alias Mapping sheets.</div>
                </div>
                <button onClick={exportMasterUpdates} style={{ padding:"8px 18px", borderRadius:8, border:"none", background:"#16a34a", color:"#fff", fontWeight:600, cursor:"pointer", fontSize:13 }}>📥 Export Eden Updates</button>
              </div>
              <div style={{ overflowX:"auto" }}>
                <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
                  <thead>
                    <tr style={{ background:"#064e3b", color:"#fff" }}>
                      {["Hospital Term","→ Eden Name","Domain","Code","Source","PRIMS"].map(h => (
                        <th key={h} style={{ padding:"8px 10px", textAlign:"left" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {approvedUpdates.map((a, i) => {
                      const bc = sourceBadgeColor(a.source);
                      return (
                        <tr key={i} style={{ background:i%2===0?"#fff":"#f8fafc", borderBottom:"1px solid #f1f5f9" }}>
                          <td style={{ padding:"7px 10px", fontFamily:"monospace", color:"#7c3aed" }}>{a.messy}</td>
                          <td style={{ padding:"7px 10px", fontWeight:600 }}>{a.canonical}</td>
                          <td style={{ padding:"7px 10px", fontSize:11, color:"#64748b" }}>{a.domain}</td>
                          <td style={{ padding:"7px 10px", fontFamily:"monospace", fontSize:11, color:"#059669" }}>{a.code || "(assign)"}</td>
                          <td style={{ padding:"7px 10px" }}>
                            <span style={{ padding:"2px 8px", borderRadius:99, fontSize:10, fontWeight:700, background:bc.bg, color:bc.c }}>{sourceIcon(a.source)} {sourceLabel(a.source)}</span>
                          </td>
                          <td style={{ padding:"7px 10px" }}>
                            {a.primsUrl
                              ? <a href={a.primsUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize:11, color:"#0284c7" }}>🔍 PRIMS</a>
                              : <span style={{ fontSize:11, color:"#94a3b8" }}>N/A</span>}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Dictionary tab */}
          {tab === "dictionary" && (
            <div style={{ background:"#fff", borderRadius:12, padding:16, boxShadow:"0 1px 4px #0001" }}>
              <div style={{ fontWeight:700, fontSize:14, marginBottom:12, color:"#064e3b" }}>📖 Alias Dictionary ({aliases.length} entries)</div>
              <div style={{ background:"#f0fdf4", borderRadius:10, padding:14, marginBottom:16 }}>
                <div style={{ fontWeight:600, fontSize:13, color:"#059669", marginBottom:10 }}>➕ Add Manual Alias</div>
                <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                  <input value={newAlias.messy} onChange={e => setNewAlias(p => ({...p, messy:e.target.value}))} placeholder="Hospital term (e.g. COARTEM)"
                    style={{ padding:"7px 12px", borderRadius:8, border:"1px solid #e2e8f0", fontSize:13, flex:1, minWidth:120 }} />
                  <input value={newAlias.canonical} onChange={e => setNewAlias(p => ({...p, canonical:e.target.value}))} placeholder="Eden canonical name"
                    style={{ padding:"7px 12px", borderRadius:8, border:"1px solid #e2e8f0", fontSize:13, flex:2, minWidth:200 }} />
                  <select value={newAlias.domain} onChange={e => setNewAlias(p => ({...p, domain:e.target.value}))}
                    style={{ padding:"7px 12px", borderRadius:8, border:"1px solid #e2e8f0", fontSize:13 }}>
                    {DOMAIN_LIST.map(d => <option key={d}>{d}</option>)}
                  </select>
                  <input value={newAlias.code} onChange={e => setNewAlias(p => ({...p, code:e.target.value}))} placeholder="Eden Code"
                    style={{ padding:"7px 12px", borderRadius:8, border:"1px solid #e2e8f0", fontSize:13, width:130 }} />
                  <button onClick={addManualAlias} style={{ padding:"7px 18px", borderRadius:8, border:"none", background:"#059669", color:"#fff", fontWeight:600, cursor:"pointer", fontSize:13 }}>Add</button>
                </div>
              </div>
              <input value={dictionarySearch} onChange={e => setDSearch(e.target.value)} placeholder="Search dictionary..."
                style={{ width:"100%", padding:"8px 14px", borderRadius:8, border:"1px solid #e2e8f0", fontSize:13, marginBottom:12, boxSizing:"border-box" }} />
              <div style={{ overflowX:"auto" }}>
                <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
                  <thead>
                    <tr style={{ background:"#064e3b", color:"#fff" }}>
                      {["Hospital Term","Eden Name","Domain","Code","Conf",""].map(h => <th key={h} style={{ padding:"8px 10px", textAlign:"left" }}>{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDict.map((a, i) => (
                      <tr key={i} style={{ background:i%2===0?"#fff":"#f8fafc", borderBottom:"1px solid #f1f5f9" }}>
                        <td style={{ padding:"7px 10px", fontFamily:"monospace", color:"#7c3aed", fontWeight:600 }}>{a.messy}</td>
                        <td style={{ padding:"7px 10px", fontWeight:500 }}>{a.canonical}</td>
                        <td style={{ padding:"7px 10px", fontSize:11, color:"#64748b" }}>{a.domain}</td>
                        <td style={{ padding:"7px 10px", fontFamily:"monospace", fontSize:11, color:"#059669" }}>{a.code || "—"}</td>
                        <td style={{ padding:"7px 10px" }}>
                          <span style={{ padding:"2px 7px", borderRadius:99, fontSize:10, fontWeight:700, background:"#dcfce7", color:"#16a34a" }}>{a.confidence}%</span>
                        </td>
                        <td style={{ padding:"7px 10px" }}>
                          <button onClick={() => removeAlias(i)} style={{ padding:"2px 10px", borderRadius:6, border:"none", background:"#fee2e2", color:"#dc2626", cursor:"pointer", fontSize:11 }}>Remove</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ marginTop:12 }}>
                <button onClick={() => exportExcel(aliases, "Alias_Dictionary.xlsx")}
                  style={{ padding:"8px 16px", borderRadius:8, border:"none", background:"#059669", color:"#fff", fontWeight:600, cursor:"pointer", fontSize:12 }}>⬇️ Export Dictionary</button>
              </div>
            </div>
          )}

          {/* Logs tab */}
          {tab === "logs" && (
            <div style={{ background:"#0f172a", borderRadius:12, padding:14, maxHeight:400, overflowY:"auto" }}>
              {logs.map((l, i) => (
                <div key={i} style={{ fontFamily:"monospace", fontSize:11, marginBottom:3,
                  color: l.includes("ERROR") ? "#f87171" : l.includes("✅") ? "#86efac" : l.includes("⚡") ? "#34d399" : l.includes("💊") ? "#fb923c" : l.includes("🌐") ? "#60a5fa" : l.includes("🧪") ? "#a78bfa" : l.includes("🤖") ? "#4ade80" : "#94a3b8" }}>
                  {l}
                </div>
              ))}
            </div>
          )}

          {/* Footer actions */}
          <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
            <button onClick={reset} style={{ padding:"10px 20px", borderRadius:8, border:"none", background:"#e2e8f0", color:"#475569", fontWeight:600, cursor:"pointer", fontSize:13 }}>🔄 New Run</button>
            {status === "done" && (
              <div style={{ padding:"10px 20px", borderRadius:8, background:"#dcfce7", color:"#16a34a", fontWeight:600, fontSize:13 }}>✅ Ready for M4 — Confidence Threshold</div>
            )}
            {onComplete && results.length > 0 && (
              <button onClick={() => onComplete({ resolved: results, aliases })}
                style={{ padding:"10px 20px", borderRadius:8, border:"none", background:"#0284c7", color:"#fff", fontWeight:700, cursor:"pointer", fontSize:13 }}>
                Pass to M4 — Confidence Threshold →
              </button>
            )}
            {approvedUpdates.length > 0 && (
              <button onClick={exportMasterUpdates}
                style={{ padding:"10px 20px", borderRadius:8, border:"none", background:"#16a34a", color:"#fff", fontWeight:700, cursor:"pointer", fontSize:13 }}>
                📥 Export Eden Updates ({approvedUpdates.length})
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
