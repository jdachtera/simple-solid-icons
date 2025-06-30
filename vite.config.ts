import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { join } from 'path'

export default defineConfig({
  plugins: [solid()],
  server: {
    port: 5173,
  },
  resolve: {
    preserveSymlinks: true
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Group all icons from the same set into a single chunk per set
          // Adjust the regex if your folder structure changes
          const match = id.match(/src[\\/](\w+)[\\/]/)
          if (match) {
            return `icon-set-${match[1]}`
          }
        }
      }
    }
  },
})
