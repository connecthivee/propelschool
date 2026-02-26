import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/propelschool/',
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          lottie: ['lottie-react'],
          form: ['react-hook-form', 'zod', '@hookform/resolvers'],
        },
      },
    },
  },
})
