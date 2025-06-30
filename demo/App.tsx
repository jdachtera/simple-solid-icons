import { createSignal, For, createResource, Show, createEffect } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { iconIndex, IconIndexEntry } from './iconIndex'
import { iconSetConfigs } from '../iconSets.config'




export default function App() {

  location.hash = location.hash || `#${iconIndex[0].set}`
  const [search, setSearch] = createSignal('')
  const [selectedSet, setSelectedSet] = createSignal(location.hash.slice(1) || iconIndex[0].set)
  const [iconSize, setIconSize] = createSignal(32)
  const [iconStrokeWidth, setIconStrokeWidth] = createSignal(2)
  // Checkbox: true = 'currentColor', false = 'none'
  const [iconFillChecked, setIconFillChecked] = createSignal(false)
  const [iconStrokeChecked, setIconStrokeChecked] = createSignal(true)

  // Derived values for fill and stroke
  const iconFill = () => iconFillChecked() ? 'currentColor' : 'none'
  const iconStroke = () => iconStrokeChecked() ? 'currentColor' : 'none'

  createEffect(() => {
    const set = selectedSet()
    const config = iconSetConfigs.find(s => s.name.toLowerCase() === set.toLowerCase())
    if (config) {
      location.hash = `#${set}`
      setIconSize(config.defaultProps?.size || 32)
      setIconStrokeWidth(config.defaultProps?.['stroke-width'] || 2)
      setIconFillChecked((config.defaultProps?.fill || 'none') === 'currentColor')
      setIconStrokeChecked((config.defaultProps?.stroke || 'currentColor') === 'currentColor')
    }
  })


  // Get unique set names from iconIndex
  const setNames = [ ...Array.from(new Set(iconIndex.map(i => i.set)))]

  // Filtered icons based on set and search
  const filteredIcons = () =>
    iconIndex
      .filter(
        i =>
          i.set === selectedSet() &&
          (i.name.toLowerCase().includes(search().toLowerCase()) ||
            i.set.toLowerCase().includes(search().toLowerCase()))
      )
      .slice(0, 10)

  
  function useIconLoader(icon: IconIndexEntry) {
    return createResource(
      () => icon,
      async ({ name, set,variant }) => {
        if (variant) {
        const mod = await import(`../src/${set.toLowerCase()}/${variant}/${name}.jsx`)
        return mod[name]

        } else {
          const mod = await import(`../src/${set.toLowerCase()}/${name}.jsx`)
        return mod[name]
        }
      }
    )
  }

  return (
    <div class="min-h-screen bg-gray-50 text-gray-900 p-4">
      <h1 class="text-3xl font-bold mb-2 text-center">simple-solid-icons</h1>
      <p class="mb-6 text-center text-gray-600">
        Search, preview, and copy import for any icon.
      </p>
      <div class="flex flex-wrap justify-center gap-2 mb-4">
        <For each={setNames}>
          {setName => (
            <button
              class={`px-3 py-1 rounded-full border text-xs font-semibold transition
                ${selectedSet() === setName ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-blue-500 border-blue-300 hover:bg-blue-100'}`}
              onClick={() => setSelectedSet(setName)}
            >
              {setName}
            </button>
          )}
        </For>
      </div>
      <div class="flex justify-center mb-6">
        <input
          class="border rounded px-3 py-2 w-full max-w-md shadow focus:outline-none focus:ring focus:border-blue-400"
          type="text"
          placeholder="Search icons..."
          value={search()}
          onInput={e => setSearch(e.currentTarget.value)}
        />
      </div>
      <div class="flex flex-wrap justify-center gap-4 mb-6 items-center">
        <div class="flex items-center gap-2">
          <label for="icon-size" class="text-xs text-gray-600">
            Size
          </label>
          <input
            id="icon-size"
            type="range"
            min={0}
            max={7}
            step={1}
            value={[8,16,24,32,48,64,96,128].indexOf(iconSize())}
            onInput={e => setIconSize([8,16,24,32,48,64,96,128][Number(e.currentTarget.value)])}
            class="w-32 accent-blue-500"
          />
          <span class="text-xs text-gray-500">{iconSize()}px</span>
        </div>
        <div class="flex items-center gap-2">
          <label for="icon-stroke-width" class="text-xs text-gray-600">
            Stroke Width
          </label>
          <input
            id="icon-stroke-width"
            type="range"
            min={0}
            max={6}
            step={1}
            value={[0.125,0.25,0.5,1,2,4,8].indexOf(iconStrokeWidth())}
            onInput={e => setIconStrokeWidth([0.125,0.25,0.5,1,2,4,8][Number(e.currentTarget.value)])}
            class="w-32 accent-blue-500"
          />
          <span class="text-xs text-gray-500">{iconStrokeWidth()}</span>
        </div>
        <div class="flex items-center gap-2">
          <label for="icon-stroke" class="text-xs text-gray-600">
            Stroke
          </label>
          <input
            id="icon-stroke"
            type="checkbox"
            checked={iconStrokeChecked()}
            onInput={e => setIconStrokeChecked(e.currentTarget.checked)}
            class="accent-blue-500"
          />
        </div>
        <div class="flex items-center gap-2">
          <label for="icon-fill" class="text-xs text-gray-600">
            Fill
          </label>
          <input
            id="icon-fill"
            type="checkbox"
            checked={iconFillChecked()}
            onInput={e => setIconFillChecked(e.currentTarget.checked)}
            class="accent-blue-500"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        <For each={filteredIcons()}>
          {iconObj => {
            const [Icon, { loading }] = useIconLoader(iconObj)
            return (
              <div class="flex flex-col items-center bg-white rounded shadow p-3 hover:shadow-lg transition group">
                <Show
                  when={Icon()}
                  fallback={
                    <div class="w-8 h-8 mb-2 animate-pulse bg-blue-100 rounded" />
                  }
                >
                  <Dynamic
                    component={Icon()}
                    size={iconSize()}
                    stroke-width={iconStrokeWidth()}
                    stroke={iconStroke()}
                    fill={iconFill()}
                    class="mb-2 text-blue-500 group-hover:text-blue-700"
                  />
                </Show>
                <div class="text-xs font-mono text-gray-700 mb-1 text-center">
                  {iconObj.name}
                </div>
                <div class="text-[10px] text-gray-400 mb-2">{iconObj.set}</div>
                <button
                  class="text-xs bg-blue-100 hover:bg-blue-300 text-blue-800 rounded px-2 py-1 transition"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      `import { ${iconObj.name} } from '${iconObj.importPath.replace('../../src/', 'solid-icons-ssr/')}'`
                    )
                  }
                >
                  Copy Import
                </button>
              </div>
            )
          }}
        </For>
      </div>
      <footer class="mt-12 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} simple-solid-icons &mdash; Powered by
        SolidJS
      </footer>
    </div>
  )
}
