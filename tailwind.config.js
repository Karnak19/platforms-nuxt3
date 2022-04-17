module.exports = {
  content: ["./pages/**/*.vue", "./components/**/*.vue", "./app.vue"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["garden"],
  },
};
