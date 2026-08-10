/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // koyu tema yuzeyleri + amber aksan (kitap kapagi tonu)
        surface: {
          0: "#0a0a0a",
          1: "#141414",
          2: "#1e1e1e",
          3: "#2a2a2a",
        },
        accent: {
          DEFAULT: "#f5a623",
          soft: "#3a2e12",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
