// M4 ConfidenceThreshold — Enhanced: KG cross-validation, hospital columns, master update, pipeline props
import React, { useState, useRef, useCallback, useEffect } from "react";
import * as XLSX from "xlsx";
import { callGemini }     from "../lib/gemini";
import { callGroq }       from "../lib/groq";
import { callOpenRouter }  from "../lib/openrouter";
import { callCerebras }   from "../lib/cerebras";
import { callTogetherAI }  from "../lib/together";
import { callMistral }    from "../lib/mistral";
import { callCohere }     from "../lib/cohere";
import { callDeepSeek }   from "../lib/deepseek";
import { getStoredKey, storeKey } from "../lib/apiKeys";
import { getAllStoredMasters } from "../lib/masterCatalogs";

// ── KG Cross-Validation ────────────────────────────────────────────────────────
const KG_BASE = "https://medical-kg.edeneasyclaim.com";

async function kgValidate(akaName: string, edenCode: string): Promise<{ match: boolean; kgCode: string; kgScore: number } | null> {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 3000);
    const res = await fetch(`${KG_BASE}/api/search?q=${encodeURIComponent(akaName)}&threshold=0.4`, { signal: ctrl.signal });
    clearTimeout(timer);
    if (!res.ok) return null;
    const data = await res.json();
    const top = (data.results || [])[0];
    if (!top) return null;
    return { match: top.code === edenCode, kgCode: top.code, kgScore: top.score || top.similarity || 0 };
  } catch { return null; }
}

// ── Master Update — auto-insert approved new codes ─────────────────────────────
function buildMasterUpdateRows(results: any[], masterRows: any[]) {
  const approved = results.filter(r => r.isProposed && r._status === "approved");
  if (!approved.length) return { updatedRows: masterRows, mappingRows: [] as any[] };

  const mappingRows = results
    .filter(r => r._status === "approved")
    .map(r => ({
      "Eden Code": (r.edenCode || "").replace("Proposed: ", ""),
      "Eden Name": r.edenName || "",
      "Eden Category": r.edenCategory || "",
      "Hospital Code": r.akaCode || "",
      "Hospital Name": r.akaName || "",
      "Hospital Category": r.akaCategory || "",
      "Confidence %": r.confidence || "",
      "Is New Code": r.isProposed ? "Yes" : "No",
    }));

  const grouped: Record<string, any[]> = {};
  approved.forEach(r => {
    const cat = r.edenCategory || "Unknown";
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push({ Code: (r.edenCode || "").replace("Proposed: ", ""), Name: r.edenName || r.akaName || "", Category: r.edenCategory || "", Description: r.description || "" });
  });

  const updatedRows = [...masterRows];
  Object.entries(grouped).forEach(([, newRows]) => { updatedRows.push(...newRows); });
  updatedRows.sort((a, b) => {
    const catA = (a.Category || a.category || "").toLowerCase();
    const catB = (b.Category || b.category || "").toLowerCase();
    if (catA !== catB) return catA.localeCompare(catB);
    return (a.Name || a.name || "").toLowerCase().localeCompare((b.Name || b.name || "").toLowerCase());
  });
  return { updatedRows, mappingRows };
}

// ── Tier Badge (enhanced with KG indicator) ────────────────────────────────────
function TierBadge({ tier, confidence, kgValidated }: { tier: string; confidence: number; kgValidated?: boolean | null }) {
  const t = (tier || "").toLowerCase();
  const cfg = t === "auto" ? { bg: "#dcfce7", c: "#16a34a", l: "✅ AUTO" } : t === "staging" ? { bg: "#fef9c3", c: "#b45309", l: "⚠️ STAGING" } : { bg: "#eff6ff", c: "#2563eb", l: "✨ NEW" };
  const dispConf = confidence;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2 }}>
      <span style={{ padding: "2px 8px", borderRadius: 99, fontSize: 10, fontWeight: 700, background: cfg.bg, color: cfg.c }}>{cfg.l}</span>
      <span style={{ fontSize: 10, color: kgValidated === true ? "#16a34a" : kgValidated === false ? "#dc2626" : "#94a3b8" }}>
        {dispConf}% {kgValidated === true ? "🟢 KG ✓" : kgValidated === false ? "⚠️ KG ✗" : ""}
      </span>
    </div>
  );
}

// ── Constants ─────────────────────────────────────────────────────────────────
const THRESHOLD = { AUTO: 85, STAGING: 60 };

// ── Coding DNA ────────────────────────────────────────────────────────────────
const CODING_DNA: any = {
  "Medical Devices": {
    format: "prefixed_category", prefix: "MD",
    description: "MD + 2-digit category + 2-digit sequential (e.g. MD0115)",
    codingRules: "MD + 2-digit category (MD01–MD32) + 2-digit sequential. Pick the category that best matches the device type, then assign next sequential within that category. Categories: MD01=Mobility Aids, MD02=Hearing Aids, MD03=Visual Aids, MD04=Respiratory Devices, MD05=Monitoring Devices, MD06=Diagnostic Equipment, MD07=Therapeutic Devices, MD08=Surgical Instruments, MD09=Imaging Equipment, MD10=Laboratory Equipment, MD11=Rehabilitation Devices, MD12=Orthopedic Devices, MD13=Prosthetics, MD14=Cardiovascular Devices, MD15=Interventional Devices.",
    categories: { "MD01":"Mobility Aids","MD02":"Hearing Aids","MD03":"Visual Aids","MD04":"Respiratory Devices","MD05":"Monitoring Devices","MD06":"Diagnostic Equipment","MD07":"Therapeutic Devices","MD08":"Surgical Instruments","MD09":"Imaging Equipment","MD10":"Laboratory Equipment","MD11":"Rehabilitation Devices","MD12":"Orthopedic Devices","MD13":"Prosthetics","MD14":"Cardiovascular Devices","MD15":"Interventional Devices" },
    codeRegex: /^MD(\d{2})(\d{2})$/,
    extractCategory: (code: string) => code?.match(/^MD(\d{2})/)?.[0] || null,
    nextCode: (lastCode: string, categoryPrefix: string) => { const m = lastCode?.match(/^MD\d{2}(\d{2})$/); const next = m ? String(parseInt(m[1]) + 1).padStart(2,"0") : "01"; return categoryPrefix + next; }
  },
  "Labs": {
    format: "numeric_series",
    description: "4-digit numeric, series = subsection (1000=Hematology, 2000=Chemistry, etc.)",
    codingRules: "4-digit numeric code. Assign to the series matching the test's clinical domain: 1000s=Hematology & Coagulation (CBC, clotting), 2000s=Chemistry (metabolites, electrolytes, enzymes), 3000s=Immunology/Serology (antibodies, antigens, HIV, hepatitis), 4000s=Microbiology (cultures, sensitivities), 5000s=Molecular Pathology (PCR, DNA/RNA, viral load), 6000s=Histology/Cytopathology (biopsy, FNAC, Pap smear), 7000s=Urinalysis & POCT (urine dipstick, rapid tests, glucometer), 8000s=Endocrinology (hormones: TSH, T3, T4, cortisol, HbA1c), 9000s=Toxicology (drug levels, drug screen, poison). Next available code in the correct series.",
    seriesMap: { 1000:"Hematology and Coagulation",2000:"Chemistry",3000:"Immunology / Serology",4000:"Microbiology",5000:"Molecular Pathology",6000:"Histology / Cytopathology",7000:"Urinalysis and Point of Care",8000:"Endocrinology",9000:"Toxicology" },
    codeRegex: /^(\d{4})$/,
    extractSeries: (code: string) => { const n = parseInt(code); return Math.floor(n / 1000) * 1000; },
    nextCode: (lastCode: string) => String(parseInt(lastCode) + 1)
  },
  "Imaging": {
    format: "positional_5digit",
    description: "5-digit: digit1=modality, digits2-3=body region, digits4-5=unique sequential",
    codingRules: "5-digit positional code. Digit1=modality (1=CT, 2=MRI, 3=XRAY, 4=ULTRASOUND, 5=NUCLEAR IMAGING, 6=Endoscopy, 7=Electric Activity Based e.g.ECG/EEG, 9=Other). Digits2-3=body region (01=Head/Neck, 02=Vascular, 03=Extremities, 04=Spine, 05=Abdomen, 06=Chest, 07=Urogenital, 08=Pelvis, 09=Breast, 10=Thyroid, 11=Adrenal, 12=Pituitary, 13=Prostate, 16=Obstetrics, 17=Gynaecology, 18=Testes, 19=Regional, 20=Procedure, 21=Miscellaneous). Digits4-5=sequential within that modality+region bucket.",
    modalityMap: { "1":"CT","2":"MRI","3":"XRAY","4":"ULTRASOUND","5":"NUCLEAR IMAGING","6":"Endoscopy","7":"Electric Activity Based","9":"Other" },
    regionMap: { "01":"Head/Neck","02":"Vascular","03":"Extremities","04":"Spine","05":"Abdomen","06":"Chest","07":"Urogenital","08":"Pelvis","09":"Breast","10":"Thyroid","11":"Adrenal","12":"Pituitary","13":"Prostate","14":"Penis","16":"Obstetrics","17":"Gynaecology","18":"Testes","19":"Regional","20":"Procedure","21":"Miscellaneous" },
    multiRegionSeriesStart: 12200,
    codeRegex: /^(\d)(\d{2})(\d{2})$|^(\d{5})$/,
    extractBucket: (code: string) => { const s = String(code); if (s.length === 5) return s.slice(0,3); return null; },
    nextCode: (existingCodesInBucket: string[], bucket: string) => { const nums = existingCodesInBucket.map(c => parseInt(String(c).slice(3))).filter(n => !isNaN(n)); const maxSeq = nums.length ? Math.max(...nums) : 0; return bucket + String(maxSeq + 1).padStart(2,"0"); }
  },
  "Molecules": {
    format: "atc_hierarchical",
    description: "WHO ATC: Level1(A) > Level2(A01) > Level3(A01A) > Level4(A01AA) > Level5(A01AA01)",
    codingRules: "WHO ATC hierarchical code (e.g. A01AA01). Level1 letter = therapeutic main group: A=Alimentary/Metabolism, B=Blood/Coagulation, C=Cardiovascular, D=Dermatology, G=Genito-urinary/Sex Hormones, H=Systemic Hormones, J=Anti-infectives, L=Antineoplastic, M=Musculoskeletal, N=Nervous System, P=Antiparasitic, R=Respiratory, S=Sensory Organs, V=Various. Assign the full ATC code matching the molecule's pharmacological class.",
    levels: { 1:{length:1,pattern:/^[A-Z]$/},2:{length:3,pattern:/^[A-Z]\d{2}$/},3:{length:4,pattern:/^[A-Z]\d{2}[A-Z]$/},4:{length:5,pattern:/^[A-Z]\d{2}[A-Z]{2}$/},5:{length:7,pattern:/^[A-Z]\d{2}[A-Z]{2}\d{2}$/} },
    nextCode: (lastCode: string, parentGroup: string) => { const m = lastCode?.match(/^([A-Z]\d{2}[A-Z]{2})(\d{2})$/); if (!m) return parentGroup + "01"; const nextNum = String(parseInt(m[2]) + 1).padStart(2,"0"); const n = parseInt(nextNum); const safe = n >= 30 ? String(n + 20).padStart(2,"0") : nextNum; return m[1] + safe; }
  },
  "Procedures": {
    format: "prefix_sequential",
    description: "3-letter specialization prefix + 3-digit sequential (PCA001, PCV001...)",
    codingRules: "3-letter prefix (clinical department) + 3-digit sequential. Match item's clinical specialty to prefix: PCA=Cardiology, PCV=Cardiothoracic & Vascular, PET=ENT, PGS=General Surgery, PIR=Interventional Radiology, PMX=Maxillofacial, PNS=Neurosurgery/Neurophysiology, POB=Obstetrics, POP=Ophthalmology, POT=Orthopaedics, PPD=Paediatrics, PPL=Plastic Surgery, PUR=Urology, PHO=Haematology/Oncology, PDE=Dermatology, PGE=Gastroenterology & Endoscopy, PAN=Anaesthesia, PGP=Gynaecology, PDS=Dental Surgery. Assign next available sequential in that prefix group.",
    knownPrefixes: { "PCA":"Cardiology","PCV":"Cardiothoracic and Vascular","PET":"Ear, Nose & Throat","PGS":"General Surgery","PIR":"Interventional Radiology","PMX":"Maxillofacial","PNS":"Neurosurgery / Neurophysiology","POB":"Obstetrics","POP":"Ophthalmology","POT":"Orthopaedics","PPD":"Paediatrics","PPL":"Plastic Surgery","PUR":"Urology","PHO":"Haematology and Oncology","PDE":"Dermatology","PGE":"Gastroenterology and Endoscopy","PAN":"Anaesthesia","PGP":"Gynaecology","PDS":"Dental Surgery","POR":"Orthopaedics (legacy)","PGY":"Gynaecology (legacy)","PDN":"Dental (legacy)","PRH":"Rehabilitation","PPM":"Pulmonology / Respiratory" },
    codeRegex: /^([A-Z]{3})(\d{3})$/,
    extractPrefix: (code: string) => code?.match(/^([A-Z]{3})/)?.[1] || null,
    nextCode: (lastCode: string, prefix: string) => { const m = lastCode?.match(/^[A-Z]{3}(\d{3})$/); const next = m ? String(parseInt(m[1]) + 1).padStart(3,"0") : "001"; return prefix + next; }
  },
  "Supplies & Consumables": {
    format: "flat_sequential", prefix: "C",
    description: "C + sequential numeric, flat list (C0001, C0002...)",
    codingRules: "C + 4-digit sequential (C0001, C0002 ...). Flat continuum — next available C-code as per the masterlist. Do not assign category-based prefixes; all supplies share one sequential list.",
    codeRegex: /^C(\d{3})$/,
    nextCode: (lastCode: string) => { const m = lastCode?.match(/^C(\d{3})$/); return "C" + (m ? String(parseInt(m[1]) + 1).padStart(3,"0") : "001"); }
  },
  "Services": {
    format: "category_letter",
    description: "SC + 2-digit category + letter suffix (SC01A, SC04B...)",
    codingRules: "SC + 2-digit category + letter suffix (SC01A). Categories: SC01=Consultations, SC02=Outpatient Services, SC03=Surgical Services, SC04=Diagnostics, SC05=Maternity, SC06=Oncology, SC07=Renal, SC08=Ophthalmology, SC09=Dental, SC10=Pharmacy, SC11=Ward/Facility. Next letter within the category (A→B→C...).",
    categoryMap: { "SC01":"Consultations","SC02":"Outpatient Services","SC03":"Surgical Services","SC04":"Diagnostics","SC05":"Maternity","SC06":"Oncology","SC07":"Renal","SC08":"Ophthalmology","SC09":"Dental","SC10":"Pharmacy","SC11":"Ward / Facility" },
    codeRegex: /^(SC\d{2})([A-Z])$/,
    extractCategory: (code: string) => code?.match(/^(SC\d{2})/)?.[1] || null,
    nextCode: (lastCode: string, categoryPrefix: string) => { const m = lastCode?.match(/^SC\d{2}([A-Z])$/); return categoryPrefix + (m ? String.fromCharCode(m[1].charCodeAt(0) + 1) : "A"); }
  },
  "Billing": {
    format: "flat_sequential", prefix: "BIL",
    description: "BIL + 3-digit sequential (BIL001, BIL002...)",
    codingRules: "BIL + 3-digit sequential (BIL001, BIL002...). Flat continuum for billing and fee items. Next available BIL-code from masterlist.",
    codeRegex: /^BIL(\d{3})$/,
    nextCode: (lastCode: string) => { const m = lastCode?.match(/^BIL(\d{3})$/); return "BIL" + (m ? String(parseInt(m[1]) + 1).padStart(3,"0") : "001"); }
  }
};

function buildCodingDNA(cat: string, rows: any[], _rawText: string) {
  const known = CODING_DNA[cat];
  if (!known) return null;
  const dna: any = { ...known, subsections: {}, lastCodePerSubsection: {}, allCodes: [] };
  rows.forEach(row => {
    const keys = Object.keys(row);
    const codeKey = keys.find(k => /^(code|id|molecule_code1|procedure_code|device_id|c\d)/i.test(k)) || keys.find(k => /code|id/i.test(k));
    const rawCode = codeKey ? String(row[codeKey] || "").trim() : "";
    if (rawCode) dna.allCodes.push(rawCode);
  });
  if (known.format === "numeric_series") {
    dna.allCodes.forEach((code: string) => {
      const n = parseInt(code);
      if (!isNaN(n) && n > 999) {
        const series = Math.floor(n / 1000) * 1000;
        if (!dna.subsections[series]) dna.subsections[series] = { name: known.seriesMap[series] || "Series " + series, codes: [], lastCode: String(series) };
        dna.subsections[series].codes.push(code);
        if (n > parseInt(dna.subsections[series].lastCode)) dna.subsections[series].lastCode = String(n);
      }
    });
  }
  if (known.format === "prefixed_category") {
    dna.allCodes.forEach((code: string) => {
      const m = code.match(/^(MD\d{2})\d{2}$/);
      if (m) {
        const c = m[1];
        if (!dna.subsections[c]) dna.subsections[c] = { name: known.categories[c] || c, codes: [], lastCode: c + "00" };
        dna.subsections[c].codes.push(code);
        if (parseInt(code.slice(-2)) > parseInt(dna.subsections[c].lastCode.slice(-2))) dna.subsections[c].lastCode = code;
      }
    });
  }
  if (known.format === "positional_5digit") {
    dna.allCodes.forEach((code: string) => {
      const s = String(code).padStart(5,"0");
      if (s.length === 5) {
        const bucket = s.slice(0,3);
        if (!dna.subsections[bucket]) dna.subsections[bucket] = { name: (known.modalityMap[s[0]]||"Unknown") + " — " + (known.regionMap[s.slice(1,3)]||s.slice(1,3)), codes: [], lastCode: bucket + "00" };
        dna.subsections[bucket].codes.push(s);
        if (parseInt(s.slice(3)) > parseInt(dna.subsections[bucket].lastCode.slice(3))) dna.subsections[bucket].lastCode = s;
      }
    });
  }
  if (known.format === "prefix_sequential") {
    dna.allCodes.forEach((code: string) => {
      const m = code.match(/^([A-Z]{3})(\d{3})$/);
      if (m) {
        const prefix = m[1];
        if (!dna.subsections[prefix]) dna.subsections[prefix] = { name: known.knownPrefixes[prefix] || prefix, codes: [], lastCode: prefix + "000" };
        dna.subsections[prefix].codes.push(code);
        if (parseInt(m[2]) > parseInt(dna.subsections[prefix].lastCode.slice(-3))) dna.subsections[prefix].lastCode = code;
      }
    });
  }
  if (known.format === "category_letter") {
    dna.allCodes.forEach((code: string) => {
      const m = code.match(/^(SC\d{2})([A-Z])$/);
      if (m) {
        const c = m[1];
        if (!dna.subsections[c]) dna.subsections[c] = { name: known.categoryMap[c] || c, codes: [], lastCode: c + "@" };
        dna.subsections[c].codes.push(code);
        if (m[2] > dna.subsections[c].lastCode.slice(-1)) dna.subsections[c].lastCode = code;
      }
    });
  }
  if (known.format === "flat_sequential" || known.format === "atc_hierarchical") {
    const sorted = [...dna.allCodes].sort();
    dna.globalLastCode = sorted[sorted.length - 1] || null;
  }
  return dna;
}

