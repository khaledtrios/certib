import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "crtib-green": "#2C8C5B",
        "crtib-gray-light": "#F5F5F5",
        "crtib-gray-dark": "#3B3B3B",
        "crtib-white": "#FFFFFF",
        "crtib-green-blue": "#37C2A2",
        "crtib-green-back": "#31AF91",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "Dosis",
          "Impact",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        clauses: ["var(--font-dosis)", "Impact", "sans-serif"],
        download: ["Open Sans", "Arial", "Helvetica", "sans-serif"],
        grid: ["Open Sans", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
