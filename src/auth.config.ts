// Credentials stored as SHA-256 hashes — raw passcodes are never stored here.
// To add a user: compute SHA-256 of their passcode and add an entry below.
export const USERS: { username: string; passwordHash: string }[] = [
  {
    username: "Muthigani",
    passwordHash: "c62b2152b8513d4c0c03ca8ba2716a45dc7e5227c1b051e50c765c8c97eddf25",
  },
];

export const SESSION_KEY = "eden_session_v1";
export const RATE_KEY    = "eden_login_attempts";
export const MAX_ATTEMPTS = 5;
export const LOCKOUT_MS   = 15 * 60 * 1000; // 15 minutes
