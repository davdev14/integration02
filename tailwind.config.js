/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html",
    "./src/**/*.{html,js,ts}"
  ],
  theme: {
    screens: {
      "2xl": "1440px"
    },
    extend: {
      fontFamily: {
        mintaka: ["mintaka", "sans"],
        causten: ["causten", "sans"],
        core: ["core", "sans"]
      },
      colors: {
        'euphoria-black': '#3C4242',
        'euphoria-grey': '#807D7E',
        'euphoria-white-bg': '#F6F6F6',
      }
    },
  },
  plugins: [],
}

