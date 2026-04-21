import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Iridesca palette — warm off-white, sand, deep ink, driftwood
        shell: '#F5F0E8',
        pearl: '#FBF8F2',
        sand: '#E8DFD0',
        driftwood: '#8B7B65',
        ink: '#1A1714',
        stone: '#6B6358',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest: '0.3em',
      },
    },
  },
  plugins: [],
};

export default config;
