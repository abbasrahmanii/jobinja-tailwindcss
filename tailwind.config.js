// tailwind.config.js
module.exports = {
  //   purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "landing-page": "url('/src/images/asset 9.jpeg')",
      },
      colors: {
        nav: {
          DEFAULT: "#444444",
          active: "#505050",
          section: "#F5F5F5",
          li: "#666666",
          footer: "#999999",
        },
        button: {
          DEFAULT: "#FFD68A",
          hover: "#FFB833",
        },
        employee: {
          DEFAULT: "#25b5f3",
          immediate: "#D84A3E",
          hover: "#238fbd",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [require("tailwindcss-rtl")],
  corePlugins: {
    backgroundOpacity: true,
  },
};
