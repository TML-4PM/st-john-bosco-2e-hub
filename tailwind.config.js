/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bosco: {
          navy: '#1B2A4A',
          teal: '#1D7A6B',
          gold: '#D4A017',
          sand: '#F5F0E8',
          coral: '#E8634A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
