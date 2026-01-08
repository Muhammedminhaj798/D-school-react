/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px", // 👈 smallest mobile
      },
      fontFamily: {
        clash: ["Clash Display", "sans-serif"],
        mundial: ['"Mundial"', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        marquee: "marquee 60s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
