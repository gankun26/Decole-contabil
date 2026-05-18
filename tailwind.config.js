/* eslint-disable no-undef */
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
      flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver' : '#F5F7FA',
        'neutralDGray' : '#4D4D4D',
        'blackPrimary' : '#000000',
        'neutralGray' : '#717171',
        'gray900' : '#18191F',
        'brandPrimary' : '#6D28D9'
      }
    },
  },
  plugins: [flowbite.plugin(),],
}

