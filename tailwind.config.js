/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#F4F4F4",
        secondary: "#E1EEFF",
        tertiary: "#F4F4F4",
      },
      backgroundImage: {
        "img-doctor":"url('../../public/ellipse.png')",
      },
      backgroundPosition: {
        "potion-doctor": "bottom right",
      },
    },
  },
  plugins: [],
};
