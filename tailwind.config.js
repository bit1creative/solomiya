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
