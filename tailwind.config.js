/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#312E81",
        secondary: "#FDAD57",
        tertiary: "#6B7280",
        yellow: "#FFD500",
        red: "#ED3833",
        "light-blue": "#44AFE0",
        "dark-blue": "##10294C",
        black: "#242424",
        white: "#FFFFFF",
        gray: "#D9D9D9",
        "extra-light-gray": "#FBFBFB"
      },
      fontFamily: {
        Pacifico: ["Pacifico", "cursive"],
        SulphurPoint: ["Sulphur Point", "sans-serif"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        ss: "375px",
        xs: "480px",
        sm: "768px",
        md: "1060px",
        lg: "1280px"
      },
    },
  },
  plugins: [],
};
