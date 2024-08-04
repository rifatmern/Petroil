/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    maxWidth:{
      container:"1320px"
    },
    backgroundImage:{
      'ban': "url(./src/assets/banner.png)",
      'serviceone': "url(./src/assets/serviceone.png)",
      'servicetwo': "url(./src/assets/servicetwo.png)",
      'servicethree': "url(./src/assets/servicethree.png)",
      'larnmore': "url(./src/assets/larnmore.png)",
      'card1': "url(./src/assets/card1.png)",
      'card2': "url(./src/assets/card2.png)",
      'card3': "url(./src/assets/card3.png)",
    },
    fontFamily:{
      'pops': ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}