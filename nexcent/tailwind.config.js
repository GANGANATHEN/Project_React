/** @type {import('tailwindcss').Config} */
// import { defineConfig } from 'vite'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ Ensure Tailwind scans all files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff", // ✅ Ensure valid hex format
        secondary: "#9333EA",
        accent: "#FACC15",
        dark: "#0F172A",
        green: "#3B82F6",
        "black-200": "#090325",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
  };
  