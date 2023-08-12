/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh']
      },
      colors: {
        'main-issue-1': '#DC143C',
        'main-issue-2': '#F0E68C'
      },
      fontFamily: {
        'nice-bold-italic': ['NICE_BOLD_ITALIC', 'cursive'],
        'nice-bold': ['NICE_BOLD', 'sans-serif'],
        'nice-italic': ['NICE_ITALIC', 'cursive'],
        'nice-regular': ['NICE_REGULAR', 'sans-serif'],
        'yuni-black': ['YUNI_BLACK', 'sans-serif'],
        'yuni-hair': ['YUNI_HAIR', 'sans-serif']
      }
    }
  },
  plugins: []
};
