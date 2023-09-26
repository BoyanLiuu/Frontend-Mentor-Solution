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
        lightBlue: '#666CA3',
        darkBlue: '#13183F',
        gray: '#83869A',
        pink: '#F74780',
        lightPink: '#FFA7C3',
      },
      fontSize: {
        'header-xl': ['56px', { lineHeight: '70px', fontWeight: '700' }],
        'header-l': ['40px', { lineHeight: '51px', fontWeight: '700' }],
        'header-m': ['32px', { lineHeight: '40px', fontWeight: '700' }],
      },
      borderRadius: {
        card: '15px',
      },
      backgroundImage: {
        'gradient-orange-pink':
          'linear-gradient(180deg, #ff6f48 0.04%, #f02aa6 100%)',
        'gradient-blue-purple':
          'linear-gradient(180deg, #4851FF 0%, #F02AA6 100%)',
        'gradient-white-gray':
          'linear-gradient(180deg, white 0%, #F0F1FF 100%)',
      },
      backgroundPosition: {
        'hero-desktop': 'top -143px right -218px',
        'hero-tablet': 'top -50px right -190px ',
        'hero-phone': 'top 410px center',
      },
      maxWidth: {
        'main-container': '1100px',
      },
      screens: {
        desktop: '1440px',
        tablet: '768px',
        phone: '375px',
      },
    },
  },
  plugins: [],
};
