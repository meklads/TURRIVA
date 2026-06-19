# Deployment Notes — Saudi Proposal OS

## Issue Fixed: Tailwind CSS v4 → v3 Downgrade

**Root Cause:** 
`package.json` had `"tailwindcss": "^4.3.1"` which required `@tailwindcss/postcss` as a separate package. 
The PostCSS config used `tailwindcss` plugin directly (v3 style), causing build failure.

**Fix Applied:**
- Pinned `tailwindcss` to `3.4.19` (exact version)
- Regenerated `package-lock.json` so `npm ci` installs correct version
- PostCSS config remains unchanged (correct for v3)

## Environment Variables Required

| Variable | Required | Notes |
|----------|----------|-------|
| `DATABASE_URL` | ✅ | PostgreSQL connection string |
| `AUTH_SECRET` | ✅ | NextAuth secret |
| `AUTH_URL` | ✅ | Deployment URL |
| `OPENAI_API_KEY` | ✅ | OpenAI key (set empty for mock data) |
| `NEXT_PUBLIC_APP_URL` | ✅ | Public URL |

## Build Command
```bash
npm ci
npx prisma generate
npx prisma db push
npm run build
```

## Start Command (Coolify / Docker)
```bash
npm start
```
This runs `prisma db push` automatically before starting the server.

## Health Check
After deploy, verify database is connected:
```
GET /api/health
```
Expected: `{ "ok": true, "db": true, "tables": true }`

## Coolify Settings
- **Build Command:** `npm ci && npm run build`
- **Start Command:** `npm start` (default)
- **Port:** 3000
