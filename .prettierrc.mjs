/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  tabWidth: 2,
  useTabs: false,
  printWidth: 110,
  semi: true,
  trailingComma: 'none',
  singleQuote: true
};
