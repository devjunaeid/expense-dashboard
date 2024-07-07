/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dim1White: "#F9FAFC",
        lightslate: "#979797",
        semiblue: "#273240", 
        lightblue: "#EDF0F6",
       darkblue: "#262A41", 
        bluegreen: "#404852",
      },
      gridTemplateColumns:{
        '25': 'repeat(25, minmax(0, 1fr))',
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