// ── Free API Lookups (Phase 0.5) ─────────────────────────────────────────────
// UMLS → Wikidata → PubChem are queried before any AI provider.
// These free databases resolve most medical synonyms, abbreviations, and drug names.
// Items matched here never consume AI tokens.

async function withTimeoutM4<T>(fn: (signal: AbortSignal) => Promise<T>, ms = 4000): Promise<T | null> {
  const ctrl  = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  try   { return await fn(ctrl.signal); }
  catch { return null; }
  finally { clearTimeout(timer); }
}

// UMLS Metathesaurus — 200+ vocabularies, most comprehensive medical database (free API key required)
async function lookupUMLSM4(name: string, apiKey: string): Promise<string | null> {
  if (!apiKey.trim()) return null;
  return withTimeoutM4(async signal => {
    const r = await fetch(
      `https://uts-ws.nlm.nih.gov/rest/search/current?string=${encodeURIComponent(name)}&apiKey=${encodeURIComponent(apiKey)}&returnIdType=concept&pageSize=3&searchType=words`,
      { signal }
    );
    if (!r.ok) return null;
    const d   = await r.json();
    const top = (d.result?.results || [])[0];
    return top?.name || null;
  }, 5000);
}

// Wikidata/Wikipedia — broad open medical knowledge graph (no key required)
async function lookupWikidataM4(name: string): Promise<string | null> {
  return withTimeoutM4(async signal => {
    const r = await fetch(
      `https://www.wikidata.org/w/api.php?action=wbsearchentities&search=${encodeURIComponent(name)}&language=en&type=item&format=json&origin=*`,
      { signal }
    );
    if (!r.ok) return null;
    const d = await r.json();
    const medKW = ["medical","clinical","test","procedure","drug","disease","examination","imaging","scan","blood","laboratory","medication","diagnosis","treatment","health","surgical","therapy","pharmaceutical","protein","enzyme","hormone","infection"];
    const hits: any[] = d.search || [];
    const hit = hits.find(x => medKW.some(kw => (x.description || "").toLowerCase().includes(kw))) || hits[0];
    if (!hit) return null;
    const label = hit.label || "";
    if (!label || label.toLowerCase() === name.toLowerCase()) return null;
    // Reject junk: overly long labels or protein-domain entries
    const tooLong   = label.length > name.length * 3;
    const domainJunk = /\b(domain|superfamily|protein family|homolog|subunit|isoform)\b/i.test(label)
                    && !/\b(domain|superfamily|family|homolog)\b/i.test(name);
    if (tooLong || domainJunk) return null;
    return label;
  });
}

// PubChem — drugs, compounds, molecules (no key required)
async function lookupPubChemM4(name: string): Promise<string | null> {
  return withTimeoutM4(async signal => {
    const r = await fetch(
      `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(name)}/synonyms/JSON`,
      { signal }
    );
    if (!r.ok) return null;
    const d = await r.json();
    const syns: string[] = d.InformationList?.Information?.[0]?.Synonym || [];
    // Prefer a short INN-style name: no digits, no brackets, < 30 chars
    const preferred = syns.find(s => s.length < 30 && /^[a-zA-Z\s-]+$/.test(s) && !s.includes("(") && !/\d/.test(s));
    return preferred || syns[0] || null;
  });
}

// ── Deterministic Pre-Matching (Phase 0) ─────────────────────────────────────
// Compares M3 canonical names against the Eden Care catalog using word-overlap scoring.
// Items with strong canonical matches are resolved WITHOUT any AI API call.
// Only genuinely ambiguous items (no canonical or low overlap) get sent to AI.

function termSimilarity(a: string, b: string): number {
  // Common words that shouldn't drive a match — they appear in many catalog entries
  const STOP = new Set(["the","and","for","with","per","via","from","level","serum","blood","urine",
    "screen","rapid","total","free","high","low","basic","complete","general","other","any",
    "test","assay","measurement","determination","analysis"]);
  const tokenize = (s: string) => s.toLowerCase().split(/\W+/).filter(w => w.length > 2 && !STOP.has(w));
  const aWords = tokenize(a);
  const bWords = tokenize(b);
  if (!aWords.length || !bWords.length) return 0;
  const bSet = new Set(bWords);
  const intersection = aWords.filter(w => bSet.has(w)).length;
  const union = new Set([...aWords, ...bWords]).size;
  return union > 0 ? Math.round((intersection / union) * 100) : 0;
}

function deterministicPreMatch(
  normItems: any[],
  catalogMasters: Record<string, any[]>,
  logFn: (msg: string, type?: string) => void
): Map<number, any> {
  const results = new Map<number, any>();

  // Map akaCategory text to allowed master category names (null = no restriction)
  const CAT_KEYWORDS: [string, string[]][] = [
    ["lab",        ["Labs"]],
    ["haem",       ["Labs"]],
    ["hema",       ["Labs"]],
    ["chem",       ["Labs"]],
    ["path",       ["Labs"]],
    ["micro",      ["Labs"]],
    ["biochem",    ["Labs"]],
    ["serol",      ["Labs"]],
    ["immunol",    ["Labs"]],
    ["radiol",     ["Imaging"]],
    ["imaging",    ["Imaging"]],
    ["xray",       ["Imaging"]],
    ["x-ray",      ["Imaging"]],
    ["mri",        ["Imaging"]],
    ["" + "ct",    ["Imaging"]],   // "ct" only when it's the whole category word
    ["ultrasound", ["Imaging"]],
    ["nuclear",    ["Imaging"]],
    ["pharma",     ["Molecules", "Supplies & Consumables"]],
    ["drug",       ["Molecules"]],
    ["molecule",   ["Molecules"]],
    ["procedure",  ["Procedures"]],
    ["surgery",    ["Procedures"]],
    ["theatre",    ["Procedures"]],
    ["consult",    ["Services"]],
    ["service",    ["Services"]],
    ["bill",       ["Billing"]],
    ["device",     ["Medical Devices"]],
    ["equipment",  ["Medical Devices"]],
  ];

  function getAllowedCats(akaCategory: string): string[] | null {
    const catLow = (akaCategory || "").toLowerCase();
    for (const [kw, cats] of CAT_KEYWORDS) {
      if (catLow.includes(kw)) return cats;
    }
    return null;
  }

  normItems.forEach((item, idx) => {
    const canonical = (item.canonicalName || "").trim();
    // Skip if no useful canonical (empty or identical to raw name — M3 found nothing)
    if (!canonical || canonical.toLowerCase() === (item.akaName || "").toLowerCase()) return;

    const allowedCats = getAllowedCats(item.akaCategory);
    let bestCode = "", bestName = "", bestCat = "", bestScore = 0;

    Object.entries(catalogMasters).forEach(([cat, catRows]) => {
      if (allowedCats && !allowedCats.includes(cat)) return; // category gate
      (catRows as any[]).forEach((row: any) => {
        const code = String(
          row.Code || row.code || row.eden_code || row.EdenCode ||
          row.Procedure_code || row.procedure_code || row.Device_ID || ""
        ).trim();
        const name = (
          row.Name || row.name || row.Description || row.description ||
          row.Medical_Devices || row.ProcedureName || ""
        ).trim();
        if (!code || !name) return;
        const score = termSimilarity(canonical, name);
        if (score > bestScore) { bestScore = score; bestCode = code; bestName = name; bestCat = cat; }
      });
    });

    if (bestScore < 60) return; // no meaningful match — send to AI

    const tier = bestScore >= 90 ? "auto" : "staging";
    results.set(idx, {
      ...item,
      edenCode:     bestCode,
      edenName:     bestName,
      edenCategory: bestCat,
      confidence:   bestScore,
      tier,
      isProposed:   false,
      reason:       `Canonical match (M3→M5): "${canonical}" ↔ "${bestName}" [${bestScore}% overlap]`,
      _preMatched:  true,
      _status:      tier === "auto" ? "approved" : "pending",
      _editedBy:    false,
    });
    logFn(
      tier === "auto"
        ? `✅ [PRE-MATCH] "${item.akaName}" → ${bestCode} "${bestName}" [${bestScore}%]`
        : `⚠️ [PRE-MATCH] "${item.akaName}" → staging ${bestCode} "${bestName}" [${bestScore}%]`,
      "batch"
    );
  });

  return results;
}

async function callClaude(messages: any[], max_tokens = 2000, apiKey = "", groqApiKey = "") {
  // Delegates to Gemini (primary) or Groq (fallback) — extracts user content from messages array
  const prompt = messages.map((m: any) => m.content || "").join("\n");
  if (apiKey.trim()) return callGemini(apiKey, prompt, max_tokens);
  if (groqApiKey.trim()) return callGroq(groqApiKey, prompt, Math.min(max_tokens, 500));
  return ""; // no key — caller handles empty
}

async function extractCodingDNAFromAI(rawText: string, cat: string, logFn: any, apiKey = "") {
  logFn("🔍 Unknown format for " + cat + " — running AI DNA extraction...", "warn");
  const text = await callClaude([{ role: "user", content: `Analyze this catalog file for category: ${cat}\n\nFile (first 8000 chars):\n${rawText.slice(0,8000)}\n\nExtract the complete coding structure. Respond ONLY with JSON (no markdown):\n{"format":"...","subsections":[{"name":"...","seriesKey":"...","lastCode":"...","nextCode":"...","classificationHints":[]}],"globalLastCode":"...","nextGlobalCode":"...","codingRules":"..."}` }], 2000, apiKey);
  const m = text.match(/\{[\s\S]*\}/);
  if (!m) throw new Error("No JSON from AI DNA extraction");
  return JSON.parse(m[0]);
}

async function classifyNewCode(item: any, cat: string, dna: any, logFn: any, apiKey = "", groqApiKey = "") {
  logFn("🔎 Classifying new code for: " + item.akaName + " [" + cat + "]", "dna");
  const subsectionSummary = Object.entries(dna.subsections || {}).map(([key, s]: any) => `"${key}" → ${s.name}`).join("\n");
  const classifyPrompt = `You are a medical coding engine. Your ONLY job is to pick the correct subsection key for this item.\n\nITEM: "${item.akaName}"\nHINT: ${item.targetSubsection || "none"}\nMASTER LIST: ${cat}\nFORMAT: ${dna.description}\n\nAVAILABLE SUBSECTION KEYS:\n${subsectionSummary}\n\n${dna.format === "positional_5digit" ? `IMAGING SUBSECTION KEY = first 3 digits of the 5-digit code (modality + region):\n- Echocardiogram / echo / TEE / stress echo / dobutamine echo → key "406" (ULTRASOUND Chest) — ALWAYS\n- CT scan → modality "1", MRI → "2", X-ray → "3", Ultrasound → "4", Nuclear → "5"\n- Body region: 01=Head/Neck 02=Vascular 03=Extremities 04=Spine 05=Abdomen 06=Chest 07=Urogenital 08=Pelvis` : ""}\n${dna.format === "prefix_sequential" ? `PROCEDURE SUBSECTION KEY = the 3-letter prefix:\n- PCA = Cardiology, PCV = Cardiothoracic, PNS = Neurosurgery, PGS = General Surgery\n- PPM = Pulmonology, PET = ENT, POR = Orthopaedics, PRH = Rehabilitation\nPICK THE MOST SPECIFIC PREFIX.` : ""}\n\nRespond ONLY with this exact JSON:\n{"subsectionKey":"...","subsectionName":"...","reasoning":"..."}`;
  const text = await callClaude([{ role: "user", content: classifyPrompt }], 300, apiKey, groqApiKey);
  const m = text.match(/\{[\s\S]*?\}/);
  if (!m) throw new Error("No JSON from classify");
  return JSON.parse(m[0]);
}

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

async function classifyWithRetry(item: any, cat: string, dna: any, logFn: any, maxRetries = 4, apiKey = "", groqApiKey = "") {
  let delay = 2000;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try { return await classifyNewCode(item, cat, dna, logFn, apiKey, groqApiKey); }
    catch (err: any) {
      if (err.message.includes("429") && attempt < maxRetries) { logFn("⏳ Rate limited — waiting " + (delay/1000) + "s...", "warn"); await sleep(delay); delay *= 2; }
      else throw err;
    }
  }
}

function deriveFallbackCode(item: any, dna: any, subIncrement: any) {
  try {
    if (!dna || !dna.subsections) return null;
    const subs = Object.entries(dna.subsections);
    if (!subs.length) return null;
    const hint = (item.targetSubsection || "").toLowerCase();
    let bestKey: string | null = null;
    if (hint) { const match = subs.find(([, s]: any) => s.name.toLowerCase().includes(hint) || hint.includes(s.name.toLowerCase().slice(0,6))); if (match) bestKey = match[0] as string; }
    if (!bestKey) { const sorted = [...subs].sort((a: any, b: any) => b[1].codes.length - a[1].codes.length); bestKey = sorted[0][0] as string; }
    const sub: any = dna.subsections[bestKey];
    const key = item.edenCategory + "|" + bestKey;
    const offset = subIncrement[key] || 0;
    subIncrement[key] = offset + 1;
    const code = incrementCode(sub.lastCode, dna.format, 1 + offset, bestKey);
    sub.lastCode = code; sub.codes.push(code);
    return code;
  } catch { return null; }
}

async function resolveNewCodes(results: any[], masterDNAs: any, logFn: any, apiKey = "", groqApiKey = "", existingCodes?: Set<string>) {
  const toResolve = results.filter(r => r.isProposed && r.edenCode === "PENDING_CLASSIFICATION");
  if (!toResolve.length) return results;
  logFn("🔎 [M4-DNA] Resolving " + toResolve.length + " new code classifications...", "module");
  const subIncrement: any = {};
  const resolved: any[] = [];
  for (let i = 0; i < toResolve.length; i++) {
    const item = toResolve[i];
    logFn("🔎 [" + (i+1) + "/" + toResolve.length + "] Classifying: " + item.akaName, "dna");
    const dna = masterDNAs[item.edenCategory];
    if (!dna) { resolved.push({ ...item, edenCode: "Proposed: " + (item.targetSubsection||"MISC").replace(/[^A-Z0-9]/gi,"").slice(0,4).toUpperCase() + "-REVIEW", edenName: item.edenName || item.akaName }); continue; }
    // If the triage already identified the correct series (targetSubsection set by validateAndGuard),
    // skip the AI classification call — the subsection key is already known.
    let usedAI = false;
    try {
      const preKnownSub = (item.targetSubsection || "").trim();
      const classification: any = preKnownSub
        ? { subsectionKey: preKnownSub, subsectionName: preKnownSub, reasoning: "Series routing from triage" }
        : await (async () => { usedAI = true; return classifyWithRetry(item, item.edenCategory, dna, logFn, 4, apiKey, groqApiKey); })();
      const subKey = classification.subsectionKey;
      const key = item.edenCategory + "|" + subKey;
      if (!dna.subsections[subKey]) {
        let name = subKey;
        if (dna.format === "positional_5digit") { const modality = CODING_DNA["Imaging"].modalityMap[subKey[0]] || "Other"; const region = CODING_DNA["Imaging"].regionMap[subKey.slice(1)] || subKey.slice(1); name = modality + " — " + region; dna.subsections[subKey] = { name, codes: [], lastCode: subKey + "00" }; }
        else if (dna.format === "prefix_sequential") { name = CODING_DNA["Procedures"].knownPrefixes[subKey] || subKey; dna.subsections[subKey] = { name, codes: [], lastCode: subKey + "000" }; }
        else { dna.subsections[subKey] = { name, codes: [], lastCode: subKey }; }
        logFn("🧬 Created new subsection: " + subKey + " (" + name + ")", "dna");
      }
      const offset = subIncrement[key] || 0;
      const baseCode = dna.subsections[subKey].lastCode;
      // Find the next code that doesn't conflict with an already-existing master code
      let step = 1 + offset;
      let proposedCode = incrementCode(baseCode, dna.format, step, subKey);
      while (existingCodes && existingCodes.has(proposedCode)) {
        logFn("⚠️ Proposed code " + proposedCode + " already exists — skipping to next", "warn");
        step++;
        proposedCode = incrementCode(baseCode, dna.format, step, subKey);
      }
      subIncrement[key] = step; // record the actual step used so next item starts after this one
      if (existingCodes) existingCodes.add(proposedCode); // reserve it for subsequent items in this run
      dna.subsections[subKey].lastCode = proposedCode;
      dna.subsections[subKey].codes.push(proposedCode);
      logFn("✅ " + item.akaName + " → " + proposedCode + " [" + classification.subsectionName + "]", "success");
      resolved.push({ ...item, edenCode: "Proposed: " + proposedCode, edenName: item.edenName || item.akaName, subsectionKey: subKey, subsectionName: classification.subsectionName, classificationReason: classification.reasoning });
    } catch {
      logFn("⚠️ Classification AI failed for " + item.akaName + " — using DNA fallback", "warn");
      let fallbackCode = deriveFallbackCode(item, dna, subIncrement);
      // Ensure fallback code doesn't conflict with existing master codes
      if (fallbackCode && existingCodes) {
        let attempt = 0;
        while (existingCodes.has(fallbackCode!) && attempt < 20) { attempt++; fallbackCode = deriveFallbackCode(item, dna, subIncrement); }
        if (fallbackCode) existingCodes.add(fallbackCode);
      }
      if (fallbackCode) { resolved.push({ ...item, edenCode: "Proposed: " + fallbackCode, edenName: item.edenName || item.akaName, subsectionKey: fallbackCode.slice(0,-2), subsectionName: item.targetSubsection || item.edenCategory, classificationReason: "DNA fallback — manual review recommended" }); }
      else { resolved.push({ ...item, edenCode: "Proposed: " + item.edenCategory.replace(/\s/g,"").slice(0,4).toUpperCase() + "-REVIEW", edenName: item.edenName || item.akaName }); }
    }
    // Only rate-limit-sleep after actual AI calls — pre-triaged items need no delay
    if (usedAI && i < toResolve.length - 1) await sleep(800);
  }
  const resolvedMap = new Map(resolved.map(r => [r.akaCode + "|" + r.akaName, r]));
  return results.map(r => (r.isProposed && r.edenCode === "PENDING_CLASSIFICATION") ? (resolvedMap.get(r.akaCode + "|" + r.akaName) || r) : r);
}

