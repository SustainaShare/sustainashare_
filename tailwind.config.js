/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E43B11',
          light: '#F06845', // Lighter shade of primary
        },
        button: {
          DEFAULT: '#28A963',
          light: '#4FC287', // Lighter shade of button
        },
        fontWhiteBg: {
          DEFAULT: '#232026',
          light: '#3B373D', // Lighter shade of fontWhiteBg
        },
        fontTintedBg: {
          DEFAULT: '#EBEAEA',
          light: '#F2F1F1', // Lighter shade of fontTintedBg
        },
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}
