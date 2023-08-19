/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  daisyui: {
    themes: [
      {
        whiteSoft: {

          "primary": "#23324D",

          "secondary": "#d926a9",

          "accent": "#1fb2a6",

          "neutral": "#2a323c",

          "info": "#23324D",

          "success": "#36d399",

          "warning": "#fbbd23",

          "error": "#f87272",
        },
      },
    ],
  },
  theme: {
      screens: {
        'xs': '440px',
        // => @media (min-width: 440px) { ... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary-blue': '#23324D',
      'primary-light-blue': '#E1EAF7',
      'primary-grey': '#F6F8FB',
      'white': '#FFFFFF',
      'text-black': '#1B1B1B',
      'text-grey': '#686D78',
      'blue-1': '#BED8FF',
      'blue-2': '#B4CDF2',
      'blue-3': '#B6C9E3',
      'blue-4': '#9BB1D1',
      'blue-5': '#97A4BB',
      'blue-6': '#636B7A',
      'blue-7': '#192438',
      'blue-8': '#151E2E',
      'error':'#F97364',
      'black-rgba':'rgba(0,0,0,0.90)'
    },
    extend: {
      fontFamily:{
        'primary': ['Montserrat']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
      require("@tailwindcss/typography"),
      require("daisyui")
  ],
}
