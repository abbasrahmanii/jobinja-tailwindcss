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
        },
        button: {
          DEFAULT: "#FFD68A",
          hover: "#FFB833",
        },
        employee: {
          DEFAULT: "#3AB1E4",
          immediate: "#D84A3E",
        },
      },
    },
  },
  variants: {
    extend: { backgroundColor: ["active"] },
  },
  plugins: [],
};
