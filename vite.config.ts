import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { resolve } from 'path'
import { readdirSync, statSync } from 'fs'

// Get all icon sets dynamically
const getIconSets = () => {
  const generatedPath = resolve(__dirname, 'src/generated')
  try {
    return readdirSync(generatedPath).filter(dir => 
      statSync(resolve(generatedPath, dir)).isDirectory()
    )
  } catch {
    return []
  }
}

const iconSets = getIconSets()

export default defineConfig({
  plugins: [solid({ ssr: true })],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        ...Object.fromEntries(
          iconSets.map(set => [
            `${set}/index`,
            resolve(__dirname, `src/generated/${set}/index.ts`)
          ])
        )
      },
      formats: ['es']
    },
    rollupOptions: {
      external: ['solid-js'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js'
      }
    },
    sourcemap: true,
    target: 'esnext'
  }
})
