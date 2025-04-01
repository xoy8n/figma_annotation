/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#001AFF",
        subRed: {
          "01": "#F24822", // 레드 (Figma 문서의 Red)
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
