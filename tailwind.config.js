/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "var(--primary-bg)",
        "primary-color": "var(--primary-color)",
      },
    },
  },
  plugins: [],
};
