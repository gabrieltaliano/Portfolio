module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["'Alfa Slab One'",'Graphik', 'sans-serif'],
        // serif: ['Merriweather', 'serif'],
        "alfa-slab": ["'Alfa Slab One'"],
        "IBM-Plex-Mono": ["'IBM Plex Mono'"]
      },

    },
  },
  plugins: [],
}
