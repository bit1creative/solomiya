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
      }
    }
  },
  plugins: []
};
