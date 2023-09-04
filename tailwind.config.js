/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#080F28',
        skyblue: '#007AFF',
      },

      spacing: {
        sitex: '9.3rem',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
