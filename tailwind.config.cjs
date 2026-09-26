/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#090a09',
        bone: '#f0eee6',
        moss: '#b8d88a',
        acid: '#d4f59a',
        espresso: '#33251d'
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        script: ['Caveat', 'cursive']
      },
      boxShadow: {
        glow: '0 0 60px rgba(212,245,154,.16)'
      }
    }
  },
  plugins: []
};