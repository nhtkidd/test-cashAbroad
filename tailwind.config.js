/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { colors: {
      'purple-cash': '#5857D4',
      'barleft':'#FCFCFC',
      'dashboard': '#F2F4F6',
      'button': '#FCFCFC',
      'border': '#E5E7EB',
      'gray-table':'#9CA3AF',
      'gray-text': '#4B5563'

    },},
  },
  plugins: [],
}

