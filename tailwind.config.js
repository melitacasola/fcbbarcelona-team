/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-lg': '840px',
      },
      fontFamily: {
        'fcb-bold': ['"FC Barcelona Bold"', 'Arial', '"Helvetica Neue"', 'Helvetica', 'sans-serif'],
        'fcb': ['"FC Barcelona Extrabold"', 'Arial', '"Helvetica Neue"', 'Helvetica', 'sans-serif'],
      },
      fontWeight: {
        'normal': 400,
        'bold': 700,
        'extrabold': 800,
      },
      fontSize: {
        'base': '1.8rem',
      },
      lineHeight: {
        'base': '2.2rem',
      },
      colors: {
        'blues': '#154284',
        'gray-dark': '#343a40',
        'primary': '#FDC52C',
        'warning': '#cf122d',
        'blue-dark': '#181733',
        'violet':'#551A8B',
      },
      backgroundColor: {
        'blue': '#007bff',
      },
    },
  },
  plugins: [],
}

