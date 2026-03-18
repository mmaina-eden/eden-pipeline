/**
 * Persistent master catalog store — catalog rows survive page refresh.
 * Stored in localStorage as JSON under namespaced keys.
 * Upload once via M0 Pre-Scan; replace any time via the Edit button.
 */

const NS: Record<string, string> = {
  "Labs":                  "eden_master_labs",
  "Imaging":               "eden_master_imaging",
  "Procedures":            "eden_master_procedures",
  "Medical Devices":       "eden_master_medical_devices",
  "Molecules":             "eden_master_molecules",
  "Supplies & Consumables":"eden_master_supplies",
  "Billing":               "eden_master_billing",
};

function keyFor(cat: string): string {
  return NS[cat] ?? "eden_master_" + cat.toLowerCase().replace(/[\s&]+/g, "_");
}

export function getStoredMaster(cat: string): any[] {
  try {
    const raw = localStorage.getItem(keyFor(cat));
    return raw ? (JSON.parse(raw) as any[]) : [];
  } catch { return []; }
}

export function storeMaster(cat: string, rows: any[]): void {
  try {
    if (rows.length) localStorage.setItem(keyFor(cat), JSON.stringify(rows));
    else             localStorage.removeItem(keyFor(cat));
  } catch { /* quota exceeded — storage full */ }
}

export function removeMaster(cat: string): void {
  try { localStorage.removeItem(keyFor(cat)); } catch { /* ignore */ }
}

/** Returns all categories that have saved rows. */
export function getAllStoredMasters(): Record<string, any[]> {
  const out: Record<string, any[]> = {};
  Object.keys(NS).forEach(cat => {
    const rows = getStoredMaster(cat);
    if (rows.length) out[cat] = rows;
  });
  return out;
}

/** True if any master catalog is saved. */
export function hasStoredMasters(): boolean {
  return Object.keys(NS).some(cat => getStoredMaster(cat).length > 0);
}

/** How many rows are stored for a category (0 if none). */
export function storedMasterCount(cat: string): number {
  return getStoredMaster(cat).length;
}
