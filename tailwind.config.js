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
          white: '#FAF7F0',
          aged: '#ECE4D4',
          tan: '#DFD5C2',
          rule: '#D6CCB8',
        },
        ink: {
          black: '#0A0A0A',
          charcoal: '#1A1A1A',
          deep: '#141414',
          muted: '#5A5A5A',
          grey: '#767676',
          light: '#9E9E9E',
        },
        vintage: {
          red: '#171717', // High-fashion monochrome primary
          accent: '#8C1D18', // Tasteful deep ruby collector accent when needed
          silver: '#E2E8F0',
          chrome: '#F1F5F9',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        display: ['"Bodoni Moda"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', '"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Courier New"', 'monospace'],
      },
      boxShadow: {
        'glossy': '0 4px 20px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
        'glossy-lg': '0 20px 40px -15px rgba(0, 0, 0, 0.12), 0 0 1px 1px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
        'glossy-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
        'editorial': '3px 3px 0px #0A0A0A',
      },
      backgroundImage: {
        'glossy-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)',
        'sheen': 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)',
      }
    },
  },
  plugins: [],
}