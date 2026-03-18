const LS_KEY = "audit_log_v1";
const MAX_ENTRIES = 500;

export type AuditEntry = {
  id: string;
  timestamp: string;
  module: string;
  action: string;
  fileName: string;
  outcome: "success" | "blocked" | "warning" | "error";
  itemCount: number;
  user: string;
};

export function useAuditLog(user = "system") {
  function writeEntry(entry: Omit<AuditEntry, "id" | "timestamp" | "user">) {
    try {
      const all: AuditEntry[] = JSON.parse(localStorage.getItem(LS_KEY) || "[]");
      const newEntry: AuditEntry = {
        ...entry,
        id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36),
        timestamp: new Date().toISOString(),
        user,
      };
      localStorage.setItem(LS_KEY, JSON.stringify([newEntry, ...all].slice(0, MAX_ENTRIES)));
    } catch { /* localStorage may be unavailable */ }
  }
  return { writeEntry };
}
