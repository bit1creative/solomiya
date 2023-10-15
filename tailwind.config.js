/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh']
      },
      minHeight: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh']
      },
      maxWidth: {
        limit: '1440px'
      },
      colors: {
        'main-issue-1': '#e6363f',
        'main-issue-2': '#ffee00'
      },
      fontSize: {
        '3xl': ['1.875rem', '2.5rem'],
        '4xl': ['clamp(2rem, 5vw, 2.25rem)', 'clamp(3rem, 5vw, 4rem)'],
        '5xl': ['3rem', '4rem'],
        '6xl': ['4rem', '5rem'],
        menu: ['4rem', '5rem'],
        'menu-lg': '10rem',
        'menu-xl': ['15rem', '15rem']
      },
      fontFamily: {
        'nice-bold-italic': ['NICE_BOLD_ITALIC', 'cursive'],
        'nice-bold': ['NICE_BOLD', 'sans-serif'],
        'nice-italic': ['NICE_ITALIC', 'cursive'],
        'nice-regular': ['NICE_REGULAR', 'sans-serif'],
        'yuni-black': ['YUNI_BLACK', 'sans-serif'],
        'yuni-hair': ['YUNI_HAIR', 'sans-serif']
      },
      keyframes: {
        'collapsible-open': {
          '0%': { height: 0 },
          '100%': { height: 'var(--radix-collapsible-content-height)' }
        },
        'collapsible-close': {
          '0%': { height: 'var(--radix-collapsible-content-height)' },
          '100%': { height: 0 }
        }
      }
    }
  },
  plugins: []
};
