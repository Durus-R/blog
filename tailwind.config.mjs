/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "skew-scroll": "skew-scroll 24s linear infinite",
        
      },
      colors: {
        "secondary": "#1a1a1a",
        primary: {
          50: "#eff6ff",
          100: "#fef0db",
          200: "#fedbbf",
          300: "#fdbf93",
          400: "#fab760",
          500: "#d26019",
          600: "#eb8f25",
          700: "#d8711d",
          800: "#af701e",
          900: "#8a4f1e",
          950: "#1a1a1a",
        },
      },
    },
    fontFamily: {
      body: [
        "IndustryBlack",
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "IndustryBlack",
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    keyframes: {
      "skew-scroll": {
        "0%": {
          transform:
            "rotatex(13deg) rotateZ(-13deg) skewX(13deg) translateZ(0) translateY(110%)",
        },
        "95%": {
          opacity: 1,
        },
        "100%": {
          transform:
            "rotatex(13deg) rotateZ(-13deg) skewX(13deg) translateZ(0) translateY(-430%)",
            opacity: 0,
        },
      },

    },

  },
  plugins: [],
};
