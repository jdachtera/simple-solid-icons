import { createSignal, For, onMount } from 'solid-js'
import { iconSetConfigs } from '../../iconSets.config'

interface IconSet {
  name: string
  icons: Record<string, any>
  importPathPrefix: string
}

const ICON_SETS: IconSet[] = []

onMount(async () => {
  for (const set of iconSetConfigs) {
    if ('variants' in set) {
      for (const variant of set.variants) {
        const mod = await import(`../../src/${set.name}/${variant.variant}`)
        ICON_SETS.push({
          name: variant.componentPrefix,
          icons: mod,
          importPathPrefix: `../../src/${set.name}/${variant.variant}`,
        })
      }
    } else {
      const mod = await import(`../../src/${set.name}`)
      ICON_SETS.push({
        name: set.componentPrefix,
        icons: mod,
        importPathPrefix: `../../src/${set.name}`,
      })
    }
  }
})

function getAllIcons() {
  return ICON_SETS.flatMap(set =>
    Object.entries(set.icons).map(([name, Icon]) => ({
      set: set.name,
      name,
      Icon,
      importPath: `import { ${name} } from '${set.importPathPrefix}'`,
    }))
  )
}

export default function App() {
  const [search, setSearch] = createSignal('')
  const [icons, setIcons] = createSignal<any[]>([])

  onMount(() => {
    setIcons(getAllIcons())
  })

  const filteredIcons = () =>
    icons().filter(
      i =>
        i.name.toLowerCase().includes(search().toLowerCase()) ||
        i.set.toLowerCase().includes(search().toLowerCase())
    )

  return (
    <div class="min-h-screen bg-gray-50 text-gray-900 p-4">
      <h1 class="text-3xl font-bold mb-2 text-center">simple-solid-icons</h1>
      <p class="mb-6 text-center text-gray-600">
        Search, preview, and copy import for any icon.
      </p>
      <div class="flex justify-center mb-6">
        <input
          class="border rounded px-3 py-2 w-full max-w-md shadow focus:outline-none focus:ring focus:border-blue-400"
          type="text"
          placeholder="Search icons..."
          value={search()}
          onInput={e => setSearch(e.currentTarget.value)}
        />
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
        <For each={filteredIcons()}>
          {({ Icon, name, set, importPath }) => (
            <div class="flex flex-col items-center bg-white rounded shadow p-3 hover:shadow-lg transition group">
              <Icon
                size={32}
                class="mb-2 text-blue-500 group-hover:text-blue-700"
              />
              <div class="text-xs font-mono text-gray-700 mb-1 text-center">
                {name}
              </div>
              <div class="text-[10px] text-gray-400 mb-2">{set}</div>
              <button
                class="text-xs bg-blue-100 hover:bg-blue-300 text-blue-800 rounded px-2 py-1 transition"
                onClick={() => navigator.clipboard.writeText(importPath)}
              >
                Copy Import
              </button>
            </div>
          )}
        </For>
      </div>
      <footer class="mt-12 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} simple-solid-icons &mdash; Powered by
        SolidJS
      </footer>
    </div>
  )
}
