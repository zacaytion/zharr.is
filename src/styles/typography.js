import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: 'Space Mono',
      styles: ['400', '400i', '700'],
    },
  ],
  headerFontFamily: ['Space Mono', 'sans-serif'],
  bodyFontFamily: ['Space Mono', 'sans-serif'],
})

/**
 * Hot reloading for typography in development
 * */
if (process.env.NOD_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
