const theme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  content: [
    "content/**/*.md",
    "layouts/**/*.html",
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html",
  ],
  darkMode: "class", // 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        darkest: theme('colors.nord0'),
        darker: theme('colors.nord1'),
        dark: theme('colors.nord2'),
      }),
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "code::before": false,
            "code::after": false,
            a: {
              color: theme('colors.nord10'),
              textDecoration: "underline",
              "&:hover": {
                color: theme('colors.nord8'),
                textDecoration: "underline",
              },
            },
            pre: {
              backgroundColor: theme('colors.nord3'),
              color: theme('colors.nord6'),
            },
            code: { color: theme('colors.nord6') },
          },
        },
        invert: {
          css: {
            color: theme('colors.nord4'),
            a: {
              color: theme('colors.nord4'),
              "&:hover": { color: theme('colors.nord7') },
            },
            h1: { color: theme('colors.nord4') },
            h2: { color: theme('colors.nord4') },
            h3: { color: theme('colors.nord4') },
            h4: { color: theme('colors.nord4') },
            h5: { color: theme('colors.nord4') },
            h6: { color: theme('colors.nord4') },
            strong: { color: theme('colors.nord4') },
            td: { color: theme('colors.nord4') },
            blockquote: { color: theme('colors.nord4') },
            pre: {
              backgroundColor: theme('colors.nord2'),
            },
            code: { color: theme('colors.nord4') },
          },
        },
      }),
    },
  },
  variants: { typography: ["invert"], extend: {} },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-nord"),
  ],
};