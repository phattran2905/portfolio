/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#222B2F",
        secondary: "#38464D",
        tertiary: "#242A32",
        yellow: "#FFD500",
        red: "#ED3833",
        "light-blue": "#44AFE0",
        "dark-blue": "##10294C",
        black: "#1A2023",
        white: "#FFFFFF",
      },
      fontFamily: {
        Pacifico: ["Pacifico", "cursive"],
        SulphurPoint: ["Sulphur Point", "sans-serif"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
