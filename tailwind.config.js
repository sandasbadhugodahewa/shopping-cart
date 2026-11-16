/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary: {
          DEFAULT: "#4F46E5", // bg-primary
          light: "#EEF2FF" // bg-primary-light
        }
      }
    },
  },
  plugins: [],
}

