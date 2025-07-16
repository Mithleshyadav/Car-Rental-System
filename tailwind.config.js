// const { Container } = require("postcss");

// module.exports = {
//   content: [
//     './src/**/*.{html,js,jsx,ts,tsx}', // Adjust paths based on your file structure
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {
//       colors: {
//         primary: "#ffc727",
//         dark: "#111111",
//       },
//       Container: {
//         center: true,
//         padding: {
//           DEFAULT: "1rem",
//           sm: "3rem",
//         },
//       },
//     },
//   },
//   plugins: [],
// };

const { Container } = require("postcss");

module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust paths based on your file structure
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ffc727",
        dark: "#111111",
      },
    },
    // Container configuration should be outside of `extend`
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
      },
    },
  },
  plugins: [],
};
