/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      typography: (theme) => ({
        light: {
          css: {
            color: '#adbac7',

            h1: {
              color: theme('colors.gray.300'),
              borderColor: '#373e47',
            },

            h2: {
              color: theme('colors.gray.300'),
              borderColor: '#373e47',
            },

            h3: {
              color: theme('colors.gray.300'),
            },

            h4: {
              color: theme('colors.gray.300'),
            },

            h5: {
              color: theme('colors.gray.300'),
            },

            a: {
              color: '#539bf5',
            },

            code: {
              color: theme('colors.gray.300'),
              backgroundColor: '#3c4149',
            },

            pre: {
              backgroundColor: '#2d333b',
            },

            strong: {
              color: theme('colors.gray.300'),
            },

            blockquote: {
              borderLeftColor: '#4f5864',
              color: '#768390',
            },
          },
        },

        DEFAULT: {
          css: {
            color: '#41464a',

            h1: {
              fontWeight: theme('fontWeight.semibold'),
              borderBottom: '1px solid #ebedef',
              paddingBottom: theme('spacing.3'),
              marginBottom: theme('spacing.0'),
            },

            h2: {
              fontWeight: theme('fontWeight.semibold'),
              borderBottom: '1px solid #ebedef',
              paddingBottom: theme('spacing.2'),
              marginBottom: theme('spacing.3'),
              marginTop: theme('spacing.6'),
            },

            p: {
              marginBottom: theme('spacing.3'),
              marginTop: theme('spacing.3'),
            },

            strong: {
              fontWeight: theme('fontWeight.semibold'),
            },

            code: {
              borderRadius: theme('borderRadius.default'),
              fontWeight: theme('fontWeight.normal'),
              background: theme('colors.gray.100'),
              // padding: theme('spacing.1'),
              '&::before': {
                display: 'none',
              },
              '&::after': {
                display: 'none',
              },
              color: 'hsl(322, 75%, 46%)',
              fontSize: '1rem',
            },

            a: {
              color: '#0066d6',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },

            li: {
              marginBottom: theme('spacing.1'),
              marginTop: theme('spacing.1'),
            },

            blockquote: {
              fontWeight: theme('fontWeight.normal'),
              borderLeftColor: '#e0e3e6',
              fontStyle: 'none',
              color: '#6a737d',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
