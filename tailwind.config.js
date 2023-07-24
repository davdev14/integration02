/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html",
    "./src/**/*.{html,js,ts}"
  ],
  theme: {
    screens: {
      "ls": "320px",
      "sm": "375px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1440px",
    },
    extend: {
      fontFamily: {
        mintaka: ["mintaka", "sans"],
        causten: ["causten", "sans"],
        core: ["core", "sans"],
        montserrat: ['montserrat', "sans"]
      },
      colors: {
        'euphoria-black': '#3C4242',
        'euphoria-grey': '#807D7E',
        'euphoria-secondary-grey': '#8A8989',
        'euphoria-white-bg': '#F6F6F6',
        'euphoria-voilet': '#8A33FD',
        'euphoria-secondary-grey': '#7F7F7F',
        'border-color': '#bebcbd'
      }
    },
  },
  plugins: [],
}

