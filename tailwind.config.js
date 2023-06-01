/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "star-sprinkles": "url('../public/star.jpg')",
      },
      backgroundSize: {
        auto: "auto",
      },
      backgroundRepeat: {
        repeat: "repeat",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        blue1: "#F8FAFE",
        blue: {
          1: "#3046D9",
        },
        ash1: "#F8F8F8",
        ash: "#637381",
        ash2: "#DADCE0",
        white: "#FFFFFF",
        green: "#006950",
        darkGreen: "#16B312",
      },
    },
  },
  plugins: [],
};
