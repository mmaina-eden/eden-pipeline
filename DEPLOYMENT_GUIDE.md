# Eden Care Pipeline — Deployment Guide
> Complete step-by-step for GitHub Pages. No prior coding experience needed.

---

## Part 1 — Install the tools you need (one time only)

### Step 1 — Install Node.js
1. Go to: https://nodejs.org
2. Click the big green **LTS** button to download
3. Run the installer — click Next on every screen
4. When done, open **Command Prompt** (press Win+R, type `cmd`, press Enter)
5. Type: `node -v` and press Enter — you should see a version number like `v20.x.x`

### Step 2 — Install Git
1. Go to: https://git-scm.com/download/win
2. Download and run the installer — click Next on every screen (defaults are fine)
3. In Command Prompt, type: `git --version` — you should see a version number

### Step 3 — Create a GitHub account (if you don't have one)
1. Go to: https://github.com
2. Click **Sign up** and create a free account
3. Verify your email

---

## Part 2 — Set up the project

### Step 4 — Open the project folder in Command Prompt
In Command Prompt, type:
```
cd "C:\Users\ADMIN\OneDrive\Desktop\Claude\eden-pipeline"
```
Press Enter.

### Step 5 — Install project dependencies
Type this and press Enter:
```
npm install
```
Wait for it to finish (1–2 minutes). You'll see a progress bar.

### Step 6 — Test it locally first
Type this and press Enter:
```
npm run dev
```
Then open your browser and go to: **http://localhost:5173/eden-pipeline/**

You should see the Eden Care Pipeline login screen.
- Username: `Muthigani`
- Passcode: `#Just@EdEn!26/3`

Press Ctrl+C in Command Prompt to stop the local server when done testing.

---

## Part 3 — Create a GitHub repository

### Step 7 — Create a new repository on GitHub
1. Go to: https://github.com/new
2. Repository name: `eden-pipeline` (must match exactly)
3. Set to **Public** (required for free GitHub Pages)
4. Do NOT add README, .gitignore, or license (leave them unchecked)
5. Click **Create repository**

### Step 8 — Connect your project to GitHub
In Command Prompt (in the eden-pipeline folder), run these commands ONE AT A TIME:

```
git init
git add .
git commit -m "Initial commit — Eden Care Pipeline"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/eden-pipeline.git
git push -u origin main
```

**Replace** `YOUR_GITHUB_USERNAME` with your actual GitHub username.

When asked for credentials, use your GitHub username and password.
(If it asks for a token instead of password, see Step 9 below.)

### Step 9 — GitHub token (if asked for a password that doesn't work)
1. Go to: https://github.com/settings/tokens
2. Click **Generate new token (classic)**
3. Give it a name like "eden-pipeline"
4. Check the **repo** checkbox
5. Click **Generate token** at the bottom
6. Copy the token (starts with `ghp_...`)
7. Use this token as your password when git asks

---

## Part 4 — Deploy to GitHub Pages

### Step 10 — Deploy
In Command Prompt (still in the eden-pipeline folder):
```
npm run deploy
```
This will:
1. Build the project (creates the `dist` folder)
2. Push the built files to a `gh-pages` branch on GitHub

Wait for the message: **Published**

### Step 11 — Enable GitHub Pages
1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/eden-pipeline`
2. Click **Settings** (top right of the repo)
3. Click **Pages** (in the left sidebar)
4. Under **Source**, select: Branch = `gh-pages`, Folder = `/ (root)`
5. Click **Save**

### Step 12 — Get your live URL
Wait 2–3 minutes, then your site will be live at:
```
https://YOUR_GITHUB_USERNAME.github.io/eden-pipeline/
```

---

## Part 5 — Updating the site

Whenever you make changes, run:
```
npm run deploy
```
That's it — the live site updates automatically within 1–2 minutes.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| "npm: command not found" | Restart Command Prompt after installing Node.js |
| "git: command not found" | Restart Command Prompt after installing Git |
| Login page shows but clicking Sign In does nothing | Make sure you're using the exact username and passcode |
| Site shows 404 after deployment | Wait 5 minutes for GitHub Pages to activate, then refresh |
| White blank page after deployment | Check that `base: "/eden-pipeline/"` in `vite.config.ts` matches your repo name exactly |
| M1/M2/M3/M4 show "Setup required" message | Follow the copy instructions inside each module file in `src/modules/` |

---

## Security notes

- Your login passcode is stored as a **SHA-256 hash** — the real passcode is never in the code
- After **5 wrong attempts**, the login locks for **15 minutes** (protects against guessing)
- The session clears when you close the browser tab
- For future upgrade to a real backend: replace `src/auth.config.ts` with a Supabase or Firebase Auth call — no other code needs to change

---

## File reference

| File | What it is |
|---|---|
| `src/modules/M1PHIScrubber.tsx` | Copy m1-phi-scrubber.tsx from Downloads here |
| `src/modules/M2TriageRouter.tsx` | Copy m2-triage-router.tsx from Downloads here |
| `src/modules/M3AliasEngine.tsx` | Copy m3-alias-engine.tsx from Downloads here |
| `src/modules/M4ConfidenceThreshold.tsx` | Copy m4-claude.tsx from Downloads here + apply patches |
| `src/modules/M5DefinitionEngine.tsx` | ✅ Ready — Eden KG + Wikipedia + AI |
| `src/modules/M6DeltaReport.tsx` | ✅ Ready — Delta report with 2-sheet export |
| `src/modules/M7AuditLog.tsx` | ✅ Ready — Persistent audit log |
| `src/components/LoginScreen.tsx` | ✅ Ready — SHA-256 auth + rate limiter |
| `src/auth.config.ts` | ✅ Ready — Username and hashed passcode |
| `vite.config.ts` | ⚠️ Change `base` to match your GitHub repo name if different |
