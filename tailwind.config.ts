import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f6f5e6",
          100: "#efedd1",
          200: "#dfdca8",
          300: "#cfcc80",
          400: "#bfb95c",
          500: "#a6a04d",
          600: "#958f39",
          700: "#716c2a",
          800: "#4d491c",
          900: "#2a2610",
          DEFAULT: "#958f39",
        }
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.1)"
      }
    },
  },
  plugins: [],
};
export default config;
