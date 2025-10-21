import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'groupon-green': '#53a318',
        'groupon-green-dark': '#428913',
        'groupon-purple': '#6c42e5',
      },
    },
  },
  plugins: [],
}
export default config

