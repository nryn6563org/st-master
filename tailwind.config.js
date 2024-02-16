/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
    fontFamily: {
      ibm: ['IBM Plex Sans KR', 'sans-serif'],
      pretendard: ['Pretendard', 'sans-serif']
    },
    boxShadow: {
      itemList: ['0px 4px 6px 0px rgba(0, 0, 0, 0.07)']
    },
    screens: {
      md: '768px',
      lg: '1024px'
    }
  },
  plugins: []
}
