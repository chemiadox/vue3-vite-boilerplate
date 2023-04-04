/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  plugins: [
    'import',
  ],
  extends: [
    'eslint:recommended',
    '@chemiadox/eslint-config',
    'plugin:vue/vue3-essential',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'semi': [2, 'always'],
    '@typescript-eslint/no-floating-promises': ['warn', { ignoreVoid: true }],
    'id-length': ['warn', { min: 2, exceptions: ['i', '_'], properties: 'always' }],
    'comma-dangle': ['error', 'always-multiline'],
    'import/no-extraneous-dependencies': ['error', { "devDependencies": true }],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: '.',
      },
      alias: {
        map: [
          ['@', './src'],
        ],
      },
    },
  },
};
