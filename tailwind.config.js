/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Syne", "sans-serif"],
      },
      colors: {
        lobby: " #18122D",
        audio: "#18122D",
        custom: {
          1: " #22193F",
          2: "#18122D",
          3: "#3A3352",
          4: "#815BFF",
          5: "#FCF1FC",
          6: "#F0B5F0",
          7: "#F7F5F2",
          8: "#E748E6",
          9: "#31245B"
        },
        rgbColors: {
          1: "rgb(68, 51, 127)",
          2: "rgb(87, 66, 164)",
          3: "rgb(113, 91, 189)",
          4: "rgb(145, 128, 204)",
        },
      },
    },
  },
  plugins: [],
};
