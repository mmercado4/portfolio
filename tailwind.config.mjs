/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'grey-line': '#bfc0bf',
        'off-white': '#fbfbfb',
        dark: '#1b1b1f',
        light: '#fbfbfb',
        'grey-primary': '#444444',
        'grey-secondary': '#777777',
        'grey-disabled': '#efefef4d',
        'light-grey': '#a3a3a3',
        backdrop: '#00000080',
        'input-border': '#3d3f45',
        'muted-foreground': '#737373'
      },
      fontFamily: {}
    }
  },
  plugins: []
};