function incrementCode(code: string, format: string, steps: number, _subsectionKey?: string) {
  try {
    if (format === "numeric_series") return String(parseInt(code) + steps);
    if (format === "positional_5digit") { const s = String(code).padStart(5,"0"); return s.slice(0,3) + String(parseInt(s.slice(3)) + steps).padStart(2,"0"); }
    if (format === "prefixed_category") { const prefix = code.slice(0,4); return prefix + String(parseInt(code.slice(4)) + steps).padStart(2,"0"); }
    if (format === "prefix_sequential") { const prefix = code.slice(0,3); return prefix + String(parseInt(code.slice(3)) + steps).padStart(3,"0"); }
    if (format === "flat_sequential") { const m = code.match(/^([A-Z]+)(\d+)$/); if (m) return m[1] + String(parseInt(m[2]) + steps).padStart(m[2].length,"0"); }
    if (format === "category_letter") { const m = code.match(/^(SC\d{2})([A-Z])$/); if (m) return m[1] + String.fromCharCode(m[2].charCodeAt(0) + steps); }
    return code;
  } catch { return code; }
}

function buildExportWithPositionalInsert(baseRows: any[], newItems: any[], cat: string, dna: any) {
  if (!dna || !newItems.length) return [...baseRows, ...newItems];
  const bySubsection: any = {};
  newItems.forEach(item => { const key = item.subsectionKey || "UNKNOWN"; if (!bySubsection[key]) bySubsection[key] = []; bySubsection[key].push(item); });
  const result: any[] = [];
  const insertedKeys = new Set<string>();
  baseRows.forEach((row, idx) => {
    result.push(row);
    const keys = Object.keys(row);
    const codeKey = keys.find(k => /code|id/i.test(k));
    const rowCode = codeKey ? String(row[codeKey] || "").trim() : "";
    Object.entries(bySubsection).forEach(([subKey, items]: any) => {
      if (insertedKeys.has(subKey)) return;
      let isLastInSubsection = false;
      if (dna.format === "numeric_series") {
        const series = Math.floor(parseInt(rowCode) / 1000) * 1000;
        const nextRow = baseRows[idx + 1];
        const nextCkey = nextRow ? Object.keys(nextRow).find(k => /code|id/i.test(k)) : null;
        const nextCode = nextCkey ? String((nextRow as any)[nextCkey] || "").trim() : "";
        const nextSeries = parseInt(nextCode) ? Math.floor(parseInt(nextCode) / 1000) * 1000 : -1;
        if (String(series) === subKey && nextSeries !== series) isLastInSubsection = true;
      }
      if (dna.format === "positional_5digit" || dna.format === "prefixed_category" || dna.format === "prefix_sequential") {
        const codeSubKey = rowCode.slice(0, subKey.length);
        const nextRow = baseRows[idx + 1];
        const nextCkey = nextRow ? Object.keys(nextRow).find(k => /code|id/i.test(k)) : null;
        const nextCode = nextCkey ? String((nextRow as any)[nextCkey] || "").trim() : "";
        if (codeSubKey === subKey && nextCode.slice(0, subKey.length) !== subKey) isLastInSubsection = true;
      }
      if (isLastInSubsection) {
        items.forEach((item: any) => result.push({ Code: item.edenCode.replace("Proposed: ",""), Name: item.edenName, Category: cat, Description: item.description || "", Source_AKA_Code: item.akaCode }));
        insertedKeys.add(subKey);
      }
    });
  });
  Object.entries(bySubsection).forEach(([key, items]: any) => {
    if (!insertedKeys.has(key)) items.forEach((item: any) => result.push({ Code: item.edenCode.replace("Proposed: ",""), Name: item.edenName, Category: cat, Description: item.description || "", Source_AKA_Code: item.akaCode }));
  });
  return result;
}

function fileToRows(file: File): Promise<any[]> {
  return new Promise((res, rej) => {
    const ext = file.name.split(".").pop()!.toLowerCase();
    if (ext === "csv") {
      const r = new FileReader();
      r.onload = e => { try { const lines = (e.target!.result as string).split(/\r?\n/).filter(Boolean); const hdrs = lines[0].split(",").map(h => h.trim().replace(/^"|"$/g,"")); res(lines.slice(1).map(l => { const v = l.split(",").map(x => x.trim().replace(/^"|"$/g,"")); return Object.fromEntries(hdrs.map((h,i) => [h,v[i]||""])); })); } catch(err){rej(err);} };
      r.onerror = () => rej(new Error("Read failed")); r.readAsText(file);
    } else {
      const r = new FileReader();
      r.onload = e => { try { const wb = XLSX.read(e.target!.result,{type:"binary"}); res(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]],{defval:""})); } catch(err){rej(err);} };
      r.onerror = () => rej(new Error("Read failed")); r.readAsBinaryString(file);
    }
  });
}

function fileToRaw(file: File): Promise<string> {
  return new Promise((res, rej) => {
    const ext = file.name.split(".").pop()!.toLowerCase();
    if (ext === "csv") { const r = new FileReader(); r.onload = e => res(e.target!.result as string); r.onerror = () => rej(); r.readAsText(file); }
    else { const r = new FileReader(); r.onload = e => { try { const wb = XLSX.read(e.target!.result,{type:"binary"}); res(wb.SheetNames.map(s => XLSX.utils.sheet_to_csv(wb.Sheets[s])).join("\n")); } catch(err){rej(err);} }; r.onerror = () => rej(); r.readAsBinaryString(file); }
  });
}

function detectCols(rows: any[]) {
  if (!rows.length) return {};
  const k = Object.keys(rows[0]);
  const f = (ps: string[]) => k.find(x => ps.some(p => x.toLowerCase().includes(p)));
  return { code: f(["code","id","ref"]), name: f(["name","desc","procedure","item","test","molecule_name","device"]), category: f(["category","cat","type","dept","specialization"]) };
}

function exportExcel(rows: any[], fname: string) {
  const ws = XLSX.utils.json_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Results");
  XLSX.writeFile(wb, fname);
}

// ── Test data ──────────────────────────────────────────────────────────────────
const TEST_MASTER: any = {
  Labs: [
    { Code:"1001", Name:"Full hemogram", Category:"Hematology and Coagulation", Description:"Complete blood cell analysis", parent_code:"1000" },
    { Code:"1002", Name:"Prothrombin Time (PT)/INR", Category:"Hematology and Coagulation", Description:"Clotting time measurement", parent_code:"1000" },
    { Code:"2031", Name:"CREATININE", Category:"Chemistry", Description:"Kidney function marker", parent_code:"2000" },
    { Code:"2059", Name:"MAGNESIUM", Category:"Chemistry", Description:"Electrolyte panel", parent_code:"2000" },
  ],
  Imaging: [
    { code:"10101", name:"CT BRAIN", description:"Brain CT", parent_code:"10000" },
    { code:"10501", name:"CT ABDOMEN", description:"Abdomen CT", parent_code:"10000" },
    { code:"20101", name:"MRI BRAIN", description:"Brain MRI", parent_code:"20000" },
  ],
  Procedures: [
    { Procedure_code:"PCA001", Name:"Aortic valvuloplasty", Specialization:"Cardiology", Complexity:"Major" },
    { Procedure_code:"PCA005", Name:"Coronary angiography", Specialization:"Cardiology", Complexity:"Minor" },
    { Procedure_code:"PGS003", Name:"Appendicectomy", Specialization:"General surgery", Complexity:"Major" },
  ],
  "Medical Devices": [
    { Device_ID:"MD0101", Medical_Devices:"Manual Wheelchairs", Category_ID:"mobility aids : MD01" },
  ],
  Billing: [
    { Code:"BIL001", Name:"Anaesthesia Fee General", Category:"Billing" },
    { Code:"BIL002", Name:"Surgeon Professional Fee", Category:"Billing" },
  ]
};

const TEST_AKA = [
  { "Aga Khan Code":"AKA001", "Aga Khan Name":"Full Blood Count", "Aga Khan Category":"HAEM" },
  { "Aga Khan Code":"AKA002", "Aga Khan Name":"Complete Blood Picture", "Aga Khan Category":"HAEM" },
  { "Aga Khan Code":"AKA003", "Aga Khan Name":"Chest X-Ray PA View", "Aga Khan Category":"XRAY" },
  { "Aga Khan Code":"AKA004", "Aga Khan Name":"CT Brain with Contrast", "Aga Khan Category":"CT" },
  { "Aga Khan Code":"AKA005", "Aga Khan Name":"Holter Monitor 24HR", "Aga Khan Category":"CARD" },
  { "Aga Khan Code":"AKA006", "Aga Khan Name":"Echocardiogram 2D", "Aga Khan Category":"CARD" },
  { "Aga Khan Code":"AKA007", "Aga Khan Name":"General Anaesthesia Fee", "Aga Khan Category":"BILL" },
  { "Aga Khan Code":"AKA008", "Aga Khan Name":"Coronary Angiogram Diagnostic", "Aga Khan Category":"CATH" },
  { "Aga Khan Code":"AKA009", "Aga Khan Name":"MRI Lumbar Spine", "Aga Khan Category":"MRI" },
  { "Aga Khan Code":"AKA010", "Aga Khan Name":"Serum Magnesium", "Aga Khan Category":"CHEM" },
];

const TEST_RESULTS: any[] = [
  { akaCode:"AKA001", akaName:"Full Blood Count", akaCategory:"HAEM", edenCode:"1001", edenName:"Full hemogram", edenCategory:"Labs", confidence:92, tier:"auto", reason:"Full Blood Count = Full hemogram — clinically identical", bundledFlag:"", description:"Complete blood count analysis", isProposed:false, subsectionName:"Hematology & Coagulation", _status:"approved", _editedBy:false },
  { akaCode:"AKA002", akaName:"Complete Blood Picture", akaCategory:"HAEM", edenCode:"1001", edenName:"Full hemogram", edenCategory:"Labs", confidence:88, tier:"auto", reason:"Complete Blood Picture is a synonym for Full hemogram", bundledFlag:"", description:"CBC — same test, different naming convention", isProposed:false, subsectionName:"Hematology & Coagulation", _status:"approved", _editedBy:false },
  { akaCode:"AKA003", akaName:"Chest X-Ray PA View", akaCategory:"XRAY", edenCode:"PENDING_CLASSIFICATION", edenName:"Chest X-Ray PA View", edenCategory:"Imaging", confidence:45, tier:"new", reason:"Imaging domain — no chest X-ray entry in master yet → new code proposed", bundledFlag:"", description:"Posterior-anterior chest radiograph", isProposed:true, subsectionName:"", targetSubsection:"X-Ray Chest", _status:"pending", _editedBy:false },
  { akaCode:"AKA004", akaName:"CT Brain with Contrast", akaCategory:"CT", edenCode:"10101", edenName:"CT BRAIN", edenCategory:"Imaging", confidence:82, tier:"staging", reason:"CT Brain match — contrast not specified in master, minor variant", bundledFlag:"Possible bundle: contrast agent", description:"Cranial CT with IV contrast", isProposed:false, subsectionName:"CT Head/Neck", _status:"pending", _editedBy:false },
  { akaCode:"AKA005", akaName:"Holter Monitor 24HR", akaCategory:"CARD", edenCode:"PENDING_CLASSIFICATION", edenName:"Holter Monitor 24HR", edenCategory:"Procedures", confidence:40, tier:"new", reason:"Procedures domain — no Holter entry in master yet", bundledFlag:"", description:"24-hour ambulatory cardiac monitoring", isProposed:true, subsectionName:"", targetSubsection:"Cardiology monitoring", _status:"pending", _editedBy:false },
  { akaCode:"AKA006", akaName:"Echocardiogram 2D", akaCategory:"CARD", edenCode:"PENDING_CLASSIFICATION", edenName:"Echocardiogram 2D", edenCategory:"Imaging", confidence:38, tier:"new", reason:"Imaging domain (Echo → Imaging rule) — no echo entry in master yet", bundledFlag:"", description:"Two-dimensional transthoracic echocardiogram", isProposed:true, subsectionName:"", targetSubsection:"Echocardiography", _status:"pending", _editedBy:false },
  { akaCode:"AKA007", akaName:"General Anaesthesia Fee", akaCategory:"BILL", edenCode:"BIL001", edenName:"Anaesthesia Fee General", edenCategory:"Billing", confidence:95, tier:"auto", reason:"Direct name match — anaesthesia professional fee", bundledFlag:"", description:"General anaesthesia professional fee", isProposed:false, subsectionName:"Billing", _status:"approved", _editedBy:false },
  { akaCode:"AKA008", akaName:"Coronary Angiogram Diagnostic", akaCategory:"CATH", edenCode:"PCA005", edenName:"Coronary angiography", edenCategory:"Procedures", confidence:90, tier:"auto", reason:"Coronary angiogram = Coronary angiography — same procedure", bundledFlag:"", description:"Diagnostic cardiac catheterisation", isProposed:false, subsectionName:"Cardiology", _status:"approved", _editedBy:false },
  { akaCode:"AKA009", akaName:"MRI Lumbar Spine", akaCategory:"MRI", edenCode:"PENDING_CLASSIFICATION", edenName:"MRI Lumbar Spine", edenCategory:"Imaging", confidence:42, tier:"new", reason:"Imaging domain — no lumbar spine MRI in master yet", bundledFlag:"", description:"MRI of lumbar spine", isProposed:true, subsectionName:"", targetSubsection:"MRI Spine", _status:"pending", _editedBy:false },
  { akaCode:"AKA010", akaName:"Serum Magnesium", akaCategory:"CHEM", edenCode:"2059", edenName:"MAGNESIUM", edenCategory:"Labs", confidence:91, tier:"auto", reason:"Serum Magnesium = MAGNESIUM — same chemistry test", bundledFlag:"", description:"Serum magnesium electrolyte", isProposed:false, subsectionName:"Chemistry", _status:"approved", _editedBy:false },
];

// ── UploadZone ─────────────────────────────────────────────────────────────────
function UploadZone({ label, onFile, onRemove, loaded, count, fileName, color="#2563eb", bg="#eff6ff" }: any) {
  const ref = useRef<HTMLInputElement>(null);
  const handle = useCallback(async (e: any) => { e.preventDefault(); const f = e.dataTransfer?.files[0] || e.target.files?.[0]; if (f) onFile(f); }, [onFile]);
  return (
    <div style={{display:"flex",flexDirection:"column",minWidth:150}}>
      <div onClick={() => !loaded && ref.current?.click()} onDrop={handle} onDragOver={e=>e.preventDefault()} style={{border:"2px "+(loaded?"solid #22c55e":"dashed "+color),borderRadius:loaded&&onRemove?"10px 10px 0 0":"10px",padding:"12px 16px",cursor:loaded?"default":"pointer",background:loaded?"#f0fdf4":bg,textAlign:"center"}}>
        <input ref={ref} type="file" accept=".csv,.xlsx,.xls" style={{display:"none"}} onChange={handle}/>
        <div style={{fontSize:20}}>{loaded?"✅":"📂"}</div>
        <div style={{fontWeight:600,fontSize:12,color:loaded?"#16a34a":color,marginTop:4}}>{label}</div>
        <div style={{fontSize:10,color:loaded?"#16a34a":"#94a3b8",marginTop:2}}>{loaded?(count+" rows"):"CSV / XLSX"}</div>
        {loaded && fileName && <div style={{fontSize:9,color:"#059669",marginTop:2,wordBreak:"break-all",maxWidth:130,margin:"2px auto 0"}}>{fileName}</div>}
      </div>
      {loaded && onRemove && (
        <button onClick={e=>{e.stopPropagation();onRemove();}} style={{border:"none",borderRadius:"0 0 10px 10px",background:"#fee2e2",color:"#dc2626",fontWeight:700,fontSize:10,padding:"5px 0",cursor:"pointer",borderTop:"1px solid #fca5a5"}}>
          ✕ Remove
        </button>
      )}
    </div>
  );
}

function DNABadge({ dna }: any) {
  if (!dna) return null;
  const subCount = Object.keys(dna.subsections || {}).length;
  return <div style={{fontSize:9,background:"#f0fdf4",border:"1px solid #86efac",borderRadius:5,padding:"3px 7px",color:"#16a34a",marginTop:3}}>🧬 {dna.format} · {subCount} subsections · {(dna.allCodes||[]).length} codes indexed</div>;
}

class ErrorBoundary extends React.Component<any,any> {
  constructor(props: any) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(e: any) { return { error: e }; }
  render() {
    if (this.state.error) return (
      <div style={{background:"#fef2f2",border:"2px solid #fca5a5",borderRadius:12,padding:24}}>
        <div style={{fontWeight:700,color:"#dc2626",fontSize:14,marginBottom:8}}>⚠️ Render Error</div>
        <div style={{fontFamily:"monospace",fontSize:11,color:"#7f1d1d",whiteSpace:"pre-wrap"}}>{String(this.state.error)}</div>
        <button onClick={()=>this.setState({error:null})} style={{marginTop:12,padding:"6px 14px",borderRadius:6,border:"none",background:"#dc2626",color:"#fff",cursor:"pointer",fontSize:12}}>Retry</button>
      </div>
    );
    return this.props.children;
  }
}

