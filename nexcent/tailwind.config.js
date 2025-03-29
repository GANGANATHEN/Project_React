/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure Tailwind works in all files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Custom blue color
        secondary: "#9333EA", // Custom purple
        accent: "#FACC15", // Custom yellow
        dark: "#0F172A", // Custom dark mode background
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Add Inter font
      },
    },
  },
  plugins: [],
};
