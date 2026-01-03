/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ['Outfit', 'sans-serif'],
        mundial: ['"Mundial"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
animation: {
  marquee: 'marquee 60s linear infinite', // slow & smooth ആക്കി 60s ആക്കി
},
    },
  },
  plugins: [],
};

export default config;
