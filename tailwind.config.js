/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,json,md,mdx}",
  ],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  theme: {
    screens: {
      xsm: "320px",
      // => @media (min-width: 320px) { ... }

      sm: "440px",
      // => @media (min-width: 425px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1500px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        cardShadow: "0px 4px 38px rgba(123, 63, 228, 0.16)",
        buttonShadow: "0px 0px 10px rgba(65, 14, 173, 0.7)",
        pocShadow: "0px 0px 23px rgba(73, 73, 73, 0.1)",
        contactShadow: "0px 0px 15px rgba(65, 14, 173, 0.19)",
        contactInnerShadow: "0px 8px 8px rgba(65, 14, 173, 0.08)",
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": {
              content: "none",
            },
            "blockquote p:first-of-type::after": {
              content: "none",
            },
          },
        },
      },
      colors: {
        "regal-purple": "#410EAD",
        "regal-purple-light": "#7B3FE4",
        "regal-yellow": "#FFCF10",
        "regal-blue": "#1A2B6B",
      },
    },
    variants: {
      fill: ["hover", "focus"], // this line does the trick
    },
    transitionProperty: {
      height: "height",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
