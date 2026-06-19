#!/usr/bin/env sh
PORT="${PORT:-3000}"

echo "=========================================="
echo " Saudi Proposal OS"
echo " PORT=$PORT"
echo "=========================================="

# Never block app startup — Bad Gateway happens when the container exits here.
if [ -n "$DATABASE_URL" ]; then
  echo "→ Database schema setup (background)..."
  (
    n=1
    while [ "$n" -le 15 ]; do
      if ./node_modules/.bin/prisma db push --skip-generate 2>&1; then
        echo "→ Database schema ready ✓"
        exit 0
      fi
      echo "→ DB retry $n/15..."
      sleep 2
      n=$((n + 1))
    done
    echo "⚠ Database setup failed — app is running but DB features need DATABASE_URL"
  ) &
else
  echo "⚠ DATABASE_URL is not set — add PostgreSQL in Coolify environment"
fi

echo "→ Starting Next.js on 0.0.0.0:$PORT"
exec ./node_modules/.bin/next start -H 0.0.0.0 -p "$PORT"
