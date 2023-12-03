/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Pblue : "#337CCF",
        bgService : "#F1F6FC",
        bgbtn : "#FFC436",
        textColor: "#071230",
        boxShadowbtn: "0px 4px 4px 0px rgba(255, 196, 54, 0.10), 0px -4px 4px 0px rgba(255, 255, 255, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.11) inset;"
      },
      screens: {
        ss: "320px",
        sm: "650px",
        md: "835px",
        lg: "1300px",
        xl: "1600px",
      },
      width: {
        mdWidth: "386px"
      }
    },
  },
  plugins: [],
};
