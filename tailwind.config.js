/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aged newsprint
        paper: {
          warm: '#F4EBD8',   // page stock
          white: '#FBF6E9',  // form fields, raised panels
          aged: '#E9DDC2',   // tinted blocks, photo placeholders
          rule: '#CDBF9F',   // hairline column and row rules
        },
        // Warm printing ink
        ink: {
          black: '#2A2124',
          charcoal: '#3A3033',
          muted: '#625659',
          light: '#9C917C',
        },
        // Spot colour, used sparingly for kickers and errors
        press: {
          DEFAULT: '#9A1B1B',
          dark: '#7A1414',
        },
        whatsapp: '#1F8F4E',
      },
      fontFamily: {
        // Nameplate: huge condensed heavy sans, as on a front page
        nameplate: ['Anton', 'Impact', '"Arial Narrow"', 'sans-serif'],
        // Headlines (set in capitals), decks, pull quotes
        serif: ['"Libre Caslon Text"', 'Georgia', '"Times New Roman"', 'serif'],
        // Body copy and form text
        body: ['"Libre Caslon Text"', 'Georgia', '"Times New Roman"', 'serif'],
        // Subheads, kickers, dateline, labels, buttons, navigation: condensed bold
        sans: ['"Barlow Condensed"', '"Arial Narrow"', 'Arial', 'sans-serif'],
        mono: ['"Courier Prime"', '"Courier New"', 'monospace'],
      },
      maxWidth: {
        page: '76rem',
      },
    },
  },
  plugins: [],
}
