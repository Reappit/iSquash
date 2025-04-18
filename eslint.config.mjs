import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'prettier',
      // 'eslint:recommended',
    ],
    plugins: [
      'no-relative-import-paths',
      '@typescript-eslint',
      'no-relative-import-paths',
      'import',
    ],
    rules: {
      // These off/not-configured-the-way-we-want lint rules we like & opt into
      '@typescript-eslint/no-explicit-any': 'error',
      'no-relative-import-paths/no-relative-import-paths': [
        'warn',
        { allowSameFolder: true, prefix: '@' },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      'import/consistent-type-specifier-style': ['error', 'prefer-inline'],

      //    // For educational purposes we format our comments/jsdoc nicely
      //    "isaacscript/complete-sentences-jsdoc": "warn",
      //    "isaacscript/format-jsdoc-comments": "warn",

      // These lint rules don"t make sense for us but are enabled in the preset configs
      '@typescript-eslint/no-confusing-void-expression': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',

      // This rule doesn"t seem to be working properly
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      // '@typescript-eslint/no-misused-promises': 'warn',
      '@typescript-eslint/array-type': ['error', { default: 'generic' }],
      'import/namespace': 'off',
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['sibling', 'parent'],
            'index',
            'unknown',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  }),
];

export default eslintConfig;
