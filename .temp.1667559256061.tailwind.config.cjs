/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        mplus: ["'M PLUS Rounded 1c'", 'Verdana', 'sans-serif']
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(-30deg)' }
          '0%, 100%': { transform: 'rotate(-30deg)' }
        }
      }
    }
  },
  plugins: []
}
