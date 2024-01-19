/** @type {import('tailwindcss').Config} */ 
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        primary: '#89182E',
        secondary: '#FFD369', //change the color
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        julius: ['var(--font-julius)'],
        source: ['var(--font-source)'],
        montserrat:['var(--font-montserrat)']
      },
      backgroundImage: {
        'majlis-bg': "url('/Images/majlis2.jpg')",
      }
    },
  },
  plugins: [],
})
