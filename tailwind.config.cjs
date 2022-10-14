/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        hand: {
            '0%, 20%,40%,60%,80%,100%': {
              transform: 'rotate(-20deg)'
            },
            '30%,50%,70%': {
              transform: 'rotate(10deg)'
            }
        }
      },
      animation: {
        'hand': 'hand 2.5s infinite',
      },
    },
  },
  plugins: [],
}