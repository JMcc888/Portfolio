/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  "./views/*.ejs"],
  theme: {
    extend: {},
  },
  purge: ["./views/*.ejs"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["synthwave"]
  }
}

