/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './phase-*/*.html',
    './pages/**/*.html',
  ],
  theme: {
    extend: { colors: {
        green1: "#3E6700",
        green2: "#23330A",
        green3: "#9BCC52",
        green4: "#D6FF99",
        green5: "#EBFFCC",
      },},
  },
  plugins: [],
};
