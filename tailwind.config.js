/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        airbnb: '#FF385C',
      },
      padding: {
        'auto': 'auto',
      },
      dropShadow: {
        'xl': '0px 8px 30px -4px rgba(0,0,0,0.74)'
      },
      boxShadow: {
        'sliderRight': '0 -15px 15px 5px #fff',
      },

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}