const LOG_CFG: any = {
  error:   { bg:"#3b0000", border:"#f87171", badge:"#dc2626", badgeText:"#fff",  label:"ERROR",  dot:"#f87171" },
  warn:    { bg:"#2a1f00", border:"#fbbf24", badge:"#b45309", badgeText:"#fff",  label:"WARN",   dot:"#fbbf24" },
  success: { bg:"#002a0f", border:"#86efac", badge:"#16a34a", badgeText:"#fff",  label:"OK",     dot:"#86efac" },
  dna:     { bg:"#1a0a2e", border:"#a78bfa", badge:"#7c3aed", badgeText:"#fff",  label:"DNA",    dot:"#a78bfa" },
  module:  { bg:"#001a2e", border:"#60a5fa", badge:"#2563eb", badgeText:"#fff",  label:"MODULE", dot:"#60a5fa" },
  batch:   { bg:"#0f1a2e", border:"#475569", badge:"#334155", badgeText:"#94a3b8",label:"BATCH", dot:"#64748b" },
  info:    { bg:"#0f172a", border:"#334155", badge:"#1e3a5f", badgeText:"#94a3b8",label:"INFO",  dot:"#94a3b8" },
};

function LogPanel({ logs, live }: any) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const counts = logs.reduce((acc: any, l: any) => { acc[l.type] = (acc[l.type]||0)+1; return acc; }, {});
  const filtered = logs.filter((l: any) => { if (filter !== "all" && l.type !== filter) return false; if (search && !l.msg.toLowerCase().includes(search.toLowerCase())) return false; return true; });
  useEffect(() => { if (live && bottomRef.current) bottomRef.current.scrollIntoView({behavior:"smooth"}); }, [logs.length, live]);
  const filterBtns = [
    {key:"all",label:"All ("+logs.length+")"},{key:"error",label:"❌ Errors ("+(counts.error||0)+")"},{key:"warn",label:"⚠️ Warn ("+(counts.warn||0)+")"},
    {key:"success",label:"✅ OK ("+(counts.success||0)+")"},{key:"dna",label:"🧬 DNA ("+(counts.dna||0)+")"},{key:"module",label:"🔧 Modules ("+(counts.module||0)+")"},{key:"batch",label:"📦 Batches ("+(counts.batch||0)+")"},
  ];
  return (
    <div style={{background:"#0f172a",borderRadius:12,overflow:"hidden",boxShadow:"0 2px 8px #0004"}}>
      <div style={{padding:"10px 14px",borderBottom:"1px solid #1e293b",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span style={{color:"#7c3aed",fontWeight:700,fontSize:13,fontFamily:"monospace"}}>🖥️ Activity Log</span>
          {live && <span style={{fontSize:10,background:"#dc2626",color:"#fff",borderRadius:99,padding:"1px 7px",fontWeight:700}}>● LIVE</span>}
          <span style={{fontSize:10,color:"#475569"}}>{logs.length} events</span>
        </div>
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search logs..." style={{background:"#1e293b",border:"1px solid #334155",borderRadius:6,color:"#e2e8f0",fontSize:11,padding:"4px 10px",width:180,outline:"none"}}/>
      </div>
      <div style={{padding:"8px 14px",display:"flex",gap:6,flexWrap:"wrap",borderBottom:"1px solid #1e293b"}}>
        {filterBtns.map(f=><button key={f.key} onClick={()=>setFilter(f.key)} style={{fontSize:10,padding:"3px 9px",borderRadius:99,border:"none",cursor:"pointer",fontWeight:600,background:filter===f.key?"#7c3aed":"#1e293b",color:filter===f.key?"#fff":"#64748b"}}>{f.label}</button>)}
      </div>
      <div style={{maxHeight:360,overflowY:"auto",padding:"8px 0"}}>
        {filtered.length===0 && <div style={{color:"#475569",fontSize:12,padding:"16px 14px",textAlign:"center"}}>No entries match.</div>}
        {filtered.map((l: any,i: number)=>{const cfg=LOG_CFG[l.type]||LOG_CFG.info;return(
          <div key={i} style={{display:"flex",alignItems:"flex-start",gap:8,padding:"5px 14px",borderBottom:"1px solid #0f172a",background:i%2===0?cfg.bg:"transparent"}}>
            <span style={{flexShrink:0,marginTop:2,width:6,height:6,borderRadius:99,background:cfg.dot,display:"inline-block"}}/>
            <span style={{flexShrink:0,fontSize:9,fontWeight:700,background:cfg.badge,color:cfg.badgeText,borderRadius:4,padding:"1px 5px",marginTop:1,minWidth:44,textAlign:"center"}}>{cfg.label}</span>
            <span style={{flexShrink:0,fontSize:10,color:"#475569",fontFamily:"monospace",marginTop:1,minWidth:60}}>{l.ts}</span>
            <span style={{fontSize:11,color:"#cbd5e1",fontFamily:"monospace",lineHeight:1.5,wordBreak:"break-word"}}>{l.msg}</span>
          </div>
        );})}
        <div ref={bottomRef}/>
      </div>
      {!live && <div style={{padding:"8px 14px",borderTop:"1px solid #1e293b",display:"flex",gap:12,flexWrap:"wrap"}}>{Object.entries(counts).map(([type,n]: any)=>{const cfg=LOG_CFG[type]||LOG_CFG.info;return<span key={type} style={{fontSize:10,color:cfg.dot}}>● {cfg.label}: {n}</span>;})}</div>}
    </div>
  );
}

function CompareCard({ row, onApprove, onReject, onEdit, hospitalName }: any) {
  const [editing, setEditing] = useState(false);
  const [edited, setEdited] = useState({ ...row });
  const DOMAINS = ["Labs","Imaging","Procedures","Medical Devices","Molecules","Supplies & Consumables","Billing","Services (New)"];
  const confBg = row.confidence>=85?"#dcfce7":row.confidence>=60?"#fef9c3":"#fee2e2";
  const confColor = row.confidence>=85?"#16a34a":row.confidence>=60?"#b45309":"#dc2626";
  const tierColor = row.tier==="auto"?"#16a34a":row.tier==="staging"?"#b45309":"#dc2626";
  return (
    <div style={{background:"#fff",borderRadius:12,boxShadow:"0 1px 6px #0002",overflow:"hidden",marginBottom:12}}>
      <div style={{background:row.tier==="auto"?"#f0fdf4":row.tier==="staging"?"#fffbeb":"#fef2f2",padding:"10px 16px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8,borderBottom:"1px solid #f1f5f9"}}>
        <div style={{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap"}}>
          <span style={{fontFamily:"monospace",fontSize:11,color:"#7c3aed",background:"#f5f3ff",padding:"2px 8px",borderRadius:6}}>{row.akaCode}</span>
          <span style={{fontWeight:700,fontSize:13}}>{row.akaName}</span>
          <span style={{fontSize:11,color:"#94a3b8"}}>{row.akaCategory}</span>
        </div>
        <div style={{display:"flex",gap:6,alignItems:"center"}}>
          <span style={{padding:"2px 9px",borderRadius:99,fontSize:11,fontWeight:700,background:confBg,color:confColor}}>{row.confidence}%</span>
          <TierBadge tier={row.tier} confidence={row.confidence} kgValidated={row.kgValidated}/>
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr auto 1fr",gap:0}}>
        <div style={{padding:"12px 16px",background:"#fafafa"}}>
          <div style={{fontSize:10,fontWeight:700,color:"#94a3b8",marginBottom:8,textTransform:"uppercase"}}>{hospitalName||"Source Hospital"}</div>
          <div style={{fontSize:12,color:"#334155"}}><strong>Code:</strong> {row.akaCode}</div>
          <div style={{fontSize:12,color:"#334155",marginTop:4}}><strong>Name:</strong> {row.akaName}</div>
          <div style={{fontSize:12,color:"#64748b",marginTop:4}}><strong>Category:</strong> {row.akaCategory}</div>
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"0 12px",background:"#f8fafc",borderLeft:"1px solid #f1f5f9",borderRight:"1px solid #f1f5f9"}}>
          <div style={{fontSize:20,color:tierColor}}>→</div>
          <div style={{fontSize:11,fontWeight:700,color:confColor,marginTop:4}}>{row.confidence}%</div>
        </div>
        <div style={{padding:"12px 16px"}}>
          <div style={{fontSize:10,fontWeight:700,color:"#94a3b8",marginBottom:8,textTransform:"uppercase"}}>Eden Care (Target)</div>
          {editing ? (
            <div style={{display:"flex",flexDirection:"column",gap:6}}>
              {["edenCode","edenName","edenCategory"].map(f=>(
                <div key={f}>
                  <div style={{fontSize:10,color:"#94a3b8",marginBottom:2}}>{f==="edenCode"?"Code":f==="edenName"?"Name":"Category"}</div>
                  {f==="edenCategory"
                    ? <select value={edited[f]||""} onChange={e=>setEdited((p: any)=>({...p,[f]:e.target.value}))} style={{width:"100%",padding:"5px 8px",borderRadius:6,border:"1px solid #e2e8f0",fontSize:12}}>{DOMAINS.map(d=><option key={d}>{d}</option>)}</select>
                    : <input value={edited[f]||""} onChange={e=>setEdited((p: any)=>({...p,[f]:e.target.value}))} style={{width:"100%",padding:"5px 8px",borderRadius:6,border:"1px solid #e2e8f0",fontSize:12,boxSizing:"border-box"}}/>}
                </div>
              ))}
            </div>
          ) : (
            <>
              <div style={{fontSize:12,color:"#334155"}}><strong>Code:</strong> <span style={{fontFamily:"monospace",color:row.isProposed?"#dc2626":"#059669"}}>{row.edenCode}</span></div>
              <div style={{fontSize:12,color:"#334155",marginTop:4}}><strong>Name:</strong> {row.edenName}</div>
              <div style={{fontSize:12,color:"#64748b",marginTop:4}}><strong>Category:</strong> {row.edenCategory}</div>
              {row.subsectionName && <div style={{fontSize:11,color:"#7c3aed",marginTop:4}}>🧬 <strong>Subsection:</strong> {row.subsectionName}</div>}
              {row.kgValidated === true && <div style={{fontSize:11,color:"#16a34a",marginTop:4}}>🟢 KG validates: {row.kgCode}</div>}
              {row.kgValidated === false && <div style={{fontSize:11,color:"#dc2626",marginTop:4}}>⚠️ KG suggests: {row.kgCode}</div>}
            </>
          )}
        </div>
      </div>
      <div style={{padding:"8px 16px",background:"#f8fafc",borderTop:"1px solid #f1f5f9"}}>
        <div style={{fontSize:11,color:"#475569"}}><strong>Reason:</strong> {row.reason}</div>
        {row.classificationReason && <div style={{fontSize:11,color:"#7c3aed",marginTop:3}}>🧬 <strong>Classification:</strong> {row.classificationReason}</div>}
        {row.bundledFlag && <div style={{fontSize:11,color:"#b45309",marginTop:3}}>⚠️ <strong>Bundled Flag:</strong> {row.bundledFlag}</div>}
        {row.description && <div style={{fontSize:11,color:"#94a3b8",marginTop:3,fontStyle:"italic"}}>{row.description}</div>}
      </div>
      {row.tier !== "auto" && row._status === "pending" && (
        <div style={{padding:"10px 16px",borderTop:"1px solid #f1f5f9",display:"flex",gap:8,flexWrap:"wrap"}}>
          {!editing ? (
            <>
              <button onClick={()=>onApprove(row)} style={{padding:"6px 16px",borderRadius:8,border:"none",background:"#dcfce7",color:"#16a34a",fontWeight:700,cursor:"pointer",fontSize:12}}>✓ Approve</button>
              <button onClick={()=>setEditing(true)} style={{padding:"6px 16px",borderRadius:8,border:"none",background:"#eff6ff",color:"#2563eb",fontWeight:700,cursor:"pointer",fontSize:12}}>✏️ Edit</button>
              <button onClick={()=>onReject(row)} style={{padding:"6px 16px",borderRadius:8,border:"none",background:"#fee2e2",color:"#dc2626",fontWeight:700,cursor:"pointer",fontSize:12}}>✗ Reject</button>
            </>
          ) : (
            <>
              <button onClick={()=>{onEdit(row,edited);setEditing(false);}} style={{padding:"6px 16px",borderRadius:8,border:"none",background:"#dcfce7",color:"#16a34a",fontWeight:700,cursor:"pointer",fontSize:12}}>✓ Save & Approve</button>
              <button onClick={()=>setEditing(false)} style={{padding:"6px 16px",borderRadius:8,border:"none",background:"#e2e8f0",color:"#475569",fontWeight:700,cursor:"pointer",fontSize:12}}>Cancel</button>
            </>
          )}
        </div>
      )}
      {row._status === "approved" && <div style={{padding:"8px 16px",background:"#f0fdf4",borderTop:"1px solid #dcfce7",fontSize:12,color:"#16a34a",fontWeight:600}}>✅ Approved{row._editedBy?" · Edited by approver":""}</div>}
      {row._status === "rejected" && <div style={{padding:"8px 16px",background:"#fef2f2",borderTop:"1px solid #fca5a5",fontSize:12,color:"#dc2626",fontWeight:600}}>✗ Rejected</div>}
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function ConfidenceThreshold({
  onComplete,
  prefillData,
}: {
  onComplete?: (data: { results: any[]; hospitalName: string; masterCatalogs: any; masterDNAs: any }) => void;
  prefillData?: any;
} = {}) {
  const [mode, setMode]             = useState("home");
  const [status, setStatus]         = useState("idle");
  const [masterCatalogs, setMasters] = useState<any>({});
  const [masterDNAs, setMasterDNAs] = useState<any>({});
  const [masterStates, setMStates]  = useState<any>({});
  const [akaRows, setAkaRows]       = useState<any[]>([]);
  const [akaState, setAkaState]     = useState<any>({status:"idle"});
  const [akaCols, setAkaCols]       = useState<any>(null);
  const [results, setResults]       = useState<any[]>([]);
  const [tab, setTab]               = useState("overview");
  const [logs, setLogs]             = useState<any[]>([]);
  const [progress, setProgress]     = useState({done:0,total:0});
  const [masterVersion, setMVer]    = useState<any[]>([]);
  const [masterFileNames, setMasterFileNames] = useState<any>({});
  const [akaFileName, setAkaFileName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalConfirmed, setHospitalConfirmed] = useState(false);
  const [kgEnabled, setKgEnabled]   = useState(false);
  const [kgProgress, setKgProgress] = useState(0);
  const [apiKey, setApiKeyState]         = useState(() => getStoredKey("gemini"));
  const [showKey, setShowKey]            = useState(false);
  const [groqKey, setGroqKeyState]       = useState(() => getStoredKey("groq"));
  const [showGroqKey, setShowGroqKey]    = useState(false);
  const [orKey, setOrKeyState]           = useState(() => getStoredKey("openRouter"));
  const [showOrKey, setShowOrKey]        = useState(false);
  const [cerebrasKey]                    = useState(() => getStoredKey("cerebras"));
  const [togetherKey]                    = useState(() => getStoredKey("togetherAI"));
  const [mistralKey]                     = useState(() => getStoredKey("mistral"));
  const [cohereKey]                      = useState(() => getStoredKey("cohere"));
  const [deepseekKey]                    = useState(() => getStoredKey("deepseek"));

  // Persist to localStorage whenever a key changes
  function setApiKey(v: string)  { setApiKeyState(v);  storeKey("gemini",      v); }
  function setGroqKey(v: string) { setGroqKeyState(v); storeKey("groq",        v); }
  function setOrKey(v: string)   { setOrKeyState(v);   storeKey("openRouter",  v); }

  const EDEN_CATS = ["Labs","Imaging","Procedures","Medical Devices","Molecules","Supplies & Consumables","Billing"];

  const log = (msg: string, type = "info") => setLogs(p => [...p, { msg, type, ts: new Date().toLocaleTimeString() }]);

  // Prefill from upstream pipeline output (enriched rows + optional master catalogs from M0)
  useEffect(() => {
    // Accept enriched data from M5 Definition Engine
    const source = prefillData?.enriched || prefillData?.resolved;
    if (source?.length) {
      const mapped = source.map((r: any) => ({
        akaCode:       r.akaCode     || r.code     || r.edenCode  || "",
        akaName:       r.akaName     || r.name     || r.edenName  || "",
        akaCategory:   r.akaCategory || r.category || r.edenCategory || "",
        canonicalName: r.canonicalName || "",
        definition:    r.definition    || "",
        definitionSource: r.definitionSource || "",
      }));
      setAkaRows(mapped);
      setAkaCols({ code: "akaCode", name: "akaName", category: "akaCategory" });
      const enrichedCount = mapped.filter((r: any) => r.definition).length;
      setAkaState({ status: "done", msg: mapped.length + " rows — " + enrichedCount + " enriched with definitions" });
      setAkaFileName(prefillData?.enriched ? "Pre-filled from Definition Engine" : "Pre-filled from Alias Engine");
      setMode("real");
    }
    // Pre-load master catalogs — from M0 if available, otherwise fall back to saved storage
    const catalogSource: Record<string, any[]> =
      (prefillData?.masterCatalogs && Object.keys(prefillData.masterCatalogs).length)
        ? prefillData.masterCatalogs
        : getAllStoredMasters();

    if (Object.keys(catalogSource).length) {
      const sourceLabel = (prefillData?.masterCatalogs && Object.keys(prefillData.masterCatalogs).length)
        ? "M0 Pre-Scan" : "saved catalog";
      Object.entries(catalogSource).forEach(([cat, rows]: any) => {
        if (!rows?.length) return;
        const dna = buildCodingDNA(cat, rows, "");
        if (dna) {
          setMasters((p: any) => ({ ...p, [cat]: rows }));
          setMasterDNAs((p: any) => ({ ...p, [cat]: dna }));
          setMStates((p: any) => ({ ...p, [cat]: { status: "done", msg: rows.length + " rows · " + sourceLabel } }));
          setMasterFileNames((p: any) => ({ ...p, [cat]: sourceLabel }));
        }
      });
    }
  }, []);

  function auditExportSafety(originalRows: any[], exportRows: any[]) {
    const originalKeys = new Set(originalRows.map(r => { const keys = Object.keys(r); const ck = keys.find(k => /^(code|id|procedure_code|device_id|molecule_code)/i.test(k)) || keys[0]; return String(r[ck]||"").trim().toLowerCase(); }).filter(Boolean));
    let added = 0, deleted = 0;
    const exportKeys = new Set<string>();
    exportRows.forEach(r => { const code = String(r.Code||r.code||"").trim().toLowerCase(); exportKeys.add(code); if (!originalKeys.has(code)) added++; });
    originalKeys.forEach(k => { if (!exportKeys.has(k)) deleted++; });
    return { safe: deleted === 0, added, deleted };
  }

  function removeMaster(cat: string) {
    setMasters((p: any) => { const n={...p}; delete n[cat]; return n; });
    setMasterDNAs((p: any) => { const n={...p}; delete n[cat]; return n; });
    setMStates((p: any) => { const n={...p}; delete n[cat]; return n; });
    setMasterFileNames((p: any) => { const n={...p}; delete n[cat]; return n; });
    log("🗑️ Removed master: "+cat, "info");
  }

  function removeAka() { setAkaRows([]); setAkaCols(null); setAkaState({status:"idle"}); setAkaFileName(""); log("🗑️ Removed source hospital file","info"); }
  function downloadMaster(cat: string) { const rows=masterCatalogs[cat]; if(!rows?.length) return; exportExcel(rows,"Master_"+cat.replace(/\s/g,"_")+".xlsx"); log("⬇️ Downloaded master: "+cat,"success"); }

  const auto     = results.filter(r=>r.tier==="auto");
  const staging  = results.filter(r=>r.tier==="staging");
  const newCodes = results.filter(r=>r.tier==="new");
  const approved = results.filter(r=>r._status==="approved");
  const pending  = results.filter(r=>r._status==="pending"&&r.tier!=="auto");

  const setMasterState = (cat: string, s: any) => setMStates((p: any) => ({...p,[cat]:s}));

  async function loadMaster(cat: string, file: File) {
    setMasterState(cat,{status:"loading",msg:"Reading file..."});
    try {
      const [rows, raw] = await Promise.all([fileToRows(file),fileToRaw(file)]);
      let dna: any = buildCodingDNA(cat,rows,raw);
      if (dna) { const subCount=Object.keys(dna.subsections||{}).length; log("🧬 "+cat+": "+dna.format+" · "+subCount+" subsections · "+(dna.allCodes||[]).length+" codes","dna"); setMasterState(cat,{status:"done",msg:rows.length+" rows · "+dna.format+" · "+subCount+" subsections"}); }
      else { log("⚠️ "+cat+": unknown format — AI extraction","warn"); dna = await extractCodingDNAFromAI(raw,cat,log,apiKey); log("🧬 "+cat+" (AI): "+dna.codingRules,"dna"); setMasterState(cat,{status:"done",msg:rows.length+" rows · AI-extracted DNA"}); }
      setMasters((p: any)=>({...p,[cat]:rows})); setMasterDNAs((p: any)=>({...p,[cat]:dna})); setMasterFileNames((p: any)=>({...p,[cat]:file.name}));
      setMVer(p=>[...p,{cat,timestamp:new Date().toISOString(),count:rows.length,file:file.name,format:dna.format||"AI-extracted"}]);
    } catch(err: any) { setMasterState(cat,{status:"error",msg:err.message}); log("❌ Error loading "+cat+": "+err.message,"error"); }
  }

  async function loadAka(file: File) {
    setAkaState({status:"loading",msg:"Parsing..."});
    try { const rows=await fileToRows(file); const cols=detectCols(rows); setAkaRows(rows); setAkaCols(cols); setAkaState({status:"done",msg:rows.length+" rows"}); setAkaFileName(file.name); log("📋 "+(hospitalName||"Source")+" data loaded: "+rows.length+" rows","success"); }
    catch(err: any) { setAkaState({status:"error",msg:err.message}); }
  }

  async function runWithTestData() {
    setStatus("running"); setResults([]); setLogs([]);
    const testDNAs: any = {};
    Object.keys(TEST_MASTER).forEach(cat => { testDNAs[cat] = buildCodingDNA(cat,TEST_MASTER[cat],""); });
    setMasters(TEST_MASTER); setMasterDNAs(testDNAs);
    log("🧪 Test mode — using pre-built demo results (no API call)","info");
    setProgress({done:0,total:TEST_RESULTS.length});
    for (let i=0;i<TEST_RESULTS.length;i++) { await new Promise(r=>setTimeout(r,80)); setProgress({done:i+1,total:TEST_RESULTS.length}); }
    const resolved = TEST_RESULTS.map(r => {
      if (!r.isProposed) return r;
      const dna = testDNAs[r.edenCategory];
      if (!dna) return {...r,edenCode:"Proposed: "+r.edenCategory.slice(0,4).toUpperCase()+"-001"};
      const subs = Object.entries(dna.subsections||{});
      const hint = (r.targetSubsection||"").toLowerCase();
      let sub: any = subs.find(([,s]: any)=>s.name.toLowerCase().includes(hint.slice(0,5)));
      if (!sub && subs.length) sub = subs[0];
      if (!sub) return {...r,edenCode:"Proposed: NEW-001"};
      const nextCode = incrementCode((sub[1] as any).lastCode,dna.format,1,sub[0] as string);
      (sub[1] as any).lastCode = nextCode;
      log("🧬 [TEST] "+r.akaName+" → Proposed: "+nextCode+" ["+(sub[1] as any).name+"]","dna");
      return {...r,edenCode:"Proposed: "+nextCode,subsectionName:(sub[1] as any).name,subsectionKey:sub[0]};
    });
    log("✅ [TEST-COMPLETE] Auto:"+resolved.filter(r=>r.tier==="auto").length+" · Staging:"+resolved.filter(r=>r.tier==="staging").length+" · New:"+resolved.filter(r=>r.tier==="new").length,"success");
    setResults(resolved); setStatus("done"); setTab("overview");
  }

  async function runWithRealData() {
    if (!akaRows.length) { alert("Upload "+(hospitalName||"source hospital")+" data first."); return; }
    if (!Object.keys(masterCatalogs).length) { alert("Upload at least one master catalog."); return; }
    setStatus("running"); setResults([]); setLogs([]);
    await processRows(akaRows,akaCols,masterCatalogs,masterDNAs);
  }

  async function processRows(rows: any[], cols: any, masters: any, dnas: any) {
    const norm = rows.map(r => ({
      akaCode:       cols ? (r[cols.code]||"")     : (r.akaCode||r["Aga Khan Code"]||r.code||""),
      akaName:       cols ? (r[cols.name]||"")     : (r.akaName||r["Aga Khan Name"]||r.name||""),
      akaCategory:   cols ? (r[cols.category]||"") : (r.akaCategory||r["Aga Khan Category"]||r.category||""),
      // M5 enrichment fields — included if available
      canonicalName: r.canonicalName || "",
      definition:    r.definition    || "",
    }));
    setProgress({done:0,total:norm.length});

    // Build a code→{name,cat} map for post-match validation (detect hallucinated/wrong-series codes)
    // Uses regex-based key detection (case-insensitive, handles spaces) so "Eden Code", "eden_code",
    // "Code", "EDEN CODE" etc. all resolve correctly regardless of how the master was uploaded.
    const validCodeMap = new Map<string, { name: string; cat: string }>();
    Object.entries(masters).forEach(([cat, rows]: any) => {
      const allRows = rows as any[];
      if (!allRows.length) return;
      const keys    = Object.keys(allRows[0]);
      const codeKey = keys.find(k => /^code$|eden.?code|proc.?code|device.?id|molecule.?code|billing.?code/i.test(k))
                   || keys.find(k => /\bcode\b|\bid\b|\bref\b/i.test(k)) || keys[0] || "";
      const nameKey = keys.find(k => /^name$|eden.?name|proc.*name|device.*name|description|molecule.*name/i.test(k))
                   || keys.find(k => /\bname\b|\bdesc\b|\bitem\b/i.test(k)) || keys[1] || keys[0] || "";
      allRows.forEach((r: any) => {
        const code = codeKey ? String(r[codeKey] ?? "").trim() : "";
        const name = nameKey ? String(r[nameKey] ?? "").trim() : "";
        if (code) validCodeMap.set(code, { name, cat });
      });
    });

    // Post-match safety guard: validates every AI-returned code against the master catalog
    function validateAndGuard(r: any): any {
      const raw = String(r.edenCode || "").trim();

      // ── Pre-check: sanitize when AI puts a description/sentence in edenCode ────────
      // Valid codes are short alphanumeric tokens (e.g. "11001", "PCA005", "300.02L").
      // Descriptions have >3 words, semicolons, or sentence-ending punctuation.
      const wordCount = raw.split(/\s+/).filter(Boolean).length;
      const isDescriptionInCode = raw !== "PENDING_CLASSIFICATION" && raw.length > 2 && (
        wordCount > 3 ||
        (wordCount > 1 && /[;.]/.test(raw))
      );
      if (isDescriptionInCode) {
        // Use the M3-resolved canonical name (UMLS/LOINC/SNOMED) as the proposed Eden name,
        // falling back to the description text or the original hospital item name.
        const proposedName = r.canonicalName
          || (raw.length <= 100 ? raw : "")
          || r.akaName || "";
        log(`⚠️ [SANITIZE] "${r.akaName}" — edenCode was a description, replaced with PENDING_CLASSIFICATION`, "warn");
        return {
          ...r,
          edenCode:   "PENDING_CLASSIFICATION",
          edenName:   proposedName,
          tier:       "new",
          isProposed: true,
          reason:     r.reason || "No matching Eden catalog code found — proposed for classification.",
        };
      }

      if (!r.edenCode || r.isProposed || r.tier === "new") return r;
      const code = raw;
      const entry = validCodeMap.get(code);

      // Guard 1: code doesn't exist in ANY loaded master
      if (!entry) {
        // ── Series routing detection ───────────────────────────────────────────
        // The AI correctly identified the right series/category but returned the
        // series HEADER code (e.g. "2000", "MD08", "PCA") rather than a specific
        // item code. These are valid triage signals — convert to PENDING_CLASSIFICATION
        // with targetSubsection set so resolveNewCodes assigns the next available code.
        const isLabSeries    = /^\d{4}$/.test(code) && parseInt(code) % 1000 === 0 && parseInt(code) >= 1000 && parseInt(code) <= 9000;
        const isMDCategory   = /^MD\d{2}$/.test(code);
        const isProcPrefix   = /^[A-Z]{3}$/.test(code) && (r.edenCategory || "").toLowerCase().includes("procedure");
        const isATCParent    = /^[A-Z](\d{2}([A-Z]{1,2})?)?$/.test(code) && (r.edenCategory || "").toLowerCase().includes("molecule");
        const isSeriesHeader = isLabSeries || isMDCategory || isProcPrefix || isATCParent;

        if (isSeriesHeader) {
          log(`🔍 [TRIAGE] "${r.akaName}" → series "${code}" correctly identified — routing to DNA for next available code`, "info");
          return {
            ...r,
            edenCode:         "PENDING_CLASSIFICATION",
            edenName:         r.edenName || r.canonicalName || r.akaName,
            tier:             "new",
            isProposed:       true,
            targetSubsection: code,   // tells resolveNewCodes exactly which series to use
            reason:           r.reason || `Correctly triaged to series "${code}" (${r.edenCategory}) — next available code will be assigned`,
          };
        }

        // Non-series code not in master — AI may have hallucinated or guessed a series-start code
        // (e.g. "3001", "4001", "6001"). If it's numeric and in a known lab series range,
        // route to DNA so it gets the true next-available code — prevents allocation collisions.
        const isNumericSeries = /^\d{4,5}$/.test(code) && parseInt(code) >= 1000;
        if (isNumericSeries) {
          const seriesBase = Math.floor(parseInt(code) / 1000) * 1000;
          log(`🔍 [TRIAGE] "${r.akaName}" → code "${code}" not in master — routing to DNA (${seriesBase}s series)`, "info");
          return {
            ...r,
            edenCode:         "PENDING_CLASSIFICATION",
            edenName:         r.edenName || r.canonicalName || r.akaName,
            tier:             "new",
            isProposed:       true,
            targetSubsection: String(seriesBase),
            reason:           (r.reason || "") + ` — code ${code} not in master; DNA will assign next available in ${seriesBase}s`,
          };
        }
        // Non-numeric / short code not in master — downgrade to staging for human review
        const looksReal = code.length <= 20 && !/\s/.test(code);
        log(`⚠️ [VALIDATION] "${r.akaName}" → code "${code}" NOT found in master — ${looksReal ? "downgraded to staging" : "forced to new"}`, "warn");
        return looksReal
          ? { ...r, tier: "staging", confidence: Math.min(r.confidence ?? 70, 70), _status: "pending", _invalidCode: true, reason: (r.reason || "") + " ⚠️ Code not in master catalog" }
          : { ...r, edenCode: "PENDING_CLASSIFICATION", edenName: r.canonicalName || r.akaName, tier: "new", isProposed: true, reason: (r.reason || "") + " ⚠️ Code not in master catalog" };
      }

      // Guard 2: for numeric-series categories (Labs), code must be in the correct series
      // e.g. Chemistry items (2000s) must not map to Hematology codes (1000s)
      const dna = dnas[r.edenCategory];
      if (dna?.format === "numeric_series") {
        const codeNum = parseInt(code);
        if (!isNaN(codeNum) && codeNum > 999) {
          const codeSeries = Math.floor(codeNum / 1000) * 1000;
          const seriesName = (dna.seriesMap?.[codeSeries] || "").toLowerCase();
          const itemHint = (r.akaName + " " + (r.canonicalName || "") + " " + (r.definition || "")).toLowerCase();
          // Detect obvious cross-series mismatches using keyword signals
          const seriesKeywords: Record<number, string[]> = {
            1000: ["hemato","coagul","platelet","blood count","prothrombin","fibrinogen","cbc","full blood"],
            2000: ["chemistry","metabol","electrolyte","glucose","creatinine","cholesterol","pyruvate","lactate","uric","bilirubin","albumin","protein","lfts","kfts"],
            3000: ["immunol","serol","antibod","antigen","hiv","hepatitis","syphilis","elisa","western blot","titer","igg","igm","iga"],
            4000: ["microb","culture","sensitiv","bacteria","fungal","gram stain","c&s","sensitivity"],
            5000: ["molecular","pcr","dna","rna","genotyp","sequenc","naat","viral load"],
            6000: ["histol","cytol","biopsy","pathol","histopath","fnac","pap smear"],
            7000: ["urinalysis","urine","dipstick","urin","urogenital","microscop","sediment","specific gravity","poc","point of care","rapid test","glucometer"],
            8000: ["endocrin","hormone","thyroid","cortisol","insulin","tsh","t3","t4","hba1c","prolactin","estrogen","testosterone","parathyroid","pth","lh","fsh","acth"],
            9000: ["toxicol","drug level","poison","drug screen","therapeutic drug","paracetamol level","ethanol","barbiturate","salicylate","tca"],
          };
          const expectedSeries = Object.entries(seriesKeywords).find(([, kws]) => kws.some(kw => itemHint.includes(kw)));
          if (expectedSeries && parseInt(expectedSeries[0]) !== codeSeries) {
            const expectedSeriesName = dna.seriesMap?.[parseInt(expectedSeries[0])] || expectedSeries[0];
            log(`⚠️ [SERIES-MISMATCH] "${r.akaName}" → code ${code} is in ${seriesName} series but item signals ${expectedSeriesName} — downgraded to staging`, "warn");
            return { ...r, tier: "staging", confidence: Math.min(r.confidence ?? 70, 65), _status: "pending", _seriesMismatch: true, reason: (r.reason || "") + ` ⚠️ Series mismatch: code is ${seriesName}, item suggests ${expectedSeriesName}` };
          }
        }
      }

      // Guard 3: matched code belongs to a different master category than the item
      // e.g. a Lab item (Free T4) must not resolve to an Imaging code (CT Thyroid)
      if (entry.cat !== r.edenCategory) {
        const labTerms      = ["lab", "labs", "laboratory", "pathology"];
        const imagingTerms  = ["imaging", "radiology", "xray", "x-ray", "ct", "mri", "ultrasound", "nuclear"];
        const catLow   = (r.edenCategory  || "").toLowerCase();
        const entryLow = (entry.cat       || "").toLowerCase();
        const srcIsLab    = labTerms.some(t => catLow.includes(t));
        const srcIsImaging= imagingTerms.some(t => catLow.includes(t));
        const dstIsLab    = labTerms.some(t => entryLow.includes(t));
        const dstIsImaging= imagingTerms.some(t => entryLow.includes(t));
        const hardMismatch = (srcIsLab && dstIsImaging) || (srcIsImaging && dstIsLab);
        if (hardMismatch) {
          log(`⚠️ [CATEGORY-MISMATCH] "${r.akaName}" → code "${code}" is in master "${entry.cat}" but item is "${r.edenCategory}" — downgraded to staging`, "warn");
          return { ...r, tier: "staging", confidence: Math.min(r.confidence ?? 70, 60), _status: "pending", _categoryMismatch: true,
            reason: (r.reason || "") + ` ⚠️ Category mismatch: code belongs to ${entry.cat}, item is ${r.edenCategory}` };
        }
      }

      return r;
    }

    // Per-batch context builder: ranks master rows by keyword relevance to the batch
    // so items like "Pyruvate" (code 2124) are visible even if far past row 80
    // maxRows limits total context size — use a smaller value for Groq (32K token limit)
    function buildMasterContext(batchItems: any[], maxRows: number = 250): string {
      const keywords = batchItems
        .flatMap(item => (item.akaName || "").toLowerCase().split(/\W+/).filter((w: string) => w.length >= 4))
        .filter((w: string, i: number, a: string[]) => a.indexOf(w) === i);

      return Object.entries(masters).map(([cat, rows]: any) => {
        const dna = dnas[cat];
        const dnaInfo = dna ? `FORMAT: ${dna.format||"unknown"} · CODING RULES: ${dna.codingRules||""}` : "";
        const allRows: any[] = rows as any[];

        // Score each row: +1 per keyword match in name
        const scored = allRows.map((r: any) => {
          const code = r.Code || r.code || r.eden_code || r.EdenCode || "";
          const name = r.Name || r.name || r.Description || r.description || r.ProcedureName || r.procedure_name || "";
          const nameLower = name.toLowerCase();
          const score = keywords.filter((kw: string) => nameLower.includes(kw)).length;
          return { code, name, score };
        });

        // Relevant rows first (keyword matches), then sequential fill up to maxRows
        const relMax = Math.ceil(maxRows * 0.6);
        const relevant = scored.filter(s => s.score > 0).sort((a, b) => b.score - a.score).slice(0, relMax);
        const relevantCodes = new Set(relevant.map(s => s.code));
        const sequential = scored.filter(s => !relevantCodes.has(s.code)).slice(0, maxRows - relevant.length);
        const combined = [...relevant, ...sequential];

        const sample = combined.map(s => s.code && s.name ? `${s.code}|${s.name}` : s.name).join("\n");
        return `## ${cat} (${allRows.length} total)\n${dnaInfo}\n${sample}`;
      }).join("\n\n");
    }

    // ── Build provider pool based on available keys ────────────────────────────
    // Priority order: Gemini (best quality, large batch) → OpenRouter (no token limit) → Groq (small batch)
    // contextLimit: max master rows per batch to stay within each provider's token budget
    type Provider = { name: string; batchSize: number; contextLimit: number; callFn: (prompt: string) => Promise<string> };
    const RAW_ARRAY = "\n\nRespond with ONLY a raw JSON array. No markdown.";
    const providers: Provider[] = [];
    if (apiKey.trim())      providers.push({ name: "Gemini 2.0 Flash",    batchSize: 20, contextLimit: 250, callFn: (p) => callGemini(apiKey, p, 8000, true) });
    if (deepseekKey.trim()) providers.push({ name: "DeepSeek Chat",        batchSize: 15, contextLimit: 200, callFn: (p) => callDeepSeek(deepseekKey, p + RAW_ARRAY, 2000) });
    if (cerebrasKey.trim()) providers.push({ name: "Cerebras Llama 70B",   batchSize: 15, contextLimit: 200, callFn: (p) => callCerebras(cerebrasKey, p + RAW_ARRAY, 2000) });
    if (orKey.trim())       providers.push({ name: "OpenRouter",           batchSize: 10, contextLimit: 150, callFn: (p) => callOpenRouter(orKey, p + RAW_ARRAY, 3000) });
    if (groqKey.trim())     providers.push({ name: "Groq Llama 3.3 70B",  batchSize: 5,  contextLimit: 60,  callFn: (p) => callGroq(groqKey, p + RAW_ARRAY, 2000) });
    if (mistralKey.trim())  providers.push({ name: "Mistral Small",        batchSize: 10, contextLimit: 150, callFn: (p) => callMistral(mistralKey, p, 2000) });
    if (togetherKey.trim()) providers.push({ name: "Together AI",          batchSize: 10, contextLimit: 150, callFn: (p) => callTogetherAI(togetherKey, p + RAW_ARRAY, 2000) });
    if (cohereKey.trim())   providers.push({ name: "Cohere Command-R+",    batchSize: 4,  contextLimit: 60,  callFn: (p) => callCohere(cohereKey, p + RAW_ARRAY, 2000) });

    if (!providers.length) throw new Error("No API key provided — enter at least one key in the API Keys panel above");

    // ── Phase 0: Deterministic pre-matching using M3 canonical names ────────────
    // Matches items via word-overlap of canonical name vs catalog. No AI call needed.
    const allResults: any[] = new Array(norm.length).fill(null);
    const preMatched = deterministicPreMatch(norm, masters, log);
    const pmAuto    = [...preMatched.values()].filter(r => r.confidence >= 90).length;
    const pmStaging = preMatched.size - pmAuto;
    preMatched.forEach((result, idx) => { allResults[idx] = result; });
    let doneCount = preMatched.size;
    if (preMatched.size > 0) {
      log(`🔍 [M4-PREMATCH] ${preMatched.size}/${norm.length} matched without AI — ${pmAuto} auto, ${pmStaging} staging`, "module");
      setProgress({ done: doneCount, total: norm.length });
      setResults([...allResults.filter(Boolean)]);
    }

    // ── Phase 0.5: UMLS → Wikidata → PubChem free lookups ──────────────────────
    // For every item still unmatched after Phase 0, query free medical APIs to get
    // a canonical name, then re-run catalog matching. UMLS alone covers ~200 medical
    // vocabularies. Items resolved here never consume AI tokens.
    {
      const umlsKey        = getStoredKey("umls");
      const stillUnmatched = norm
        .map((item, idx) => ({ item, idx }))
        .filter(({ idx }) => !allResults[idx]);

      if (stillUnmatched.length > 0) {
        log(`🔗 [M4-LOOKUP] ${stillUnmatched.length} items → UMLS, Wikidata, PubChem before AI...`, "module");
        let lookupMatched = 0;
        const BATCH = 8;

        for (let i = 0; i < stillUnmatched.length; i += BATCH) {
          await Promise.all(stillUnmatched.slice(i, i + BATCH).map(async ({ item, idx }) => {
            const rawName = (item.akaName || "").trim();
            if (!rawName) return;

            // 1. UMLS first — most comprehensive medical terminology database
            let canonical: string | null = null;
            if (umlsKey) {
              const umls = await lookupUMLSM4(rawName, umlsKey);
              if (umls && umls.toLowerCase() !== rawName.toLowerCase()) canonical = umls;
            }

            // 2. Wikidata/Wikipedia — broad open medical knowledge graph
            if (!canonical) {
              const wiki = await lookupWikidataM4(rawName);
              if (wiki) canonical = wiki;
            }

            // 3. PubChem — drug / molecule names
            if (!canonical) {
              const pc = await lookupPubChemM4(rawName);
              if (pc && pc.toLowerCase() !== rawName.toLowerCase()) canonical = pc;
            }

            if (!canonical) return; // no API resolved this item — will go to AI

            // Re-run catalog matching using the resolved canonical name
            let bestCode = "", bestName = "", bestCat = "", bestScore = 0;
            Object.entries(masters).forEach(([cat, catRows]) => {
              (catRows as any[]).forEach((row: any) => {
                const code = String(
                  row.Code || row.code || row.eden_code || row.EdenCode ||
                  row.Procedure_code || row.procedure_code || row.Device_ID || ""
                ).trim();
                const name = (
                  row.Name || row.name || row.Description || row.description ||
                  row.Medical_Devices || row.ProcedureName || ""
                ).trim();
                if (!code || !name) return;
                const score = termSimilarity(canonical!, name);
                if (score > bestScore) { bestScore = score; bestCode = code; bestName = name; bestCat = cat; }
              });
            });

            if (bestScore < 60) return; // still no meaningful match — AI will handle it

            const tier = bestScore >= 90 ? "auto" : "staging";
            allResults[idx] = {
              ...item,
              canonicalName: canonical,
              edenCode:      bestCode,
              edenName:      bestName,
              edenCategory:  bestCat,
              confidence:    bestScore,
              tier,
              isProposed:    false,
              reason:        `M4 API: "${rawName}" → "${canonical}" ↔ "${bestName}" [${bestScore}%]`,
              _preMatched:   true,
              _status:       tier === "auto" ? "approved" : "pending",
              _editedBy:     false,
            };
            lookupMatched++;
            log(
              tier === "auto"
                ? `✅ [M4-LOOKUP] "${rawName}" → "${canonical}" → ${bestCode} [${bestScore}%]`
                : `⚠️ [M4-LOOKUP] "${rawName}" → staging "${canonical}" ↔ "${bestName}" [${bestScore}%]`,
              "batch"
            );
          }));
        }

        if (lookupMatched > 0) {
          doneCount += lookupMatched;
          log(`🔗 [M4-LOOKUP] ${lookupMatched}/${stillUnmatched.length} matched via UMLS/Wikidata/PubChem — ${lookupMatched} AI calls saved`, "module");
          setProgress({ done: doneCount, total: norm.length });
          setResults([...allResults.filter(Boolean)]);
        } else if (!umlsKey) {
          log("ℹ️ [M4-LOOKUP] No UMLS key — add one in API Keys panel for best results (Wikidata/PubChem still active)", "info");
        }
      }
    }

    // ── Assign batches to providers — only unmatched items go to AI ───────────
    const aiQueue = norm.map((item, origIdx) => ({ item, origIdx }))
      .filter(({ origIdx }) => !allResults[origIdx]);

    type Assignment = { provider: Provider; rows: any[]; origIndices: number[]; batchNum: number };
    const assignments: Assignment[] = [];
    let queueIdx = 0; let batchNum = 0;
    while (queueIdx < aiQueue.length) {
      const provider = providers[batchNum % providers.length];
      const chunk = aiQueue.slice(queueIdx, queueIdx + provider.batchSize);
      assignments.push({ provider, rows: chunk.map(x => x.item), origIndices: chunk.map(x => x.origIdx), batchNum: batchNum + 1 });
      queueIdx += provider.batchSize;
      batchNum++;
    }

    const totalBatches = assignments.length;
    if (aiQueue.length > 0) {
      log("🤖 [M4-AI] "+aiQueue.length+"/"+norm.length+" unmatched → "+totalBatches+" batches across "+providers.map(p=>p.name).join(" + "),"module");
    } else {
      log("✅ [M4-PREMATCH] All "+norm.length+" items matched deterministically — AI skipped","success");
    }

    // ── Run each provider's batches sequentially; all providers run in parallel ─

    function buildPrompt(batchRows: any[], maxContextRows: number = 250): string {
      const batchFormatted = batchRows.map((r: any) => {
        const parts: string[] = [`Code: ${r.akaCode}`, `Name: ${r.akaName}`, `Category: ${r.akaCategory}`];
        if (r.canonicalName && r.canonicalName !== r.akaName) parts.push(`Canonical: ${r.canonicalName}`);
        if (r.definition) parts.push(`Definition: ${r.definition}`);
        return parts.join(" | ");
      }).join("\n");
      // Per-batch context: master rows are ranked by relevance to THIS batch's item names
      const perBatchContext = buildMasterContext(batchRows, maxContextRows);
      return `You are a senior medical coding specialist at Eden Care, an African health insurer. Match each hospital charge item to the CLOSEST item in the Eden Care master catalog.\n\nSOURCE HOSPITAL: ${hospitalName||"Unknown Hospital"}\n\nEDEN CARE MASTER CATALOG (your matching target — catalog entries shown as Code|Name):\n${perBatchContext}\n\nHOSPITAL ITEMS TO MATCH (with clinical definitions where available):\n${batchFormatted}\n\nMATCHING RULES:\n- ≥85% match: clinically equivalent or same procedure → tier="auto", use the EXACT Eden code and name from the catalog above\n- 60–84%: related but variant (different dosage, approach, duration) → tier="staging"\n- <60%: genuinely not in catalog → tier="new", isProposed=true, edenCode="PENDING_CLASSIFICATION"\n- Use the Canonical Name and Definition to improve accuracy — they standardize trade names and abbreviations\n- Echocardiogram (any type) → Imaging; Holter monitor → Procedures; Any item with FEE/CHARGE/CONSULTATION → Billing\n- If the item IS in the catalog (even under a slightly different name), prefer tier="auto" or "staging" over "new"\n\nEDEN CARE CODING SYSTEM (reference for targetSubsection and new code placement):\n- LABS (4-digit): 1000s=Hematology/Coagulation · 2000s=Chemistry · 3000s=Immunology/Serology · 4000s=Microbiology · 5000s=Molecular Pathology · 6000s=Histology/Cytopathology · 7000s=Urinalysis/POCT · 8000s=Endocrinology · 9000s=Toxicology\n- IMAGING (5-digit positional): digit1=modality (1=CT,2=MRI,3=XRAY,4=ULTRASOUND,5=Nuclear,6=Endoscopy,7=ECG/EEG,9=Other) · digits2-3=body region (01=Head/Neck,02=Vascular,03=Extremities,04=Spine,05=Abdomen,06=Chest,07=Urogenital,08=Pelvis,09=Breast,10=Thyroid,16=Obstetrics,17=Gynaecology) · digits4-5=sequential\n- PROCEDURES (prefix+3digit): PCA=Cardiology · PCV=Cardiothoracic/Vascular · PET=ENT · PGS=General Surgery · PIR=Interventional Radiology · PMX=Maxillofacial · PNS=Neurosurgery · POB=Obstetrics · POP=Ophthalmology · POT=Orthopaedics · PPD=Paediatrics · PPL=Plastic Surgery · PUR=Urology · PHO=Haematology/Oncology · PDE=Dermatology · PGE=Gastroenterology/Endoscopy · PAN=Anaesthesia · PGP=Gynaecology · PDS=Dental Surgery\n- MEDICAL DEVICES: MD01=Mobility Aids · MD02=Hearing Aids · MD03=Visual Aids · MD04=Respiratory · MD05=Monitoring · MD06=Diagnostic Equipment · MD07=Therapeutic · MD08=Surgical Instruments · MD09=Imaging Equipment · MD10=Lab Equipment · MD11=Rehabilitation · MD12=Orthopedic · MD13=Prosthetics · MD14=Cardiovascular · MD15=Interventional\n- MOLECULES: WHO ATC — A=Alimentary/Metabolism, B=Blood, C=Cardiovascular, D=Dermatology, G=Genito-urinary, H=Hormones, J=Anti-infectives, L=Antineoplastic, M=Musculoskeletal, N=Nervous, P=Antiparasitic, R=Respiratory, S=Sensory, V=Various\n- SUPPLIES: C0001 flat sequential · BILLING: BIL001 flat sequential · SERVICES: SC + 2-digit category + letter (SC01=Consultations, SC04=Diagnostics, SC10=Pharmacy)\n- Set targetSubsection to the most specific bucket (e.g. "3000" for Immunology lab, "106" for CT Chest imaging, "PCA" for Cardiology procedure).\n\nCODE FORMAT RULES (CRITICAL — violations will be rejected):\n- The edenCode field MUST be a SHORT code exactly as it appears in the catalog above (e.g. "11001", "2124", "PCA005", "BIL001"). It must be fewer than 30 characters.\n- NEVER put a sentence, phrase, description, or explanation in the edenCode field. A description in edenCode is always WRONG.\n- NEVER invent or guess a code. If no catalog code fits: edenCode MUST be exactly "PENDING_CLASSIFICATION", tier="new", isProposed=true.\n- Use the Canonical field (from UMLS/LOINC/SNOMED) as the edenName when the item is new — it is the verified medical name.\n- Valid example: edenCode="2124", edenName="Pyruvate" — INVALID: edenCode="Measures pyruvate in blood"\n- WRONG: edenCode="Detects antibodies against..." — RIGHT: edenCode="PENDING_CLASSIFICATION"\n\nCATEGORY MATCHING RULES (CRITICAL):\n- A Lab item MUST only match to a Lab catalog entry. An Imaging item MUST only match to an Imaging catalog entry.\n- NEVER match a lab test (blood draw, serum, urine, hormone level) to an Imaging code (CT, MRI, X-Ray, Ultrasound scan).\n- NEVER match an imaging procedure to a lab code. If no same-category match exists, use tier="new".\n- Items starting with ordinal prefixes (1st, 2nd, 3rd, Initial, Subsequent, Follow-up) → Procedures ONLY\n- "Arterial Line", "Central Line", "IV Line", "Chest Drain", "Urinary Catheter" without Kit/Set/Pack suffix → Procedures, NOT Consumables\n- The Category field in the input is a STRONG SIGNAL — only override if ≥90% certain it is miscategorised\n\nRespond ONLY with a valid JSON array (one object per input item, same order):\n[{"akaCode":"","akaName":"","akaCategory":"","edenCode":"","edenName":"","edenCategory":"","confidence":0,"tier":"auto|staging|new","reason":"one sentence","bundledFlag":"","description":"","isProposed":false,"targetSubsection":""}]\n\nCRITICAL: Your response MUST start with [ and end with ]. No text, no markdown, no explanation before or after the JSON array.`;
    }

    // Group assignments by provider name
    const byProvider = new Map<string, Assignment[]>();
    providers.forEach(p => byProvider.set(p.name, []));
    assignments.forEach(a => byProvider.get(a.provider.name)!.push(a));

    // Helper: call a provider, parse the response, return result array
    async function callAndParse(prov: Provider, batchRows: any[]): Promise<any[]> {
      const raw = await prov.callFn(buildPrompt(batchRows, prov.contextLimit));
      if (!raw.trim()) throw new Error("Empty response from " + prov.name);
      const text = raw.replace(/^```(?:json)?\s*/im, "").replace(/\s*```\s*$/im, "").trim();
      const arrMatch = text.match(/\[[\s\S]*\]/);
      if (!arrMatch) throw new Error("No JSON array found in response");
      const parsed = JSON.parse(arrMatch[0]);
      const res = Array.isArray(parsed) ? parsed : (parsed.items || parsed.results || Object.values(parsed));
      if (!Array.isArray(res)) throw new Error("Parsed value is not an array");
      // Validate every matched code against the loaded masters before returning
      return res.map((r: any) => validateAndGuard(r));
    }

    // Run all provider sequences in parallel; on failure auto-reroute to next available provider
    await Promise.all(providers.map(async (provider) => {
      const queue = byProvider.get(provider.name)!;
      for (const { rows, origIndices, batchNum: bn } of queue) {
        log(`[BATCH ${bn}/${totalBatches}] ${provider.name} · ${rows.length} rows...`, "batch");

        // Try assigned provider first, then fall back to others automatically
        const fallbackOrder = [provider, ...providers.filter(p => p.name !== provider.name)];
        let res: any[] | null = null;

        for (const tryProv of fallbackOrder) {
          try {
            if (tryProv.name !== provider.name) {
              log(`[BATCH ${bn}] ↩️ Rerouting to ${tryProv.name}...`, "info");
            }
            res = await callAndParse(tryProv, rows);
            const label = tryProv.name !== provider.name ? `${tryProv.name} (fallback)` : tryProv.name;
            log(`[BATCH ${bn}] ✅ ${label} · Auto:${res.filter((r:any)=>r.tier==="auto").length} · Staging:${res.filter((r:any)=>r.tier==="staging").length} · New:${res.filter((r:any)=>r.tier==="new").length}`, "batch");
            break;
          } catch(err: any) {
            log(`[BATCH ${bn}] ❌ ${tryProv.name}: ${err.message.slice(0, 120)}`, "error");
          }
        }

        if (res) {
          res.forEach((r: any, i: number) => {
            allResults[origIndices[i]] = { ...r, _status: r.tier==="auto"?"approved":"pending", _editedBy: false };
          });
          doneCount += rows.length;
          setProgress({ done: doneCount, total: norm.length });
          setResults([...allResults.filter(Boolean)]);
        }
      }
    }));

    let all = allResults.filter(Boolean);

    const dropped = norm.length - all.length;
    if (dropped > 0) log(`⚠️ ${dropped} row(s) were not matched (their batch failed) — results below exclude them`, "error");
    if (!all.length) { log("❌ All batches failed — check Activity Log","error"); setStatus("error"); return; }

    log("🔎 [M4-DNA] Resolving new code subsection placements...","module");
    const existingCodeSet = new Set<string>(Array.from(validCodeMap.keys()));
    all = await resolveNewCodes(all,dnas,log,apiKey,groqKey,existingCodeSet);
    setResults([...all]);

    setStatus("done"); setTab("overview");
    log("✅ [M4-COMPLETE] Auto:"+all.filter((r: any)=>r.tier==="auto").length+" · Staging:"+all.filter((r: any)=>r.tier==="staging").length+" · New:"+all.filter((r: any)=>r.tier==="new").length,"success");

    // KG cross-validation — background annotation only, does not block results
    if (kgEnabled && all.length) {
      setKgProgress(0);
      log("🔁 [KG] Annotating in background (training only)...","module");
      const validated = [...all];
      for (let i=0;i<validated.length;i++) {
        const r = validated[i];
        const v = await kgValidate(r.akaName,r.edenCode);
        validated[i] = {...r,kgValidated:v?v.match:null,kgCode:v?.kgCode};
        setKgProgress(Math.round(((i+1)/validated.length)*100));
        if (i % 5 === 0) setResults([...validated]);
      }
      setResults([...validated]);
      log("✅ [KG] Annotation done — "+validated.filter((r: any)=>r.kgValidated===true).length+" matched · "+validated.filter((r: any)=>r.kgValidated===false).length+" flagged","success");
    }
  }

  function approveRow(row: any) {
    setResults(p=>p.map(r=>r===row?{...r,_status:"approved"}:r));
    if (row.isProposed && row.edenCategory && masterDNAs[row.edenCategory]) {
      setMasterDNAs((p: any)=>({...p,[row.edenCategory]:{...p[row.edenCategory],allCodes:[...(p[row.edenCategory].allCodes||[]),row.edenCode]}}));
    }
    log("✅ Approved: "+row.edenCode+" — "+row.edenName,"success");
  }

  function rejectRow(row: any) { setResults(p=>p.map(r=>r===row?{...r,_status:"rejected"}:r)); log("❌ Rejected: "+row.akaName,"warn"); }
  function editRow(row: any, edited: any) { setResults(p=>p.map(r=>r===row?{...r,...edited,_status:"approved",_editedBy:true}:r)); log("✏️ Edited & approved: "+edited.edenCode+" — "+edited.edenName,"success"); }
  function approveAll() { setResults(p=>p.map(r=>r._status==="pending"?{...r,_status:"approved"}:r)); log("✅ Bulk approved all pending","success"); }

  function exportResults() {
    const src = hospitalName||"Source";
    exportExcel(results.map(r=>({
      ["Hospital Code"]:r.akaCode,["Hospital Name"]:r.akaName,["Hospital Category"]:r.akaCategory,
      "Eden Care Code":r.edenCode,"Eden Care Name":r.edenName,"Eden Care Category":r.edenCategory,
      "Confidence %":r.confidence,"Tier":r.tier,"Status":r._status,"Subsection":r.subsectionName||"",
      "KG Validated":r.kgValidated===true?"✓ Match":r.kgValidated===false?"✗ Mismatch":"—","KG Code":r.kgCode||"",
      "Reason":r.reason,"Bundled Flag":r.bundledFlag||"","Description":r.description,
    })),"M4_"+src.replace(/\s/g,"_")+"_Mapped_Results.xlsx");
  }

  function exportApproved() {
    const src = hospitalName||"Source";
    exportExcel(approved.map(r=>({
      "Eden Care Code":r.edenCode.replace("Proposed: ",""),"Eden Care Name":r.edenName,
      "Eden Care Category":r.edenCategory,"Subsection":r.subsectionName||"","Description":r.description,
      "Hospital Code":r.akaCode,"Hospital Name":r.akaName,"Is New Code":r.isProposed?"Yes":"No",
    })),"M4_"+src.replace(/\s/g,"_")+"_Approved_Codes.xlsx");
  }

  function exportMasterUpdate() {
    const allMasterRows = (Object.values(masterCatalogs) as any[][]).flat();
    const { updatedRows, mappingRows } = buildMasterUpdateRows(results, allMasterRows);
    if (!updatedRows.length && !mappingRows.length) { alert("No approved new codes to export."); return; }
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(updatedRows), "Updated Master");
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(mappingRows), "Hospital Mapping");
    XLSX.writeFile(wb, "Master_Updated_" + new Date().toISOString().slice(0,10) + ".xlsx");
    log("📥 Master updated with approved codes + hospital mapping exported","success");
  }

  function exportUpdatedMaster(cat: string) {
    const base = masterCatalogs[cat]||[];
    const dna = masterDNAs[cat];
    const newItems = approved.filter(r=>r.isProposed&&r.edenCategory===cat);
    const exportRows = buildExportWithPositionalInsert(base,newItems,cat,dna);
    const audit = auditExportSafety(base,exportRows);
    if (!audit.safe) { log("🛑 BLOCKED export of "+cat+": "+audit.deleted+" deleted rows detected","error"); alert("⛔ Export blocked!\n\nThe system detected "+audit.deleted+" deleted row(s) in the output for \""+cat+"\"."); return; }
    exportExcel(exportRows,"Master_"+cat.replace(/\s/g,"_")+"_Updated.xlsx");
    log("📦 Exported "+cat+" — +"+audit.added+" new codes added (append-only ✅)","success");
  }

  const pct = progress.total ? Math.round(progress.done/progress.total*100) : 0;
  const isRunning = status==="running";
  const anyLoading = Object.values(masterStates).some((s: any)=>s.status==="loading")||akaState.status==="loading";

  return (
    <div style={{fontFamily:"system-ui,sans-serif",maxWidth:1200,margin:"0 auto",padding:24,background:"#f1f5f9",minHeight:"100vh"}}>

      <div style={{background:"linear-gradient(135deg,#1e3a5f,#7c3aed)",borderRadius:14,padding:"18px 24px",marginBottom:24,color:"#fff"}}>
        <div style={{fontSize:20,fontWeight:700}}>⚖️ M4 — Confidence Threshold & Coding DNA Engine</div>
        <div style={{fontSize:12,opacity:.8,marginTop:3}}>
          {hospitalName && <span style={{background:"rgba(255,255,255,.15)",borderRadius:5,padding:"1px 8px",marginRight:8}}>🏥 {hospitalName}</span>}
          Auto ≥{THRESHOLD.AUTO}% · Staging {THRESHOLD.STAGING}–{THRESHOLD.AUTO-1}% · New &lt;{THRESHOLD.STAGING}% · DNA Engine · KG Validation
        </div>
      </div>

      <div style={{display:"flex",gap:10,marginBottom:20,flexWrap:"wrap"}}>
        {[
          {tier:"auto",   label:"≥85% — Auto-Mapped",  desc:"Committed. No review needed.",        bg:"#f0fdf4",border:"#86efac",c:"#16a34a",icon:"✅"},
          {tier:"staging",label:"60–84% — Staging",    desc:"Human review before commit.",          bg:"#fffbeb",border:"#fcd34d",c:"#b45309",icon:"⏳"},
          {tier:"new",    label:"<60% — New Code",     desc:"Classified by DNA engine → proposed.", bg:"#fef2f2",border:"#fca5a5",c:"#dc2626",icon:"🆕"},
        ].map(t=>(
          <div key={t.tier} style={{flex:1,minWidth:180,background:t.bg,border:"2px solid "+t.border,borderRadius:12,padding:"12px 16px"}}>
            <div style={{fontSize:18,marginBottom:4}}>{t.icon}</div>
            <div style={{fontWeight:700,color:t.c,fontSize:13}}>{t.label}</div>
            <div style={{fontSize:11,color:"#475569",marginTop:3}}>{t.desc}</div>
          </div>
        ))}
      </div>

      {/* API Keys — shown in ALL modes while idle */}
      {status === "idle" && (
        <div style={{background:"#fff",borderRadius:12,padding:16,boxShadow:"0 1px 4px #0001",marginBottom:14}}>
          <div style={{fontWeight:700,fontSize:13,marginBottom:4,color:"#1e3a5f"}}>🔑 AI Matching Engine — API Keys</div>
          <div style={{fontSize:11,color:"#64748b",marginBottom:12}}>
            Use <strong>Gemini</strong> (recommended — batch 20, 1,500 req/day free) or <strong>Groq</strong> (fallback — batch 5, 14,400 req/day free). Gemini is used first if both keys are provided.
          </div>

          {/* Gemini Key */}
          <div style={{marginBottom:10}}>
            <div style={{fontSize:12,fontWeight:600,color:"#1e3a5f",marginBottom:5}}>
              ✨ Gemini 2.0 Flash <span style={{fontWeight:400,color:"#64748b"}}>(primary · batch 20 · 1,500 req/day)</span>
              {apiKey.trim() && <span style={{marginLeft:8,color:"#16a34a",fontSize:11}}>✅ set</span>}
            </div>
            <div style={{position:"relative"}}>
              <input
                type={showKey?"text":"password"}
                value={apiKey}
                onChange={e=>setApiKey(e.target.value)}
                placeholder="AIza..."
                style={{width:"100%",padding:"9px 40px 9px 12px",borderRadius:8,border:"1px solid "+(apiKey.trim()?"#86efac":"#e2e8f0"),fontSize:13,outline:"none",boxSizing:"border-box",fontFamily:"monospace"}}
              />
              <button type="button" onClick={()=>setShowKey(p=>!p)} tabIndex={-1}
                style={{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",fontSize:14,color:"#94a3b8"}}>
                {showKey?"🙈":"👁️"}
              </button>
            </div>
          </div>

          {/* OpenRouter Key */}
          <div>
            <div style={{fontSize:12,fontWeight:600,color:"#0369a1",marginBottom:5}}>
              🔀 OpenRouter <span style={{fontWeight:400,color:"#64748b"}}>(fallback · batch 10 · free Gemma/Llama 4 models)</span>
              {orKey.trim() && <span style={{marginLeft:8,color:"#16a34a",fontSize:11}}>✅ set</span>}
            </div>
            <div style={{position:"relative"}}>
              <input
                type={showOrKey?"text":"password"}
                value={orKey}
                onChange={e=>setOrKey(e.target.value)}
                placeholder="sk-or-..."
                style={{width:"100%",padding:"9px 40px 9px 12px",borderRadius:8,border:"1px solid "+(orKey.trim()?"#7dd3fc":"#e2e8f0"),fontSize:13,outline:"none",boxSizing:"border-box",fontFamily:"monospace"}}
              />
              <button type="button" onClick={()=>setShowOrKey(p=>!p)} tabIndex={-1}
                style={{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",fontSize:14,color:"#94a3b8"}}>
                {showOrKey?"🙈":"👁️"}
              </button>
            </div>
          </div>

          {/* Groq Key */}
          <div>
            <div style={{fontSize:12,fontWeight:600,color:"#6d28d9",marginBottom:5}}>
              ⚡ Groq Llama 3.3 70B <span style={{fontWeight:400,color:"#64748b"}}>(backup · batch 5 · 14,400 req/day)</span>
              {groqKey.trim() && <span style={{marginLeft:8,color:"#16a34a",fontSize:11}}>✅ set</span>}
            </div>
            <div style={{position:"relative"}}>
              <input
                type={showGroqKey?"text":"password"}
                value={groqKey}
                onChange={e=>setGroqKey(e.target.value)}
                placeholder="gsk_..."
                style={{width:"100%",padding:"9px 40px 9px 12px",borderRadius:8,border:"1px solid "+(groqKey.trim()?"#c4b5fd":"#e2e8f0"),fontSize:13,outline:"none",boxSizing:"border-box",fontFamily:"monospace"}}
              />
              <button type="button" onClick={()=>setShowGroqKey(p=>!p)} tabIndex={-1}
                style={{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",fontSize:14,color:"#94a3b8"}}>
                {showGroqKey?"🙈":"👁️"}
              </button>
            </div>
          </div>

          {!apiKey.trim() && !groqKey.trim() && !orKey.trim() && (
            <div style={{fontSize:11,color:"#f59e0b",marginTop:8}}>⚠️ Enter at least one key above — or use the 🔑 API Keys panel at the top of the page</div>
          )}
          {(apiKey.trim() || orKey.trim() || groqKey.trim()) && (
            <div style={{fontSize:11,color:"#16a34a",marginTop:8}}>
              ✅ {[apiKey.trim()&&"Gemini (batch 20)", orKey.trim()&&"OpenRouter (batch 10)", groqKey.trim()&&"Groq (batch 5)"].filter(Boolean).join(" + ")} — batches run in parallel for maximum speed
            </div>
          )}
        </div>
      )}

      {/* HOME */}
      {mode==="home" && status==="idle" && (
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          <div style={{background:"#fff",borderRadius:12,padding:20,boxShadow:"0 1px 4px #0001"}}>
            <div style={{fontWeight:700,fontSize:14,marginBottom:4,color:"#1e3a5f"}}>🏥 Source Hospital</div>
            <div style={{fontSize:12,color:"#64748b",marginBottom:10}}>Enter the hospital name. This labels all exports and informs the matching engine.</div>
            <div style={{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap"}}>
              <input value={hospitalName} onChange={e=>{setHospitalName(e.target.value);setHospitalConfirmed(false);}} placeholder="e.g. Aga Khan Hospital, Nairobi Hospital..." style={{flex:1,minWidth:240,padding:"10px 14px",borderRadius:8,border:"1px solid "+(hospitalConfirmed?"#86efac":"#e2e8f0"),fontSize:13,outline:"none"}}/>
              <button onClick={()=>{if(hospitalName.trim())setHospitalConfirmed(true);}} disabled={!hospitalName.trim()} style={{padding:"10px 18px",borderRadius:8,border:"none",background:hospitalName.trim()?"#1e3a5f":"#e2e8f0",color:hospitalName.trim()?"#fff":"#94a3b8",fontWeight:700,cursor:hospitalName.trim()?"pointer":"default",fontSize:13}}>
                {hospitalConfirmed?"✅ Confirmed":"Confirm"}
              </button>
            </div>
            {hospitalConfirmed && <div style={{fontSize:11,color:"#16a34a",marginTop:6}}>✅ Hospital set: <strong>{hospitalName}</strong></div>}
          </div>
          <div style={{background:"#fff",borderRadius:12,padding:20,boxShadow:"0 1px 4px #0001"}}>
            <div style={{fontWeight:700,fontSize:14,marginBottom:12,color:"#1e3a5f"}}>KG Cross-Validation</div>
            <label style={{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#1e3a5f",cursor:"pointer"}}>
              <input type="checkbox" checked={kgEnabled} onChange={e=>setKgEnabled(e.target.checked)} style={{width:16,height:16}}/>
              🔁 Cross-validate results with Eden KG (medical-kg.edeneasyclaim.com) after matching
            </label>
            <div style={{fontSize:11,color:"#64748b",marginTop:6}}>Adds ✓/✗ KG flags to each row. Matching KG codes boost confidence badge by +5 (visual only).</div>
          </div>
          <div style={{background:"#fff",borderRadius:12,padding:20,boxShadow:"0 1px 4px #0001"}}>
            <div style={{fontWeight:700,fontSize:14,marginBottom:16,color:"#1e3a5f"}}>Choose how to proceed</div>
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              <button onClick={runWithTestData} style={{flex:1,minWidth:200,padding:16,borderRadius:12,border:"2px solid #7c3aed",background:"#faf5ff",cursor:"pointer",textAlign:"left"}}>
                <div style={{fontSize:20,marginBottom:4}}>🧪</div>
                <div style={{fontWeight:700,color:"#7c3aed"}}>Test Mode</div>
                <div style={{fontSize:12,color:"#64748b",marginTop:3}}>Built-in test data. Demonstrates all tiers + DNA engine.</div>
              </button>
              <button onClick={()=>setMode("real")} style={{flex:1,minWidth:200,padding:16,borderRadius:12,border:"2px solid #2563eb",background:"#eff6ff",cursor:"pointer",textAlign:"left"}}>
                <div style={{fontSize:20,marginBottom:4}}>📂</div>
                <div style={{fontWeight:700,color:"#2563eb"}}>Upload Real Files</div>
                <div style={{fontSize:12,color:"#64748b",marginTop:3}}>Upload Eden Care master catalogs + {hospitalName||"hospital"} charge data.</div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* REAL FILE MODE */}
      {mode==="real" && status==="idle" && (
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          <div style={{background:"#fff",borderRadius:12,padding:18,boxShadow:"0 1px 4px #0001"}}>
            <div style={{fontWeight:700,fontSize:14,marginBottom:4,color:"#1e3a5f"}}>📋 Eden Care Master Catalogs</div>
            <div style={{fontSize:12,color:"#64748b",marginBottom:12}}>Upload each catalog — Coding DNA extracted automatically.</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:10}}>
              {EDEN_CATS.map(cat=>(
                <div key={cat} style={{display:"flex",flexDirection:"column",gap:4}}>
                  <UploadZone label={cat} onFile={(f: File)=>loadMaster(cat,f)} onRemove={masterCatalogs[cat]?()=>removeMaster(cat):null} loaded={!!masterCatalogs[cat]} count={masterCatalogs[cat]?.length||0} fileName={masterFileNames[cat]||""} color="#7c3aed" bg="#faf5ff"/>
                  {masterCatalogs[cat] && <button onClick={()=>downloadMaster(cat)} style={{border:"none",borderRadius:6,background:"#eff6ff",color:"#2563eb",fontWeight:600,fontSize:9,padding:"4px 6px",cursor:"pointer"}}>⬇️ Download</button>}
                  {masterStates[cat] && <div style={{fontSize:9,color:masterStates[cat].status==="error"?"#dc2626":"#7c3aed",background:"#faf5ff",borderRadius:5,padding:"2px 6px",textAlign:"center"}}>{masterStates[cat].msg}</div>}
                  {masterDNAs[cat] && <DNABadge dna={masterDNAs[cat]}/>}
                </div>
              ))}
            </div>
          </div>
          <div style={{background:"#fff",borderRadius:12,padding:18,boxShadow:"0 1px 4px #0001"}}>
            <div style={{fontWeight:700,fontSize:14,marginBottom:12,color:"#1e3a5f"}}>🏥 {hospitalName||"Source Hospital"} Charge Data</div>
            {akaRows.length > 0 && (
              <div style={{background:"#f0fdf4",borderRadius:8,padding:"8px 12px",fontSize:12,color:"#16a34a",marginBottom:10}}>✅ {akaRows.length} rows loaded from {akaFileName}</div>
            )}
            <div style={{display:"flex",flexDirection:"column",gap:6}}>
              <UploadZone label={hospitalName?(hospitalName+" Procedures"):"Source Hospital Procedures"} onFile={loadAka} onRemove={akaRows.length>0?removeAka:null} loaded={akaRows.length>0} count={akaRows.length} fileName={akaFileName} color="#059669" bg="#f0fdf4"/>
              {akaRows.length>0 && <button onClick={()=>exportExcel(akaRows,"AKA_Data.xlsx")} style={{border:"none",borderRadius:6,background:"#f0fdf4",color:"#059669",fontWeight:600,fontSize:9,padding:"4px 6px",cursor:"pointer"}}>⬇️ Download</button>}
            </div>
            {akaCols && <div style={{marginTop:8,fontSize:11,color:"#64748b"}}>Cols → Code: <code>{akaCols.code}</code> | Name: <code>{akaCols.name}</code> | Cat: <code>{akaCols.category}</code></div>}
          </div>
          <div style={{display:"flex",gap:10}}>
            <button onClick={runWithRealData} disabled={anyLoading||isRunning} style={{flex:1,padding:14,borderRadius:10,border:"none",cursor:anyLoading?"not-allowed":"pointer",background:anyLoading?"#94a3b8":"linear-gradient(135deg,#1e3a5f,#7c3aed)",color:"#fff",fontWeight:700,fontSize:15}}>
              {anyLoading?"Analyzing files...":"🚀 Run Matching Engine"}
            </button>
            <button onClick={()=>setMode("home")} style={{padding:"14px 20px",borderRadius:10,border:"none",background:"#e2e8f0",color:"#475569",fontWeight:600,cursor:"pointer"}}>← Back</button>
          </div>
        </div>
      )}

      {/* RUNNING */}
      {isRunning && (
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          <div style={{background:"#fff",borderRadius:12,padding:24,textAlign:"center",boxShadow:"0 1px 4px #0001"}}>
            <div style={{fontSize:36,marginBottom:8}}>⚙️</div>
            <div style={{fontWeight:700,color:"#7c3aed",fontSize:15}}>Running Matching + DNA Classification Engine</div>
            <div style={{marginTop:12,background:"#e2e8f0",borderRadius:99,height:10,maxWidth:440,margin:"12px auto 0"}}>
              <div style={{height:10,borderRadius:99,background:"linear-gradient(90deg,#7c3aed,#2563eb)",width:pct+"%",transition:"width .4s"}}/>
            </div>
            <div style={{fontSize:12,color:"#64748b",marginTop:6}}>{progress.done} / {progress.total} rows · {pct}%</div>
            {kgEnabled && kgProgress > 0 && (
              <div style={{marginTop:8,fontSize:12,color:"#7c3aed"}}>🔁 KG validation: {kgProgress}%</div>
            )}
          </div>
          <LogPanel logs={logs} live={true}/>
        </div>
      )}

      {/* ERROR */}
      {status==="error" && (
        <div style={{background:"#fff",borderRadius:12,padding:32,boxShadow:"0 1px 4px #0001"}}>
          <div style={{fontSize:36,marginBottom:10,textAlign:"center"}}>❌</div>
          <div style={{fontWeight:700,color:"#dc2626",fontSize:15,textAlign:"center",marginBottom:8}}>Matching Engine Failed</div>
          <LogPanel logs={logs} live={false}/>
          <div style={{marginTop:14,textAlign:"center"}}>
            <button onClick={()=>{setStatus("idle");setResults([]);setLogs([]);setMode("home");setTab("overview");setProgress({done:0,total:0});}} style={{padding:"10px 24px",borderRadius:8,border:"none",background:"#e2e8f0",color:"#475569",fontWeight:600,cursor:"pointer",fontSize:13}}>← Back to Start</button>
          </div>
        </div>
      )}

      {/* RESULTS */}
      {status==="done" && results.length>0 && (
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            {[
              {l:"Total",v:results.length,c:"#1e3a5f"},{l:"✅ Auto",v:auto.length,c:"#16a34a"},
              {l:"⏳ Staging",v:staging.length,c:"#b45309"},{l:"🆕 New",v:newCodes.length,c:"#dc2626"},
              {l:"✓ Approved",v:approved.length,c:"#16a34a"},{l:"⏳ Pending",v:pending.length,c:"#b45309"},
              {l:"🟢 KG Match",v:results.filter(r=>r.kgValidated===true).length,c:"#16a34a"},
              {l:"⚠️ KG Flag",v:results.filter(r=>r.kgValidated===false).length,c:"#dc2626"},
            ].map(s=>(
              <div key={s.l} style={{background:"#fff",borderRadius:10,padding:"10px 16px",flex:"1 1 80px",boxShadow:"0 1px 4px #0001"}}>
                <div style={{fontSize:20,fontWeight:700,color:s.c}}>{s.v}</div>
                <div style={{fontSize:11,color:"#64748b"}}>{s.l}</div>
              </div>
            ))}
          </div>

          {pending.length>0 && (
            <div style={{background:"#fffbeb",border:"2px solid #fcd34d",borderRadius:12,padding:14,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:10}}>
              <div>
                <div style={{fontWeight:700,color:"#b45309",fontSize:14}}>⏳ {pending.length} items awaiting review</div>
                <div style={{fontSize:12,color:"#64748b",marginTop:2}}>{staging.filter(r=>r._status==="pending").length} staging · {newCodes.filter(r=>r._status==="pending").length} new code proposals</div>
              </div>
              <div style={{display:"flex",gap:8}}>
                <button onClick={()=>setTab("staging")} style={{padding:"7px 16px",borderRadius:8,border:"none",background:"#b45309",color:"#fff",fontWeight:600,cursor:"pointer",fontSize:12}}>Review Queue</button>
                <button onClick={approveAll} style={{padding:"7px 16px",borderRadius:8,border:"none",background:"#e2e8f0",color:"#475569",fontWeight:600,cursor:"pointer",fontSize:12}}>Approve All</button>
              </div>
            </div>
          )}

          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            {[["overview","📊 Overview"],["auto","✅ Auto ("+auto.length+")"],["staging","⏳ Staging ("+staging.length+")"],["new","🆕 New ("+newCodes.length+")"],["master","📦 Master Export"],["dna","🧬 DNA Map"],["logs","🖥️ Logs"+(logs.filter(l=>l.type==="error").length>0?" ⚠️"+logs.filter(l=>l.type==="error").length:"")]].map(([t,l])=>(
              <button key={t} onClick={()=>setTab(t)} style={{padding:"8px 14px",borderRadius:8,border:"none",cursor:"pointer",fontWeight:600,fontSize:12,background:tab===t?"#7c3aed":"#e2e8f0",color:tab===t?"#fff":"#475569"}}>{l}</button>
            ))}
          </div>

          {/* OVERVIEW */}
          {tab==="overview" && (
            <ErrorBoundary>
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
                {[
                  {label:"Auto-Mapped",count:auto.length,pct:Math.round(auto.length/results.length*100),color:"#16a34a",bg:"#f0fdf4",desc:"Committed directly to master"},
                  {label:"Staging Queue",count:staging.length,pct:Math.round(staging.length/results.length*100),color:"#b45309",bg:"#fffbeb",desc:"Awaiting human review"},
                  {label:"New Code Proposals",count:newCodes.length,pct:Math.round(newCodes.length/results.length*100),color:"#dc2626",bg:"#fef2f2",desc:"DNA-classified, new code proposed"},
                ].map(s=>(
                  <div key={s.label} style={{flex:1,minWidth:160,background:s.bg,borderRadius:12,padding:16}}>
                    <div style={{fontSize:28,fontWeight:800,color:s.color}}>{s.count}</div>
                    <div style={{fontWeight:700,color:s.color,fontSize:13}}>{s.label}</div>
                    <div style={{fontSize:11,color:"#64748b",marginTop:2}}>{s.pct}% · {s.desc}</div>
                    <div style={{marginTop:8,background:"rgba(0,0,0,.08)",borderRadius:99,height:6}}><div style={{height:6,borderRadius:99,background:s.color,width:s.pct+"%"}}/></div>
                  </div>
                ))}
              </div>
              <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                <button onClick={exportResults} style={{padding:"9px 18px",borderRadius:8,border:"none",background:"#475569",color:"#fff",fontWeight:600,cursor:"pointer",fontSize:13}}>⬇️ Export All Results</button>
                <button onClick={exportApproved} style={{padding:"9px 18px",borderRadius:8,border:"none",background:"#16a34a",color:"#fff",fontWeight:600,cursor:"pointer",fontSize:13}}>⬇️ Approved Codes Only</button>
                {approved.filter(r=>r.isProposed).length>0 && (
                  <button onClick={exportMasterUpdate} style={{padding:"9px 18px",borderRadius:8,border:"none",background:"#7c3aed",color:"#fff",fontWeight:600,cursor:"pointer",fontSize:13}}>📥 Update Master</button>
                )}
              </div>
            </div>
            </ErrorBoundary>
          )}

          {/* AUTO TAB */}
          {tab==="auto" && (
            <ErrorBoundary>
            <div style={{background:"#fff",borderRadius:12,boxShadow:"0 1px 4px #0001",overflowX:"auto"}}>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
                <thead><tr style={{background:"#064e3b",color:"#fff"}}>{["Hospital Code","Hospital Name","Eden Code","Eden Name","Category","Subsection","Confidence","KG","Reason"].map(h=><th key={h} style={{padding:"9px 10px",textAlign:"left",whiteSpace:"nowrap"}}>{h}</th>)}</tr></thead>
                <tbody>
                  {auto.map((r,i)=>(
                    <tr key={i} style={{background:i%2===0?"#fff":"#f8fafc",borderBottom:"1px solid #f1f5f9"}}>
                      <td style={{padding:"7px 10px",fontFamily:"monospace",fontSize:11,color:"#7c3aed"}}>{r.akaCode}</td>
                      <td style={{padding:"7px 10px",fontWeight:500}}>{r.akaName}</td>
                      <td style={{padding:"7px 10px",fontFamily:"monospace",color:"#059669"}}>{r.edenCode}</td>
                      <td style={{padding:"7px 10px"}}>{r.edenName}</td>
                      <td style={{padding:"7px 10px",fontSize:11,color:"#64748b"}}>{r.edenCategory}</td>
                      <td style={{padding:"7px 10px",fontSize:11,color:"#7c3aed"}}>{r.subsectionName||"—"}</td>
                      <td style={{padding:"7px 10px"}}><span style={{padding:"2px 8px",borderRadius:99,fontSize:11,fontWeight:700,background:"#dcfce7",color:"#16a34a"}}>{r.confidence}%</span></td>
                      <td style={{padding:"7px 10px",fontSize:11}}>{r.kgValidated===true?"🟢":r.kgValidated===false?"⚠️":"—"}</td>
                      <td style={{padding:"7px 10px",fontSize:11,color:"#64748b",maxWidth:220,wordBreak:"break-word"}}>{r.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </ErrorBoundary>
          )}

          {/* STAGING + NEW */}
          {(tab==="staging"||tab==="new") && (
            <ErrorBoundary>
            <div>
              <div style={{fontSize:12,color:"#64748b",marginBottom:12}}>{tab==="staging"?"Items matched 60–84% — review before approving.":"New code proposals — DNA engine assigned subsection and code. Review before committing."}</div>
              {(tab==="staging"?staging:newCodes).length===0
                ? <div style={{background:"#fff",borderRadius:12,padding:32,textAlign:"center",color:"#94a3b8"}}>No items in this tier.</div>
                : (tab==="staging"?staging:newCodes).map((row,i)=>(
                    <ErrorBoundary key={i}><CompareCard row={row} onApprove={approveRow} onReject={rejectRow} onEdit={editRow} hospitalName={hospitalName}/></ErrorBoundary>
                  ))
              }
            </div>
            </ErrorBoundary>
          )}

          {/* DNA MAP */}
          {tab==="dna" && (
            <ErrorBoundary>
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              <div style={{fontWeight:700,fontSize:14,color:"#1e3a5f"}}>🧬 Coding DNA Map — Subsection Analysis</div>
              {Object.entries(masterDNAs).map(([cat,dna]: any)=>dna&&(
                <div key={cat} style={{background:"#fff",borderRadius:12,padding:16,boxShadow:"0 1px 4px #0001"}}>
                  <div style={{fontWeight:700,fontSize:13,color:"#1e3a5f",marginBottom:4}}>{cat}</div>
                  <div style={{fontSize:11,color:"#7c3aed",marginBottom:8}}>Format: {dna.format} · {(dna.allCodes||[]).length} codes indexed</div>
                  <div style={{fontSize:11,color:"#64748b",marginBottom:8,fontStyle:"italic"}}>{dna.description}</div>
                  {Object.entries(dna.subsections||{}).length>0&&(
                    <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
                      <thead><tr style={{background:"#f8fafc"}}>{["Key","Name","Codes","Last Code"].map(h=><th key={h} style={{padding:"5px 8px",textAlign:"left",color:"#475569"}}>{h}</th>)}</tr></thead>
                      <tbody>{Object.entries(dna.subsections).map(([key,sub]: any)=>(
                        <tr key={key} style={{borderTop:"1px solid #f1f5f9"}}>
                          <td style={{padding:"5px 8px",fontFamily:"monospace",color:"#7c3aed"}}>{key}</td>
                          <td style={{padding:"5px 8px",fontWeight:500}}>{sub.name}</td>
                          <td style={{padding:"5px 8px",color:"#64748b"}}>{sub.codes.length}</td>
                          <td style={{padding:"5px 8px",fontFamily:"monospace",color:"#059669"}}>{sub.lastCode}</td>
                        </tr>
                      ))}</tbody>
                    </table>
                  )}
                </div>
              ))}
            </div>
            </ErrorBoundary>
          )}

          {/* MASTER EXPORT */}
          {tab==="master" && (
            <ErrorBoundary>
            <div style={{background:"#fff",borderRadius:12,padding:18,boxShadow:"0 1px 4px #0001"}}>
              <div style={{fontWeight:700,fontSize:14,marginBottom:4,color:"#1e3a5f"}}>📦 Export Updated Master Lists</div>
              <div style={{fontSize:12,color:"#64748b",marginBottom:16}}>Approved new codes are inserted at the correct position within each subsection.</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:10,marginBottom:16}}>
                {[...new Set(approved.filter(r=>r.isProposed).map(r=>r.edenCategory))].map(cat=>{
                  const n=approved.filter(r=>r.isProposed&&r.edenCategory===cat).length;
                  return <button key={cat as string} onClick={()=>exportUpdatedMaster(cat as string)} style={{padding:"10px 16px",borderRadius:10,border:"none",background:"#2563eb",color:"#fff",cursor:"pointer",fontSize:12,fontWeight:600}}>⬇️ {cat as string}<br/><span style={{fontSize:10,opacity:.8}}>+{n} new codes (positional)</span></button>;
                })}
                {approved.filter(r=>r.isProposed).length===0&&<div style={{fontSize:13,color:"#94a3b8"}}>No new codes approved yet.</div>}
              </div>
              <div style={{marginTop:12}}>
                <button onClick={exportMasterUpdate} style={{padding:"10px 18px",borderRadius:8,border:"none",background:"#7c3aed",color:"#fff",fontWeight:600,cursor:"pointer",fontSize:13}}>📥 Export Master + Hospital Mapping (2-sheet XLSX)</button>
              </div>
              {masterVersion.length>0&&(
                <div style={{marginTop:16}}>
                  <div style={{fontWeight:700,fontSize:13,marginBottom:8,color:"#1e3a5f"}}>🕒 Master List Version History</div>
                  <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
                    <thead><tr style={{background:"#f8fafc"}}>{["Category","File","Rows","Format","Loaded At"].map(h=><th key={h} style={{padding:"7px 10px",textAlign:"left",color:"#475569"}}>{h}</th>)}</tr></thead>
                    <tbody>{masterVersion.map((v,i)=>(
                      <tr key={i} style={{borderTop:"1px solid #f1f5f9"}}>
                        <td style={{padding:"6px 10px",fontWeight:600}}>{v.cat}</td>
                        <td style={{padding:"6px 10px",color:"#64748b"}}>{v.file}</td>
                        <td style={{padding:"6px 10px"}}>{v.count}</td>
                        <td style={{padding:"6px 10px",color:"#7c3aed",fontSize:11}}>{v.format}</td>
                        <td style={{padding:"6px 10px",color:"#94a3b8",fontFamily:"monospace",fontSize:11}}>{new Date(v.timestamp).toLocaleString()}</td>
                      </tr>
                    ))}</tbody>
                  </table>
                </div>
              )}
            </div>
            </ErrorBoundary>
          )}

          {tab==="logs" && <ErrorBoundary><LogPanel logs={logs} live={false}/></ErrorBoundary>}

          <div style={{display:"flex",gap:10,flexWrap:"wrap",alignItems:"center"}}>
            <button onClick={()=>{setStatus("idle");setResults([]);setLogs([]);setMode("home");setTab("overview");setProgress({done:0,total:0});setKgProgress(0);}} style={{padding:"10px 20px",borderRadius:8,border:"none",background:"#e2e8f0",color:"#475569",fontWeight:600,cursor:"pointer",fontSize:13}}>🔄 Run Again</button>
            {onComplete
              ? <button onClick={()=>onComplete({results,hospitalName,masterCatalogs,masterDNAs})} style={{padding:"10px 20px",borderRadius:8,border:"none",background:"#16a34a",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:13}}>✅ Pass to M6 — Delta Report →</button>
              : <div style={{padding:"10px 20px",borderRadius:8,background:"#dcfce7",color:"#16a34a",fontWeight:600,fontSize:13}}>✅ Ready for M5 — Definition Engine</div>
            }
          </div>
        </div>
      )}
    </div>
  );
}
