module.exports = {
  purge: [
    './src/**/**/*.{js,ts,jsx,tsx,html,mdx}',
    './src/**/*.{js,ts,jsx,tsx,html,mdx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // green
        'evgreen-50': '#B1DDC7',
        'evgreen-100': '#8ACCAB',
        'evgreen-200': '#63BB8F',
        'evgreen-300': '#3CAA73',
        'evgreen-400': '#159957',
        'evgreen-500': '#138A4E',
        'evgreen-600': '#117A46',
        'evgreen-700': '#0F6B3D',
        'evgreen-800': '#0D5C34',
        'evgreen-900': '#0B4D2C',
        // blue
        'evblue-50': '#B1C7DD',
        'evblue-100': '#8AABCC',
        'evblue-200': '#638FBB',
        'evblue-300': '#3C73AA',
        'evblue-400': '#155799',
        'evblue-500': '#134E8A',
        'evblue-600': '#11467A',
        'evblue-700': '#0F3D6B',
        'evblue-800': '#0D345C',
        'evblue-900': '#0B2C4D',
        // yellow
        'evyellow-50': '#FFF2AA',
        'evyellow-100': '#FFEB80',
        'evyellow-200': '#FFE455',
        'evyellow-300': '#FFDE2B',
        'evyellow-400': '#FFD700',
        // red
        'evred-50': '#F9B3B6',
        'evred-100': '#F68E92',
        'evred-200': '#F3686D',
        'evred-300': '#F04249',
        'evred-400': '#ED1C24',
        // gray
        'evgray': '#EAEAEA',
        'evgray-50': '#D4D4D4',
        'evgray-100': '#AAAAAA',
        'evgray-200': '#939598',
        'evgray-300': '#808080',
        'evgray-400': '#555555',
        'evgray-500': '#2B2B2B',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
