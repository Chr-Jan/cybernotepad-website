/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          'pure-black': '#000000',
          'near-black': '#0a0a0a',
          'surface-1': '#141414',
          'surface-2': '#1e1e1e',
          'surface-3': '#282828',
        },
        text: {
          primary: '#e4e4e7',
          secondary: '#a1a1aa',
          tertiary: '#71717a',
          inverse: '#0a0a0a',
        },
        accent: {
          primary: '#00e5ff',
          'primary-hover': '#00b8cc',
          secondary: '#22c55e',
          tertiary: '#a855f7',
        },
        semantic: {
          success: '#22c55e',
          warning: '#f59e0b',
          error: '#ef4444',
          info: '#3b82f6',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      fontSize: {
        hero: '56px',
        h1: '40px',
        h2: '32px',
        h3: '24px',
        'body-lg': '18px',
        body: '16px',
        small: '14px',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
      },
      boxShadow: {
        'card': '0 0 0 1px rgba(255,255,255,0.1), 0 4px 12px rgba(0,0,0,0.5)',
        'card-hover': '0 0 0 1px rgba(255,255,255,0.15), 0 8px 24px rgba(0,0,0,0.6)',
        'glow-sm': '0 0 12px rgba(0,229,255,0.4)',
        'glow-md': '0 0 20px rgba(0,229,255,0.5), 0 0 40px rgba(0,229,255,0.3)',
        'glow-lg': '0 0 30px rgba(0,229,255,0.6), 0 0 60px rgba(0,229,255,0.4)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 12px rgba(0,229,255,0.4)' },
          '100%': { boxShadow: '0 0 20px rgba(0,229,255,0.6), 0 0 40px rgba(0,229,255,0.4)' },
        },
      },
    },
  },
  plugins: [],
}
