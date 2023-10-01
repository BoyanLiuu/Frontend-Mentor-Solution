/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'grayish-blue': 'hsl(210, 4%, 67%)',
        'light-white': '#FFFCF8',
        'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
        'dark-moderate-cyan': 'hsl(168, 34%, 41%)',
        'footer-color': 'rgba(144, 212, 198, 1)',
        'footer-logo-color': '	hsl(168, 45%, 32%)',
        'dark-grayish-blue': 'hsla(233, 10%, 55%, 1)',
        'dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
        'dark-blue': 'hsla(197, 86%, 12%, 1)',
        yellow: 'hsl(51, 100%, 49%)',
        'soft-red': 'hsl(7, 99%, 70%)',
        'dark-desaturated-blue': 'hsl(212, 27%, 19%)',
      },
      screens: {
        desktop: '1440px',
        tablet: '768px',
      },
      borderRadius: {
        full: '50%',
      },
      fontSize: {
        'main-desktop-header': [
          '56px',
          {
            letterSpacing: '8.75px',
            fontWeight: '900',
          },
        ],
        'main-phone-header': [
          '40px',
          {
            letterSpacing: '6.25px',
            fontWeight: '900',
          },
        ],
      },
    },
  },
  plugins: [],
};
