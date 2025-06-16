// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // Asegúrate de incluir JSX
  ],
  theme: {
    extend: {
      animation: {
        shake: 'shake 0.5s ease',
      },
      keyframes: {
        shake: {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-5px)' },
          '40%': { transform: 'translateX(5px)' },
          '60%': { transform: 'translateX(-5px)' },
          '80%': { transform: 'translateX(5px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}