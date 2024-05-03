/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#ffa69e",
        secondary: "#faf3dd",
        tertiary: "#b8f2e6",
      },
      fontFamily: {
        monstserrat: ['"Montserrat", sans-serif'],
      },
    },
  },
  plugins: [],
};
