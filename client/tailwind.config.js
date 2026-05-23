/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "ping-slow": "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};
