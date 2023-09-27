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
      },
      backgroundImage: {
        'dark-desaturated-blue': 'hsl(212, 27%, 19%)',
        'dark-grayish-blue': 'hsl(232, 10%, 55%)',
        'soft-red': ' hsl(7, 99%, 70%)',
        yellow: 'hsl(51, 100%, 49%)',
        'dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
        'dark-blue': 'hsl(198, 62%, 26%)',
        'dark-moderate-cyan': 'hsl(168, 34%, 41%)',
      },
      screens: {
        desktop: '1440px',
        tablet: '768px',
      },
      borderRadius: {
        full: '50%',
      },
    },
  },
  plugins: [],
};
