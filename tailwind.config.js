/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        primarydark: "var(--primary-dark)",
        muted: "var(--muted)",
        accent: "var(--accent)",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      fontFamily: {
        "google-sans-flex": ['"Google Sans Flex"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
