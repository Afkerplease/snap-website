/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Epilogue: ["Epilogue"],
      },
      colors: {
        AlmostWhite: "hsl(0, 0%, 98%)",
        MediumGray: "hsl(0, 0%, 41%)",
        MediumGray2: "hsl(0, 0%, 94%)",
        AlmostBlack: "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
