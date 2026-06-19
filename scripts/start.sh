#!/usr/bin/env sh
set -e

echo "→ Ensuring database schema..."
npx prisma db push --skip-generate

echo "→ Starting Next.js..."
exec next start -H 0.0.0.0 -p "${PORT:-3000}"
