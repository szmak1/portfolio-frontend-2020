module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: 'hsl(207, 73%, 52%)',
          default: 'hsl(207, 73%, 57%)',
          darker: 'hsl(207, 73%, 44%)',
        },
      },
      fontFamily: {
        nunito: ['nunito', 'sans-serif'],
        MyFont: ['"My Font"', 'serif'], // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  variants: {},
  plugins: [],
};
