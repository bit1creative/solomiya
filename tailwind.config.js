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
      colors: {
        'main-issue-1': '#e6363f',
        'main-issue-2': '#ffee00'
      },
      fontSize: {
        'lg-xl': 'clamp(10rem, 15vw, 16rem);',
        'lg-2xl': 'clamp(12rem, 10vw, 18rem);',
        '4xl': 'clamp(1.5rem, 5vw, 2.5rem);',
        '5xl': 'clamp(2rem, 5vw, 3rem);',
        '6xl': 'clamp(2.5rem, 5vw, 3.75rem);',
        '8xl': 'clamp(2.5rem, 5vw, 4.75rem);',
        '10xl': 'clamp(4rem, 10vw, 6rem);'
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
