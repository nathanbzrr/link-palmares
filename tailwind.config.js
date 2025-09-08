export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'linknet-blue': '#0488c7',
        'linknet-yellow': '#FFDD00',
        'linknet-white': '#FFFFFF',
        'linknet-gray-light': '#F8F9FA',
        'linknet-gray-dark': '#333333',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};