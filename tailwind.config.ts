import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'groupon-green': '#177C1F',
        'groupon-purple': '#702082',
        'promo-bg': '#F3E5F5',
        'star-yellow': '#F5A623',
        'text-main': '#2D2D2D',
        'text-sub': '#757575',
        'text-muted': '#BDBDBD',
        'border-line': '#E0E0E0',
        'border-input': '#CCCCCC',
      },
      fontFamily: {
        sans: ['"Nunito Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
