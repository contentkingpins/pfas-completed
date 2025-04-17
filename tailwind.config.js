/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/JSX/TS/TSX files in src
    "./public/index.html"        // Include the main HTML file
  ],
  theme: {
    extend: {
      colors: {
        'trust-blue': {
          DEFAULT: '#0A2A4D', // Deep blue/navy base
          'dark': '#051A31', // Darker shade
        },
        'safety-green': {
          DEFAULT: '#6CCF93', // Soft green base
          'light': '#A6E5C0', // Lighter shade
        },
        'warning-red': '#E53E3E', // Tasteful red for warnings
        'light-gray': '#F7FAFC', // Light gray for backgrounds/cards
      },
      fontFamily: {
        // Add Inter, Open Sans, or Lato here if you install/import them
        sans: ['Inter', 'Open Sans', 'Lato', 'sans-serif'], // Example stack
      },
      borderRadius: {
        'lg': '0.5rem', // Example for rounded corners
        'xl': '0.75rem',
      }
    },
  },
  plugins: [],
} 