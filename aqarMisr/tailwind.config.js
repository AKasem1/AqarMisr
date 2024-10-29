/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "plex-sans": ["IBM Plex Sans Arabic", "sans-serif"],
      },
      boxShadow: {
        'inner-strong': 'inset 0 2px 3px rgba(0, 0, 0, 0.6)', // Increase intensity as needed
      },
    },
  },
  plugins: [],
};
