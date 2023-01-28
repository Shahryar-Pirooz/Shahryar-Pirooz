/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    colors: {
      background: '#16161A',
      'background-shade': '#242629',
      accent: '#2CB67D',
      primary: '#7F5AF0',
      body: '#94A1B2',
      head: '#FFFFFE',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
