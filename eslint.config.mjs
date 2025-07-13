import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// FlatCompat for support config legacy like eslint-config-next
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintIgnore = [
  '.git/',
  '.next/',
  '.cache/',
  'node_modules/',
  'dist/',
  'build/',
  'coverage/',
  '.swc/',
  'out/',
  'public/',
  '*.min.js',
  '*.config.js',
  '*.config.mjs',
  '*.config.ts',
  '*.d.ts',
  '*.tsbuildinfo',
];

const eslintConfig = [
  /**
   * Base Config
   * Meng-extend recommended config Next.js dan TypeScript
   */
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ),

  /**
   * Universal settings (all files)
   */
  {
    ignores: eslintIgnore,

    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        React: 'writable',
      },
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      import: eslintPluginImport,
      'jsx-a11y': eslintPluginJsxA11y,
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      prettier: eslintPluginPrettier,
      '@typescript-eslint': eslintPluginTypeScript,
    },
    rules: {
      // React rules
      'react/react-in-jsx-scope': 'off', // Next.js doesn't need React import in files
      'react/jsx-uses-react': 'off',

      // Import rules
      'import/order': 'off',
      'import/no-duplicates': 'error',
      'no-duplicate-imports': 'error',

      // A11y rules
      'jsx-a11y/alt-text': 'warn',

      // Example custom rules
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

      // TypeScript rules
      '@typescript-eslint/explicit-function-return-type': 'off',

      // Prettier Integration
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      'comma-dangle': ['error', 'always-multiline'], // Enforce trailing commas where valid in ES5 (objects, arrays, etc.)
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
  },
];

export default eslintConfig;
