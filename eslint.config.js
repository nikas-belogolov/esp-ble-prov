// @ts-check

import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['src/**/*.ts', 'examples/**/*.ts'],
    rules: {
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',

      'no-unsafe-optional-chaining': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off'
    },
  }
);

