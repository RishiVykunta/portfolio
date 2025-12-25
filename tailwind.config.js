/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--bg))",
        card: "rgb(var(--card))",
        foreground: "rgb(var(--text))",
        muted: "rgb(var(--muted))",
        border: "rgb(var(--border))",
        accent: "rgb(var(--accent))",
      },
    },
  },
  plugins: [],
};
