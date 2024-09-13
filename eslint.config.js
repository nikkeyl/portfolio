import { defineFlatConfig } from 'eslint-define-config';
import { extend, plugins } from '@archoleat/eslint-flat-compatibility';

import globals from 'globals';

import prettierConfig from 'eslint-config-prettier';
import unicornPlugin from 'eslint-plugin-unicorn';

import parser from '@typescript-eslint/parser';

export default defineFlatConfig([
  ...extend(
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ),
  ...plugins('@next/eslint-plugin-next'),
  unicornPlugin.configs['flat/recommended'],
  {
    files: ['src/**/*.tsx', 'src/**/*.ts'],
    languageOptions: {
      parser,
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: 'tsconfig.json',
      },
      sourceType: 'module',
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: 'tsconfig.json',
        },
      },
    },
    rules: {
      'func-style': ['error', 'expression'],
      'import/exports-last': 'error',
      'import/extensions': ['error', { ts: 'never', tsx: 'never' }],
      'import/group-exports': 'error',
      'import/no-commonjs': 'error',
      'import/no-default-export': 'error',
      'import/no-namespace': 'error',
      'import/no-unassigned-import': 'off',
      'import/prefer-default-export': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'unicorn/no-unused-properties': 'error',
      'unicorn/string-content': 'error',
    },
  },
  prettierConfig,
]);
