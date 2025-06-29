import { createSignal, For } from 'solid-js'
import * as TablerIcons from 'simple-solid-icons/tabler'
import * as HeroIcons from 'simple-solid-icons/heroicons'
import * as LucideIcons from 'simple-solid-icons/lucide'
import * as FeatherIcons from 'simple-solid-icons/feather'
import * as BootstrapIcons from 'simple-solid-icons/bootstrap'
import * as BoxIcons from 'simple-solid-icons/boxicons'
import * as SimpleIcons from 'simple-solid-icons/simpleicons'
import * as EvaIcons from 'simple-solid-icons/eva'
import * as Zondicons from 'simple-solid-icons/zondicons'
import * as Ionicons from 'simple-solid-icons/ionicons'
import * as Codicons from 'simple-solid-icons/codicons'

const ICON_SETS = [
  { name: 'Tabler', icons: TablerIcons },
  { name: 'Heroicons', icons: HeroIcons },
  { name: 'Lucide', icons: LucideIcons },
  { name: 'Feather', icons: FeatherIcons },
  { name: 'Bootstrap', icons: BootstrapIcons },
  { name: 'Boxicons', icons: BoxIcons },
  { name: 'SimpleIcons', icons: SimpleIcons },
  { name: 'Eva', icons: EvaIcons },
  { name: 'Zondicons', icons: Zondicons },
  { name: 'Ionicons', icons: Ionicons },
  { name: 'Codicons', icons: Codicons },
]

function getAllIcons() {
  return ICON_SETS.flatMap(set =>
    Object.entries(set.icons).map(([name, Icon]) => ({
      set: set.name,
      name,
      Icon,
      importPath: `import { ${name} } from 'simple-solid-icons/${set.name.toLowerCase()}'`,
    }))
  )
}

export default function App() {
  const [search, setSearch] = createSignal('')
  const allIcons = getAllIcons()
  const filteredIcons = () =>
    allIcons.filter(
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
