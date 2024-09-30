/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: '#f8f6ff',
          100: '#e6e1ff',
          200: '#d4c8ff',
          300: '#b8a3ff',
          400: '#9c7dff',
          500: '#8257ff',
          600: '#6b38e0',
          700: '#5527b3',
          800: '#411c8c',
          900: '#2f1466',
        },
      },
    },

  },
  plugins: [],
}

