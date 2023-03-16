/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'neon-glow': {
          '0%, 100%': { 'text-shadow': '0 0 10px #0da2e7, 0 0 20px #0da2e7, 0 0 30px #0da2e7, 0 0 40px #0da2e7' },
          '50%': { 'text-shadow': 'none' },
        },
      },
      animation: {
        'neon-glow': 'neon-glow 2s infinite',
      },
      borderColor: {
        neon: '#0da2e7',
      },
      borderWidth: {
        1: '1px',
      },
      boxShadow: {
        'neon-glow': '0 0 5px #0da2e7, 0 0 10px #0da2e7, 0 0 15px #0da2e7, 0 0 20px #0da2e7',
      },
    },
  },
  plugins: [],
}
