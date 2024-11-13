/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { primary:"#774337", secondary:"#4a1e1b", brandDark:"#270c03" },
      fontFamily: { sans: ["Poppins", "sans-serif"], cursive: ["Pacifico","cursive" ]},
      container: {
        center: "true",
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },

    },
  },
  plugins: [],
};
