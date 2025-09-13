module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['import'],
      extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
      ],
      rules: {
        'import/order': ['warn', { 'newlines-between': 'always' }],
      },
    },
    {
      files: ['**/*.js'],
      extends: ['eslint:recommended', 'prettier'],
    },
  ],
};

