/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'trustBlue': {
          DEFAULT: '#0A2A4D', // Deep blue/navy base
          'dark': '#051A31', // Darker shade for hover states
        },
        'safetyGreen': {
          DEFAULT: '#6CCF93', // Soft green base
          'light': '#A6E5C0', // Lighter shade for hover states
        },
        'warningRed': '#E53E3E', // Tasteful red for warnings
        'lightGray': '#F7FAFC', // Light gray for backgrounds/cards
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
      }
    },
  },
  plugins: [],
} 