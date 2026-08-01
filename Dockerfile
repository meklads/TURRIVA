# syntax=docker/dockerfile:1
# Production image for Coolify — prefer this over Nixpacks on memory-constrained hosts.

FROM node:22-bookworm-slim AS base
WORKDIR /app
RUN apt-get update \
  && apt-get install -y --no-install-recommends openssl ca-certificates \
  && rm -rf /var/lib/apt/lists/*

FROM base AS deps
COPY package.json package-lock.json ./
COPY prisma ./prisma
RUN npm ci

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV DATABASE_URL="postgresql://build:build@localhost:5432/build?schema=public"
ENV AUTH_SECRET="build-placeholder-do-not-use-in-production"
ENV AUTH_URL="https://turriva.com"
ENV NEXT_PUBLIC_APP_URL="https://turriva.com"
RUN NODE_OPTIONS="--max-old-space-size=1024" npm run build:deploy

FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

COPY package.json package-lock.json ./
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY scripts ./scripts
RUN chmod +x scripts/start.sh

EXPOSE 3000
CMD ["npm", "start"]
