/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#517EA6",
          secondary: "#c892e5",
          accent: "#5959db",
          neutral: "#e5e6e6",
          "base-100": "#fcfcfd",
          info: "#2db2e6",
          success: "#20a783",
          warning: "#fca94f",
          error: "#e14e37",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#517EA6",
          secondary: "#c892e5",
          accent: "#5959db",
          neutral: "#20252e",
          "base-100": "#020203",
          info: "#2db2e6",
          success: "#20a783",
          warning: "#fca94f",
          error: "#e14e37",
        },
      },
    ],
  },
};
