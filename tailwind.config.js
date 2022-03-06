module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      borderColor: theme => ({
        ...theme("colors"),
        "secondary": "#222"
      })
    },
  },
  plugins: [],
}
