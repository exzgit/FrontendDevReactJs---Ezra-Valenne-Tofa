import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    proxy: {
      '/restaurants': {
        target: 'https://erestaurant-backend.up.railway.app',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
