#!/usr/bin/env sh

PORT="${PORT:-3000}"
MAX_RETRIES=10

echo "=========================================="
echo " Saudi Proposal OS — Starting..."
echo " PORT=$PORT"
echo "=========================================="

# Wait for database and apply schema (Coolify DB may not be ready immediately)
echo "→ Ensuring database schema..."
i=1
while [ "$i" -le "$MAX_RETRIES" ]; do
  if ./node_modules/.bin/prisma db push --skip-generate 2>&1; then
    echo "→ Database schema ready ✓"
    break
  fi
  echo "→ DB not ready (attempt $i/$MAX_RETRIES), retrying in 3s..."
  sleep 3
  i=$((i + 1))
done

if [ "$i" -gt "$MAX_RETRIES" ]; then
  echo "✗ Database setup failed after $MAX_RETRIES attempts."
  echo "  Check DATABASE_URL in Coolify environment variables."
  exit 1
fi

echo "→ Starting Next.js on 0.0.0.0:$PORT ..."
exec ./node_modules/.bin/next start -H 0.0.0.0 -p "$PORT"
