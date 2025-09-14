# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

- `make setup` - Install dependencies (prefers pnpm, falls back to npm)
- `make build` - Compile TypeScript to `dist/` using tsc
- `make run` - Execute the Node.js application (`npm start`)
- `npm run dev` - Watch mode development using tsx

### Testing

- `make test` or `npm test` - Run vitest test suite
- `npm run test:watch` - Run tests in watch mode
- Tests are configured to run from `tests/**/*.test.ts` but no tests exist yet

### Code Quality

- `make lint` or `npm run lint` - Run ESLint
- `make format` or `npm run format` - Check formatting with Prettier
- `make format:write` or `npm run format:write` - Fix formatting with Prettier

## Architecture

### Project Structure

- `src/` - TypeScript source code (main entry: `src/index.ts`)
- `assets/` - Static HTML demo files including subject menu dropdown
- `dist/` - Compiled JavaScript output (generated)
- `tests/` - Test files (currently empty, uses vitest)

### Static Demo vs Node Application

This project contains two separate components:

1. **Static HTML Demo** (`assets/`) - Subject dropdown menu with placeholder pages for different subjects (math, science, english, history, languages)
2. **Node.js Application** (`src/`) - Minimal TypeScript scaffold with single entry function

The static demo is standalone HTML/CSS/JS viewable in browser. The Node.js app is unrelated backend code.

### Build Configuration

- TypeScript: ES2020 target, CommonJS modules, strict mode enabled
- ESLint: Flat config with TypeScript parser and import resolution
- Vitest: Configured for `tests/**/*.test.ts` pattern
- Prettier: Code formatting

### Guidelines from AGENTS.md

- Follow Conventional Commits (`feat:`, `fix:`, `docs:`, etc.)
- Use kebab-case for TypeScript files, PascalCase for classes
- Mirror test structure in `tests/` directory
- Keep functions small and focused
- Never commit secrets, use `.env` files
