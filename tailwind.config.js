/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      keyframes: {
        slideAnimation: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        reverseSlideAnimation: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slide: 'slideAnimation 20s infinite linear',
        reverseSlide: 'reverseSlideAnimation 20s infinite linear',
  
      },
      extend: {
        backgroundColor: {
          red: "#9B2C47",
          redLight:"#fadfe5",
          yellow:"#E0AC08"
        },
        colors: {
          red: "#9B2C47",
          redLight:"#fadfe5",
          yellow:"#E0AC08"
  
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      },
    },
  },
  plugins: [],
};
