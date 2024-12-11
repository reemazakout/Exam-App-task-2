/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "700px",
        md: "1340px",
        lg: "1550x",
        xl: "1900px",
       
      },
    },
    extend: {
      colors: {
        primary: "#4461F2",
        secondary: "#0F0F0F",
        lightblue: "#EDEFF3",
        white: "#F9F9F9",
        black: "#0F0F0F",
      },
    },
  },
  plugins: [],
};

export default config;
