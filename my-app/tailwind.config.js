/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#332C44',
        'accent':'#f2a64a',
      },
      fontFamily: {
        'sans':['Libre Franklin', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Inter', 'sans-serif'],
        'accent': ['Nanum Brush Script', 'Comic Sans MS', 'Brush Script MT', 'Lucida Handwriting', 'cursive'],
        'logo': ['Nanum Pen Script', 'Comic Sans MS', 'Brush Script MT', 'Lucida Handwriting', 'cursive']
      },
      screens: {
        'tablet': '640px',
        'desktop': '1280px',
      },
    },
  },
  plugins: [],
}

