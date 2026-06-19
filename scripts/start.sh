#!/usr/bin/env sh
PORT="${PORT:-3000}"

echo "=========================================="
echo " Saudi Proposal OS"
echo " PORT=$PORT"
echo "=========================================="

# Sync once before accepting traffic (adds new columns e.g. Proposal.locale)
if [ -n "$DATABASE_URL" ]; then
  echo "→ Database schema setup..."
  if ./node_modules/.bin/prisma db push --skip-generate 2>&1; then
    echo "→ Database schema ready ✓"
  else
    echo "→ DB push failed — retrying in background..."
    (
      n=1
      while [ "$n" -le 15 ]; do
        sleep 2
        if ./node_modules/.bin/prisma db push --skip-generate 2>&1; then
          echo "→ Database schema ready ✓ (background)"
          exit 0
        fi
        echo "→ DB retry $n/15..."
        n=$((n + 1))
      done
      echo "⚠ Database setup failed — check DATABASE_URL"
    ) &
  fi
else
  echo "⚠ DATABASE_URL is not set — add PostgreSQL in Coolify environment"
fi

echo "→ Starting Next.js on 0.0.0.0:$PORT"
exec ./node_modules/.bin/next start -H 0.0.0.0 -p "$PORT"
