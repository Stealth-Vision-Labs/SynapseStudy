# Repository Guidelines

## Project Structure & Module Organization
- Place application code in `src/`; entry points in `src/app` or `src/cli`.
- Mirror tests in `tests/` using the same package/module paths.
- Keep static assets in `assets/`, docs in `docs/`, and helper scripts in `scripts/`.
- Example: `src/package/module.py` ↔ `tests/package/test_module.py`.

## Build, Test, and Development Commands
- This repo is tool‑agnostic; prefer Make targets as thin wrappers once tooling is added.
- Examples:
  - `make setup` — install dependencies (e.g., `pip install -r requirements.txt` or `npm ci`).
  - `make test` — run the test suite (e.g., `pytest -q`).
  - `make lint` — format and lint (e.g., `black`, `ruff`, `prettier`, `eslint`).
  - `make run` — start the app or demo entrypoint.
- If no `Makefile` exists, run the underlying commands directly.

## Coding Style & Naming Conventions
- Python: 4‑space indent, `black` for formatting, `ruff` for linting. Modules `snake_case.py`, classes `PascalCase`, constants `UPPER_SNAKE`.
- TypeScript/JS: `prettier` + `eslint`. Files `kebab-case.ts/js`; classes `PascalCase`.
- Keep functions small and focused; avoid one‑letter names; prefer pure functions where practical.

## Testing Guidelines
- Prefer `pytest` (Python) or `vitest/jest` (TS/JS).
- Name tests `test_*.py` or `*.spec.ts`/`*.test.ts` and mirror `src/` structure.
- Put shared fixtures in `tests/fixtures/`.
- Strive for ≥80% coverage when practical; value meaningful, behavior‑focused tests over raw coverage.
- Run locally with `make test` or `pytest -q`.

## Commit & Pull Request Guidelines
- Use Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`, `build:`.
- Subject line: imperative mood, ≤72 chars; include scope when helpful (e.g., `feat(api): add session model`).
- PRs must link issues, describe intent/behavioral changes, include screenshots for UI, and call out breaking changes with migration notes.

## Security & Configuration
- Never commit secrets. Use `.env` and provide `.env.example` with safe defaults.
- Document required env vars in `README.md` or `docs/config.md`.

## Agent‑Specific Instructions
- Before edits, scan the tree with `rg` and outline a short plan via the `update_plan` tool.
- Use `apply_patch` for changes; keep patches minimal and focused on the task.
- Respect this file’s scope rules; avoid unrelated refactors and drive work with clear, concise messages.
