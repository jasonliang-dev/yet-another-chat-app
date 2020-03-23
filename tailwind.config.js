module.exports = {
  // example from: https://tailwindcss.com/docs/configuring-variants/
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  theme: {
    extend: {
      fontFamily: {
        display: ['Raleway', 'sans-serif'],
      },
    },
  },
};
