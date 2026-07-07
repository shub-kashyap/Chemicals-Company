/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0C131F', // Midnight Dark (matching Industrie template dark sections)
          light: '#1A2536',
          dark: '#060B12',
        },
        royal: {
          // Re-mapped to Industrial Yellow-Orange (Primary Accent in Industrie template)
          DEFAULT: '#FFB700',
          light: '#FFC83B',
          dark: '#E09E00',
        },
        indigo: {
          // Re-mapped to Slate Gray (Secondary corporate accents)
          DEFAULT: '#475569',
          light: '#64748B',
          dark: '#334155',
        },
        cyan: {
          // Re-mapped to Bright Yellow (High Contrast Highlights)
          DEFAULT: '#FFD54F',
          light: '#FFE082',
          dark: '#FFCA28',
        },
        emerald: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(12, 19, 31, 0.04)',
        'glass-hover': '0 8px 32px 0 rgba(255, 183, 0, 0.12)',
        'soft': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
