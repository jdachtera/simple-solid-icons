import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import path from 'path';

export default defineConfig({
  plugins: [solid()],
  build: {
    outDir: 'dist/icons',
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['solid-js', 'solid-js/web'],
    },
    target: 'esnext',
    minify: false,
    emptyOutDir: true,
  },
});
