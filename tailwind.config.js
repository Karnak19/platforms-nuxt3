module.exports = {
  content: [
    "./pages/**/*.vue",
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    ,
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["forest"],
  },
};
