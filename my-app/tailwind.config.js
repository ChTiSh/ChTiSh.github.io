/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        'sans':['Libre Franklin', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Inter', 'sans-serif'],
        'accent': ['Namu Brush Script', 'Comic Sans MS', 'Brush Script MT', 'Lucida Handwriting', 'cursive']
      },
    },
  },
  plugins: [],
}

