/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Define a custom breakpoint for extra small screens
        '2xs': '370px', // Example for an even smaller breakpoint
      },
    },
  },
  plugins: [],
}

