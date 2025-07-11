/** @type {import("prettier").Config} */
const config = {
  // Global formatting rules
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
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cn'],
};

export default config;
