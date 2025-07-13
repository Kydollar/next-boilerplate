/** @type {import("prettier").Config} */
const config = {
  // Core formatting rules
  semi: true,
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'all',
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'auto',
  proseWrap: 'always',
  embeddedLanguageFormatting: 'auto',

  // Plugins
  plugins: ['prettier-plugin-tailwindcss', '@ianvs/prettier-plugin-sort-imports'],

  // TailwindCSS plugin config
  tailwindFunctions: ['cn'],

  // Import sorting rules
  importOrder: [
    '<BUILTIN_MODULES>',
    '',
    '^react$',
    '^next$',
    '^next/.*',
    '',
    '^@/.*',
    '',
    '^\\.\\.(?!/?$)', // parent imports
    '^\\./(?=.*/)(?!/?$)', // nested sibling
    '^\\.(?!/?$)', // current directory (single file)
    '^\\./?$', // index files
  ],

  importOrderParserPlugins: ['typescript', 'jsx'],
};

export default config;
