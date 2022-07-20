/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts, tsx, js, jsx}", "./public/index.html", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide"), require('flowbite/plugin')],
};
