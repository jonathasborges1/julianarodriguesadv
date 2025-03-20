/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",  // 🟢 Garante que Tailwind funcione dentro de `src/`
    "./app/**/*.{js,ts,jsx,tsx}",  // 🟢 Se estiver usando App Router (Next.js 13+)
    "./pages/**/*.{js,ts,jsx,tsx}", // 🟢 Se estiver usando Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", // 🟢 Para os componentes
  ],
  theme: {
    extend: {
      scrollBehavior: ['smooth'], // 🔹 Ativa o Scroll Suave (Opcional)
      colors: {
        primary: "#1E3A8A", // 🔹 Adiciona uma cor azul-marinho personalizada
        accent: "#FACC15", // 🔹 Adiciona uma cor dourada personalizada
      },
    },
  },
  plugins: [],
};