import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      "backgroundColor": {
        "primary" : {
          "default": "rgba(11, 130, 227,1)",
          "hover": "rgba(8, 113, 199,1)",
          "active": "rgba(4, 98, 176,1)"
        },
        "success": {
          "default": "rgba(17, 191, 11,1)",
          "hover": "rgba(15, 161, 10,1)",
          "active": "rgba(9, 112, 6,1)"

        },
        "danger": "rgba(227, 2, 14,1)"
      },
      
      "boxShadow": {
        "primary": "0 0 0 5px rgba(23, 93, 150,.3)",
        "success": "0 0 0 5px rgba(32, 168, 70,.3)",
        "danger": "0 0 0 5px rgba(181, 16, 25, .3)"
      },
      "outlineColor" : {
        "primary": "rgba(23, 93, 150,.5)",
        "success": "rgba(32, 168, 70, .5)",
        "danger": "rgba(181, 16, 25, .5)"
      }
    },
  },
  plugins: [require("tailwindcss-animate"), require("flowbite/plugin")],
} satisfies Config;

export default config;
