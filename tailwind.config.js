/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9747FF", // 보라색 (Figma 문서에서 확인된 Violet)
        subRed: {
          "01": "#F24822", // 레드 (Figma 문서의 Red)
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
