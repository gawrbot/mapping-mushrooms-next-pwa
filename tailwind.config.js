/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik Distressed', 'cursive'],
        oleo: ['Oleo Script', 'cursive'],
        amiko: ['Amiko', 'sans-serif'],
      },
      colors: {
        darkgreen: '#3C672F',
        lightgreen: '#DFF8D5',
        backgroundgrey: '#95b0b6',
        header: '#324b50',
        lightblue: '#00BBFF',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
