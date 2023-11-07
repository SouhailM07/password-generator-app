/** @type {import(tailwindcss).Config} */ export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neonGreen: "#a4ffaf",
        screen: "#0d0c12",
        componentsColor: "#24232b",
        labelsColor: "#53515a",
        bars: "#facd63",
        textColor: "#dedde2",
      },
      screens: {
        sm: "680px", // Custom small breakpoint
        md: "768px", // Custom medium breakpoint
        lg: "1024px", // Custom large breakpoint
        xl: "1280px", // Custom extra-large breakpoint
      },
    },
  },
  plugins: [],
};
