/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0052CC',
          orange: '#FF9966',
        },
        dark: {
          50: '#f3f4f6',
          100: '#1a1b1e',
          200: '#141517',
          300: '#101113',
          400: '#0c0d0e',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
        notes: ['Kalam', 'cursive'],
      },
      backgroundImage: {
        'paper': "repeating-linear-gradient(0deg, #1a1b1e, #1a1b1e 24px, #141517 25px)",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
};