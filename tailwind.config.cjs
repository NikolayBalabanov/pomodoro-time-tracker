/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        colorRed: '#DC3E22',
        colorRedHover: '#B7280F',
        colorRed3: '#EE735D',
        colorRed4: '#EA8979',
        colorGreen: '#A8B64F',
        colorGreen2: '#899441',
        colorGrey: '#C4C4C4',
        colorText: '#333333',
        colorTextGrey: '#999999',
        colorBg: '#F4F4F4',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
