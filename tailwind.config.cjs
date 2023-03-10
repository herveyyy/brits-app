/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'print': { 'raw': 'print' },
        'signature': { 'raw': 'signature' },
        'label': { 'raw': 'label' },
    }
    },
  },
  plugins: [],
}