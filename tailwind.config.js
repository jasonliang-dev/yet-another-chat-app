module.exports = {
  // example from: https://tailwindcss.com/docs/configuring-variants/
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  // from: https://tailwindcss.com/docs/max-height/#customizing
  theme: {
    maxHeight: {
      12: '3rem',
      20: '5rem',
      32: '8rem',
      48: '12rem',
      64: '16rem',
      full: '100%',
      screen: '100vh',
    },
  },
};
