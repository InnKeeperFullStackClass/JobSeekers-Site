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
    },
  },
  plugins: [],
};
