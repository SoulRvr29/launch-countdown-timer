/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Grayish-blue": "hsl(237, 18%, 59%)",
        "Soft-red": "hsl(345, 95%, 68%)",
        White: "hsl(0, 0%, 100%)",
        "Dark-desaturated-blue": "hsl(236, 21%, 26%)",
        "Dark-blue": "hsl(235, 16%, 14%)",
        "Very-dark-blue": "hsl(234, 17%, 12%)",
      },
      fontFamily: {
        "Red-Hat": ["Red Hat Text", "sans-serif"],
      },
    },
    plugins: [],
  },
};
