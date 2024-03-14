/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
    fontFamily: {
      ibm: ['IBM Plex Sans KR', 'sans-serif'],
      pretendard: ['Pretendard Variable', 'sans-serif']
    },
    boxShadow: {
      itemList: ['0px 4px 6px 0px rgba(0, 0, 0, 0.07)'],
      infoList: ['0px 2px 5px 0px rgba(0, 0, 0, 0.10)']
    },
    screens: {
      smd: '425px',
      md: '768px',
      lg: '1024px'
    }
  },
  plugins: []
}
