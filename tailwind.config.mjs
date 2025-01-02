/** @type {Partial<CustomThemeConfig & {extend: Partial<CustomThemeConfig>}> & DefaultTheme} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            animation: {
                "skew-scroll": "skew-scroll 24s linear infinite",

            },
            colors: {

                },
            },
        },
        fontFamily: {
            body: [
                "Lato",
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
                "Lato",
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


    plugins: [require("daisyui")],
    daisyui: {
        themes: [{
            theLightTheme: {
                "primary": "#cf1d11",
                "secondary": "#975008",
                "accent": "#3e9107",
                "neutral": "#bd8137",
                "base-100": "#f1d55a",
                "info": "#000000" // we use this for icons. Do not Mind it :)
            }
        },
            {
                theDarkTheme: {
                    "primary": "#cf1d11",
                    "secondary": "#e67400",
                    "accent": "#ff82f9",
                    "neutral": "#3d4451",
                    "base-100": "#000000",
                    "info": "#ffffff",
                }
            }]
    }
};
