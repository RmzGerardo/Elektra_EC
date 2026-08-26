export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // <-- Agrega esta línea para que lea tu carpeta de componentes
  ],
  theme: {
    extend: {},
  },
};
