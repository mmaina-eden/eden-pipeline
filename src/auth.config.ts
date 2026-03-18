// Credentials stored as SHA-256 hashes — raw passcodes are never stored here.
export type UserRole = "SUPER_ADMIN" | "USER";

export interface UserRecord {
  username:     string;
  passwordHash: string;
  role:         UserRole;
}

export const SUPER_ADMIN_USERNAME = "Muthigani";

// Hardcoded super admin — never removable via UI
export const USERS: UserRecord[] = [
  {
    username:     "Muthigani",
    passwordHash: "c62b2152b8513d4c0c03ca8ba2716a45dc7e5227c1b051e50c765c8c97eddf25",
    role:         "SUPER_ADMIN",
  },
];

export const SESSION_KEY  = "eden_session_v2";
export const RATE_KEY     = "eden_login_attempts";
export const MAX_ATTEMPTS = 5;
export const LOCKOUT_MS   = 15 * 60 * 1000; // 15 minutes
