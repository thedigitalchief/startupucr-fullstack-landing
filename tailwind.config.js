const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media'
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-sarif"]
      },
      colors: {
        primary: {
          "50": "#ffedef",
          "100": "#003da5",
          "200": "#003da5",
          "300": "#003da5",
          "400": "#003da5",
          "500": "#003da5",
          "600": "#003da5",
          "700": "#003da5",
          "800": "#003da5",
          "900": "#003da5"
        },
        // primary: {
        //   "50": "#e8f9f1",
        //   "100": "#77d9ab",
        //   "200": "#003da5",
        //   "300": "#003da5",
        //   "400": "#003da5",
        //   "500": "#003da5",
        //   "600": "#003da5",
        //   "700": "#003da5",
        //   "800": "#148651",
        //   "900": "#117345",
        // },
        indigo: {
          "overlay": "rgba(99,102,241, 0.8)"
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.600'),
              },
            },
            blockquote: {
              color: theme('colors.gray.800'),
              borderLeftColor: theme('colors.primary.500'),
              fontSize: theme('fontSize.xl'),
              fontStyle: 'not-italic',
            }
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
