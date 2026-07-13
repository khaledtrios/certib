#!/bin/bash
set -euo pipefail

ROOT="/home/certib"
CMS="$ROOT/crtib-cms-main"
FRONT="$ROOT/crtib-front-main"
LOG="/var/log/certib-deploy.log"

log() { echo "[$(date '+%H:%M:%S')] $*" | tee -a "$LOG"; }
die() { log "ERREUR: $*"; exit 1; }

exec >> "$LOG" 2>&1
log "========================================="
log "DEPLOY START"
log "========================================="

# ── 1. GIT PULL ──────────────────────────────────────────────────────────────
log "=== 1. GIT PULL ==="
cd "$ROOT"
git stash --include-untracked 2>/dev/null || true
git pull origin main || die "git pull failed"
git stash pop 2>/dev/null || true

# ── 2. DEPENDANCES CMS ───────────────────────────────────────────────────────
log "=== 2. DEPS CMS ==="
cd "$CMS"
if command -v pnpm &>/dev/null; then
  pnpm install --frozen-lockfile 2>/dev/null || pnpm install
else
  npm ci --prefer-offline 2>/dev/null || npm install
fi

# ── 3. BUILD CMS ─────────────────────────────────────────────────────────────
log "=== 3. BUILD CMS ==="
cd "$CMS"
export NODE_OPTIONS="--no-deprecation --max-old-space-size=2000"
npm run build || die "CMS build failed"
# Copier le build standalone si présent
if [ -d .next/standalone ]; then
  cp -r .next/static .next/standalone/.next/static 2>/dev/null || true
  cp -r public .next/standalone/public 2>/dev/null || true
fi

# ── 4. DEPENDANCES FRONT ─────────────────────────────────────────────────────
log "=== 4. DEPS FRONT ==="
cd "$FRONT"
npm ci --prefer-offline 2>/dev/null || npm install

# ── 5. BUILD FRONT ───────────────────────────────────────────────────────────
log "=== 5. BUILD FRONT ==="
cd "$FRONT"
npm run build || die "Front build failed"

# ── 6. RESTART CMS ───────────────────────────────────────────────────────────
log "=== 6. RESTART CMS ==="
cd "$CMS"
if pm2 describe crtib-cms &>/dev/null; then
  pm2 delete crtib-cms
fi
pm2 start npm --name "crtib-cms" -- run start
pm2 save

# ── 7. RESTART FRONT ─────────────────────────────────────────────────────────
log "=== 7. RESTART FRONT ==="
cd "$FRONT"
if pm2 describe crtib-front &>/dev/null; then
  pm2 delete crtib-front
fi
pm2 start npm --name "crtib-front" -- run start
pm2 save

# ── STATUS FINAL ─────────────────────────────────────────────────────────────
log "=== STATUS PM2 ==="
pm2 list

log "========================================="
log "DEPLOY OK"
log "========================================="
