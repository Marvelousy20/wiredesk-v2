import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#6941C6",
        "primary-highlight": "#7149CE26",
        "primary-v2": "#B699F9",
        "primary-light": "#EBE7F8",
        "notification-red": "#C92519",
        "alt-green": "#61C554",
        yellow: "#FFCC00",
        white: "#FFFFFF",
        "white-70": "#B8B8B8",
        gray: "#EEEFF1",
        grid: "#EEEFF1",
        "gray-60": "#F1F0F499",
        darkest: "#101010",
        black: "#232529",
        "dark-grey": "#323232",
        inactive: "#686662",
        "inactive-60": "#68666299",
        "inactive-dark": "#68666299",
        "divider-on-light": "#E9E9E9",
        "divider-on-dark": "#2B2B2B",
        sbbt: "#37352FBF",
        green: "#168907",
      },
      fontSize: {
        xxs: [
          "12px",
          {
            lineHeight: "16px",
          },
        ],
        xs: [
          "13px",
          {
            lineHeight: "20px",
          },
        ],
        sm: [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "-0.01em",
          },
        ],
        md: [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
        lg: [
          "18px",
          {
            lineHeight: "28px",
          },
        ],
        xl: [
          "20px",
          {
            lineHeight: "32px",
          },
        ],
        "2xl": [
          "24px",
          {
            lineHeight: "32px",
          },
        ],
        "3xl": [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "-0.5px",
          },
        ],
        "4xl": [
          "40px",
          {
            lineHeight: "48px",
            letterSpacing: "-0.5px",
          },
        ],
        "5xl": [
          "48px",
          {
            lineHeight: "56px",
            letterSpacing: "0.005em",
          },
        ],
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "trial-shadow": "0px 0px 0px 1px #FBF197 inset",
        "connectivity-shadow": "4px 4px 20px 0px #00000012",
        filter: "0px 0px 36px 0px #0000001F",
      },
      width: {
        "54": "54px",
        "232": "232px",
        "288": "288px",
        "626": "626px",
        "264": "264px",
        "48": "48px",
        "1512": "1512px",
      },
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
