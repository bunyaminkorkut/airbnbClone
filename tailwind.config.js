/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        airbnb:'#FF385C',
      },
      padding: {
        'auto': 'auto',
      },
      dropShadow:{
        'xl':'0px 8px 30px -4px rgba(0,0,0,0.74)'
      }
    },
  },
  plugins: [],
}
