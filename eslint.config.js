// ESLint flat config (ESLint v9+)
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginImport from 'eslint-plugin-import';

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**'],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        // Type-aware rules can be enabled later by setting "project".
        // project: ['./tsconfig.json'],
      },
    },
    plugins: {
      import: pluginImport,
      '@typescript-eslint': tseslint,
    },
    settings: {
      'import/resolver': {
        typescript: true,
      },
    },
    rules: {
      // General import hygiene
      'import/order': ['warn', { 'newlines-between': 'always' }],
      'import/no-unresolved': 'off',
      // TS recommendations (type-agnostic to avoid requiring a project)
      ...tseslint.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      import: pluginImport,
    },
    rules: {
      'import/order': ['warn', { 'newlines-between': 'always' }],
    },
  },
];

