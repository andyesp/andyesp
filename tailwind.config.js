module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        text: '#b9c8da',
        overlay: 'rgba(0, 0, 0, 0.3)',
      },
      transitionProperty: ['hover', 'focus'],
    },
  },
  variants: {},
  plugins: [],
}
