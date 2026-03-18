/**
 * Dynamic user store — super admin can add/remove regular users.
 * Hardcoded super admin is always present and cannot be removed.
 */
import { USERS, SUPER_ADMIN_USERNAME, type UserRecord, type UserRole } from "../auth.config";

const USER_STORE_KEY = "eden_users_v2";

function getStoredUsers(): UserRecord[] {
  try {
    const raw = localStorage.getItem(USER_STORE_KEY);
    return raw ? JSON.parse(atob(raw)) : [];
  } catch {
    return [];
  }
}

function saveStoredUsers(users: UserRecord[]): void {
  try {
    // Filter out any attempt to store the super admin in localStorage
    const filtered = users.filter(u => u.username.toLowerCase() !== SUPER_ADMIN_USERNAME.toLowerCase());
    localStorage.setItem(USER_STORE_KEY, btoa(JSON.stringify(filtered)));
  } catch { /* storage unavailable */ }
}

/** Returns the full user list: hardcoded admin + localStorage users */
export function getUsers(): UserRecord[] {
  return [...USERS, ...getStoredUsers()];
}

/** Find a user by username (case-insensitive) */
export function findUser(username: string): UserRecord | undefined {
  return getUsers().find(u => u.username.toLowerCase() === username.trim().toLowerCase());
}

/** Add a regular user. Throws if username already taken. */
export function addUser(username: string, passwordHash: string): void {
  const existing = getUsers();
  if (existing.some(u => u.username.toLowerCase() === username.trim().toLowerCase())) {
    throw new Error(`Username "${username}" is already taken.`);
  }
  const stored = getStoredUsers();
  stored.push({ username: username.trim(), passwordHash, role: "USER" });
  saveStoredUsers(stored);
}

/** Remove a user. Cannot remove the super admin. */
export function removeUser(username: string): void {
  if (username.toLowerCase() === SUPER_ADMIN_USERNAME.toLowerCase()) {
    throw new Error("Cannot remove the super admin.");
  }
  const stored = getStoredUsers().filter(
    u => u.username.toLowerCase() !== username.toLowerCase()
  );
  saveStoredUsers(stored);
}

/** Get the role of a user by username */
export function getUserRole(username: string): UserRole {
  const user = findUser(username);
  return user?.role ?? "USER";
}

/** SHA-256 via Web Crypto — reusable for admin panel */
export async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}
