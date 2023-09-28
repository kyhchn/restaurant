/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      padding:{
        'mobile': '10px',
        'dekstop': '20px',
      }
    },
  },
  plugins: [],
};
