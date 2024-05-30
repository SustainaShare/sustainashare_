/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E43B11',
        button: '#28A963',
        fontWhiteBg: '#232026',
        fontTintedBg: '#EBEAEA',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}

