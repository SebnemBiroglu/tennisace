import { resolve } from 'path'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        booking: resolve(__dirname, 'booking.html'),
        classes: resolve(__dirname, 'classes.html'),
      },
    },
  },
})