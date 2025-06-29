import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { join } from 'path'

export default defineConfig({
  plugins: [solid()],
  server: {
    port: 5173,
    fs: {
      allow: [
        '.',
        '..',
        join(__dirname, '../src'),
        join(__dirname, '..')
      ]
    }
  },
  resolve: {
    preserveSymlinks: true
  },
  build: { target: 'esnext' },
})
