/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "430px",
        md: "834px",
        lg: "1300px",
        xl: "1600px",
      },
    },
  },
  plugins: [],
};
