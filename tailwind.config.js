/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          warm: '#F5F0E6',
          white: '#FAF9F5',
          aged: '#D8CFBE',
          tan: '#EFE9DD',
          rule: '#E2D9C8',
        },
        ink: {
          black: '#171717',
          charcoal: '#292929',
          muted: '#524F49',
          grey: '#85827B',
          light: '#A39F97',
        },
        vintage: {
          red: '#9F3029',
          crimson: '#82241E',
          accent: '#B83A32',
          gold: '#C59A53',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        display: ['"Playfair Display"', 'Bodoni Moda', 'Georgia', 'serif'],
        sans: ['Inter', '"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Courier New"', 'monospace'],
      },
      boxShadow: {
        'paper': '0 1px 3px rgba(23, 23, 23, 0.05), 0 10px 25px -5px rgba(23, 23, 23, 0.04)',
        'paper-lg': '0 20px 40px -15px rgba(23, 23, 23, 0.08)',
        'editorial': '3px 3px 0px #171717',
        'editorial-red': '3px 3px 0px #9F3029',
      },
      backgroundImage: {
        'newsprint-dot': 'radial-gradient(#85827b 0.75px, transparent 0.75px)',
      }
    },
  },
  plugins: [],
}
