/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[prefers-color-scheme=dark]'],
  theme: {
    extend: {
      colors: {
        light: '#efefef',
        dark: '#212121'
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      },
      transitionProperty: {
        colors: 'color, background-color, border-color, fill, stroke'
      }
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('all-children', '& *')
    }
  ]
}
