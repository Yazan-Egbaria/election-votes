/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 0px 30px -15px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        myBlue: "#427D9F",
        myHoverBlue: "#4f96bf",
        myLowBlue: "rgba(66, 125, 159, 0.3)",
        myGray: "#C5D0D1",
      },
    },
  },
  plugins: [],
};
