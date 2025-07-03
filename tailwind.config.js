// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          800: "#1e1e2f",
          900: "#12121c",
        },
        card: "#1a1a2e",
        primary: "#8b5cf6",
        accent: "#f87171",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
