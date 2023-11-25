/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "#EFF5FF",
        "border-color": "#D6D9E6",
        denim: "#022959",
        grey: "#9699AA",
        "light-blue": "#ABBCFF",
        "light-grey": "#D6D9E6",
        orange: "#FFAF7E",
        pink: "#F9818E",
        purple: "#483EFF",
        "red-error": "#EE374A",
        "sky-blue": "#BEE2FD",
        "very-light-grey": "#F8F9FF",
        white: "#FFFFFF",
      },
      fontSize: {
        sm: "12px",
        md: "14px",
        lg: "16px",
        xl: "32px",
      },
      fontFamily: {
        primary: "Ubuntu, sans-serif",
      },
      backgroundImage: {
        "stepper-bg": "url('./assets/stepper-bg.png')"
      }
    },
  },
  plugins: [],
};
