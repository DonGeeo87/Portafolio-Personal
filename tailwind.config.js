/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        lg: '2.5rem'
      }
    },
    extend: {
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)'
        },
        surface: {
          card: 'var(--surface-card)',
          hover: 'var(--surface-card-hover)',
          border: 'var(--surface-border)'
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)'
        },
        accent: {
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
          tertiary: 'var(--accent-tertiary)'
        }
      },

      fontFamily: {
        sans: ['var(--font-primary)'],
        display: ['var(--font-secondary)'],
        heading: ['var(--font-secondary)'],
        mono: ['JetBrains Mono', 'monospace'],
      },

      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        full: 'var(--radius-full)'
      },

      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-glow': 'var(--gradient-glow)'
      },

      boxShadow: {
        glow: '0 0 40px rgba(124, 92, 255, 0.35)',
        soft: '0 10px 30px rgba(0, 0, 0, 0.4)'
      },

      backdropBlur: {
        glass: '12px'
      },

      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    }
  },
  plugins: []
}
