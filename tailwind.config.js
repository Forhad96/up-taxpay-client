module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Define your primary color here
        primaryClr: "#DC3545", // Replace with your desired color code
        secondaryClr: "#22C55E", // Replace with your desired color code
        accentClr:'#65c50a',
        hoverClr:'#5bb10a'
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emerald"],
  },
};
