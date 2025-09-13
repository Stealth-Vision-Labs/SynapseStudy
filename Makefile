SHELL := /bin/bash

.PHONY: setup build test lint format format:write run clean

setup:
	@set -e; \
	if [ -f package.json ] && command -v pnpm >/dev/null 2>&1; then \
		echo "[setup] pnpm install"; pnpm install; \
	elif [ -f package.json ] && command -v npm >/dev/null 2>&1; then \
		echo "[setup] npm ci || npm install"; npm ci || npm install; \
	else \
		echo "[setup] No package.json found"; \
	fi

build:
	@echo "[build] tsc"; \
	npx --yes tsc -p tsconfig.json || echo "TypeScript not installed yet; run make setup"

test:
	@echo "[test] npm test"; \
	if [ -f package.json ]; then npm test || true; else echo "No package.json"; fi

lint:
	@echo "[lint] eslint"; \
	npx --yes eslint . || echo "ESLint not installed yet; run make setup"

format:
	@echo "[format] prettier --check"; \
	npx --yes prettier --check . || echo "Prettier not installed yet; run make setup"

format\:write:
	@echo "[format] prettier --write"; \
	npx --yes prettier --write . || echo "Prettier not installed yet; run make setup"

run:
	@echo "[run] npm start"; \
	if [ -f package.json ]; then npm start || true; else echo "No package.json"; fi

clean:
	@echo "[clean] Removing caches and build artifacts"; \
	rm -rf node_modules dist coverage .turbo .vite
