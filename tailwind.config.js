/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors:{
        'chip':{100:'#E6D6FC',
                200:'#883AE1'},
        'card':{100:'#FFFFFF',
        200:'#FAFAF9',
      300:'#6C727F',
    400:'#20293A'},
      },
      fontFamily:{
        "sora":["Sora Variable", "sans-serif"],
      }
    },
  },
  plugins: [],
}

