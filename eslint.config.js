const { defineConfig } = require('eslint/config');

const globals = require('globals');
const prettier = require('eslint-plugin-prettier');
const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },

    extends: compat.extends(
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ),

    plugins: {
      prettier,
    },

    rules: {
      'prettier/prettier': 'warn',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);
