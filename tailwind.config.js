/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,ts,tsx,css}"],
  theme: {
    extend: {
      colors: {
        primaryTomato: "hsl(4, 100%, 67%)",
        neutralDarkSlateGray: "hsl(234, 29%, 20%)",
        neutralCharcoalGray: "hsl(235, 18%, 26%)",
        neutralGray: "hsl(231, 7%, 60%)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "background-desktop":
          "url('/public/assets/images/illustration-sign-up-desktop.svg')",
        "background-mobile":
          "url('/public/assets/images/illustration-sign-up-mobile.svg')",
        "gradient-custom": "linear-gradient(to right, #FD5478, #FF683E)",
      },
      content: {
        "red-checkmark": 'url("/assets/images/icon-list.svg")',
      },
    },
  },
  plugins: [],
};
