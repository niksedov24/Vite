import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // Базовые правила JS
  pluginJs.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      // Ваши кастомные правила ESLint (без форматирования)
      // 'no-console': 'warn',
    },
  },

  // Prettier-конфиг должен идти ПОСЛЕДНИМ.
  // Он отключает все правила форматирования, чтобы они не мешали Prettier.
  eslintConfigPrettier,

  {
    files: ['.eslintrc.{js,cjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
  },

  {
    ignores: ['node_modules', 'dist'],
  },
];
