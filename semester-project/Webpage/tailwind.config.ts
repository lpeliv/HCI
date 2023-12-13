import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        "roboto-condensed": ["var(--font-roboto-condensed)"],
        inter: ["var(--font-inter)"],
        playfair: ["var(--font-playfair)"],
      },
      colors: {
        "brand-blue": {
          50: "#e6efff",
          100: "#b0ceff",
          200: "#8ab7ff",
          300: "#5496ff",
          400: "#3381ff",
          500: "#0062ff",
          600: "#0059e8",
          700: "#0046b5",
          800: "#00368c",
          900: "#00296b",
        },
      },
    },
  },
  plugins: [],
}
export default config
