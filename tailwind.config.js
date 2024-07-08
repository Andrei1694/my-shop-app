/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "text-white": "#fff",
        "ui-gray-20": "#f8f7fa",
        "ui-gray-60": "#a6a6aa",
        "ui-gray-80": "#3a3a3a",
        "text-gray-40": "#cbcbd4",
        "text-gray-100": "#000",
        "primary-yellow": "#ffe202",
        "ui-gray-100": "#262c35",
        "secondary-blue-20": "#ecf6ff",
        "secondary-blue": "#5fa1d5",
        "secondary-green-20": "#eaf8ec",
        "text-green": "#51b960",
        "accents-teal": "#30d6b0",
        "accents-orange": "#fdbc1f",
        "accents-indigo": "#4269f2",
        "accents-red": "#fe8668"
      },
      "spacing": {},
      "fontFamily": {
        "text-label-12px-12": "Lato"
      },
      "borderRadius": {
        "mini": "15px",
        "81xl": "100px",
        "3xs": "10px",
        "8xs": "5px",
        "12xs": "1px"
      }
    },
    "fontSize": {
      "base": "16px",
      "xs": "12px",
      "xl": "20px",
      "9xl": "28px",
      "inherit": "inherit"
    }
  },
  "corePlugins": {
    "preflight": false
  }
}