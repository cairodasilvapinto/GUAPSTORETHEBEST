export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "preto-claro": "#111111",
        "cinza": "#444444",
      },
      backgroundImage: {
        'fundo-site': "url('./Assets/bg.jpg')",
      },
    },
  },
  plugins: [],
}