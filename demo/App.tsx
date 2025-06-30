import { createSignal, For, createResource, Show, createEffect } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { iconIndex, IconIndexEntry } from './iconIndex'
import { getSetDefaultProps, iconSetConfigs } from '../iconSets.config'

export default function App() {
  location.hash = location.hash || `#${iconIndex[0].set}`
  const [search, setSearch] = createSignal('')
  const [selectedSet, setSelectedSet] = createSignal(
    location.hash.slice(1) || iconIndex[0].set
  )
  const [iconSize, setIconSize] = createSignal(32)
  const [iconStrokeWidth, setIconStrokeWidth] = createSignal(2)
  // Checkbox: true = 'currentColor', false = 'none'
  const [iconFillChecked, setIconFillChecked] = createSignal(false)
  const [iconStrokeChecked, setIconStrokeChecked] = createSignal(true)

  // Derived values for fill and stroke
  const iconFill = () => (iconFillChecked() ? 'currentColor' : 'none')
  const iconStroke = () => (iconStrokeChecked() ? 'currentColor' : 'none')

  createEffect(() => {
    const set = selectedSet()
    const config = iconSetConfigs.find(
      s => s.name.toLowerCase() === set.toLowerCase()
    )
    if (config) {
      location.hash = `#${set}`

      const defaultProps = getSetDefaultProps(config)
      setIconSize(defaultProps.size)
      setIconStrokeWidth(defaultProps['stroke-width'])
      setIconFillChecked(defaultProps.fill === 'currentColor')
      setIconStrokeChecked(defaultProps.stroke === 'currentColor')
    }
  })

  // Get unique set names from iconIndex
  const setNames = [...Array.from(new Set(iconIndex.map(i => i.set)))]

  // Pagination state
  const [page, setPage] = createSignal(0)
  const [perPage, setPerPage] = createSignal(20)

  // Filtered icons based on set and search
  const filteredIcons = () =>
    iconIndex.filter(
      i =>
        i.set === selectedSet() &&
        (i.name.toLowerCase().includes(search().toLowerCase()) ||
          i.set.toLowerCase().includes(search().toLowerCase()))
    )

  const pagedIcons = () => {
    const start = page() * perPage()
    return filteredIcons().slice(start, start + perPage())
  }

  createEffect(() => {
    setPage(0) // Reset to first page on search or set change
  }, [search, selectedSet])

  function useIconLoader(icon: IconIndexEntry) {
    return createResource(
      () => icon,
      async ({ name, set, variant }) => {
        if (variant) {
          const mod = await import(
            `../src/${set.toLowerCase()}/${variant}/${name}.jsx`
          )
          return mod[name]
        } else {
          const mod = await import(`../src/${set.toLowerCase()}/${name}.jsx`)
          return mod[name]
        }
      }
    )
  }

  // Popup state for selected icon
  const [selectedIcon, setSelectedIcon] = createSignal<IconIndexEntry | null>(
    null
  )
  const [copied, setCopied] = createSignal('')

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
              class={`px-3 py-1 rounded-full border text-xs font-semibold transition cursor-pointer
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
            value={[8, 16, 24, 32, 48, 64, 96, 128].indexOf(iconSize())}
            onInput={e =>
              setIconSize(
                [8, 16, 24, 32, 48, 64, 96, 128][Number(e.currentTarget.value)]
              )
            }
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
            value={[0.125, 0.25, 0.5, 1, 2, 4, 8].indexOf(iconStrokeWidth())}
            onInput={e =>
              setIconStrokeWidth(
                [0.125, 0.25, 0.5, 1, 2, 4, 8][Number(e.currentTarget.value)]
              )
            }
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
      <div class="flex justify-between items-center mb-2">
        <div class="flex items-center gap-2">
          <label class="text-xs text-gray-600">Per page:</label>
          <select
            class="border rounded px-1 py-0.5 text-xs"
            value={perPage()}
            onInput={e => setPerPage(Number(e.currentTarget.value))}
          >
            {[20, 50, 100].map(n => (
              <option value={n}>{n}</option>
            ))}
          </select>
        </div>
        <div class="flex items-center gap-2">
          <button
            class="px-2 py-1 text-xs border rounded disabled:opacity-50"
            disabled={page() === 0}
            onClick={() => setPage(page() - 1)}
          >
            Prev
          </button>
          <span class="text-xs">
            Page {page() + 1} /{' '}
            {Math.max(1, Math.ceil(filteredIcons().length / perPage()))}
          </span>
          <button
            class="px-2 py-1 text-xs border rounded disabled:opacity-50"
            disabled={(page() + 1) * perPage() >= filteredIcons().length}
            onClick={() => setPage(page() + 1)}
          >
            Next
          </button>
        </div>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        <For each={pagedIcons()}>
          {iconObj => {
            const [Icon] = useIconLoader(iconObj)
            return (
              <div class="flex flex-col items-center bg-white rounded shadow p-3 hover:shadow-lg transition group relative">
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
                    class="mb-2 text-blue-500 group-hover:text-blue-700 cursor-pointer"
                    onClick={() => setSelectedIcon(iconObj)}
                  />
                </Show>
                <div class="text-xs font-mono text-gray-700 mb-1 text-center">
                  {iconObj.name}
                </div>
                <div class="text-[10px] text-gray-400 mb-2">{iconObj.set}</div>
                <button
                  class="text-xs bg-blue-100 hover:bg-blue-300 text-blue-800 rounded px-2 py-1 transition cursor-pointer"
                  onClick={() => setSelectedIcon(iconObj)}
                >
                  Show Usage
                </button>
              </div>
            )
          }}
        </For>
      </div>
      <Show when={selectedIcon()}>
        {() => {
          const iconObj = selectedIcon()!
          const [Icon] = useIconLoader(iconObj)
          const importStatement = `import { ${iconObj.name} } from '${iconObj.importPath.replace('../src/', 'solid-icons-ssr/').split('/').slice(0, -1).join('/')}'`
          const setConfig = iconSetConfigs.find(s => s.name.toLowerCase() === iconObj.set.toLowerCase())

          if (!setConfig) {
            console.error(`No config found for set: ${iconObj.set}`)
            return null
          }

          const defaultProps = getSetDefaultProps(setConfig)

          const currentProps = {
            size: iconSize(),
            'stroke-width': iconStrokeWidth(),
            stroke: iconStroke(),
            fill: iconFill(),
          }
          // Only show prop if different from default (with type coercion for numbers)
          const usageProps = Object.entries(currentProps)
            .filter(([key, val]) => {
              const defVal = defaultProps[key]
              if (typeof val === 'number' || typeof defVal === 'number') {
                return (
                  Number(val) !==
                  Number(
                    defVal ??
                      (key === 'size'
                        ? 24
                        : key === 'stroke-width'
                          ? 2
                          : undefined)
                  )
                )
              }
              return (
                String(val) !==
                String(
                  defVal ??
                    (key === 'stroke'
                      ? 'none'
                      : key === 'fill'
                        ? 'none'
                        : undefined)
                )
              )
            })
            .map(([key, val]) =>
              typeof val === 'number' ? `${key}={${val}}` : `${key}="${val}"`
            )
          const usageExample = `<${iconObj.name}${usageProps.length ? ' ' + usageProps.join(' ') : ''} />`
          function handleCopy(text: string) {
            navigator.clipboard.writeText(text)
            setCopied(text)
            setTimeout(() => setCopied(''), 1200)
          }
          return (
            <div
              class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
              onClick={() => setSelectedIcon(null)}
            >
              <div
                class="bg-white rounded shadow-lg p-6 min-w-[320px] relative"
                onClick={e => e.stopPropagation()}
              >
                <button
                  class="absolute top-2 right-2 text-gray-400 hover:text-gray-700 cursor-pointer"
                  onClick={() => setSelectedIcon(null)}
                >
                  &times;
                </button>
                <div class="mb-2 text-lg font-bold text-center">
                  {iconObj.name}
                </div>
                <Show
                  when={!Icon.loading}
                  fallback={
                    <div class="flex justify-center mb-3">
                      <div class="w-16 h-16 animate-pulse bg-blue-100 rounded-full" />
                    </div>
                  }
                >
                  <div class="flex justify-center mb-3">
                    <Dynamic
                      component={Icon()}
                      size={iconSize()}
                      stroke-width={iconStrokeWidth()}
                      stroke={iconStroke()}
                      fill={iconFill()}
                      class="text-blue-500"
                    />
                  </div>
                </Show>
                <div class="mb-2">
                  <div class="text-xs font-semibold mb-1">Import:</div>
                  <div class="bg-gray-100 rounded px-2 py-1 font-mono text-xs flex items-center justify-between">
                    <span>{importStatement}</span>
                    <button
                      class="ml-2 px-1 py-0.5 text-xs bg-blue-200 hover:bg-blue-400 rounded cursor-pointer"
                      onClick={() => handleCopy(importStatement)}
                    >
                      {copied() === importStatement ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
                <div class="mb-2">
                  <div class="text-xs font-semibold mb-1">Usage:</div>
                  <div class="bg-gray-100 rounded px-2 py-1 font-mono text-xs flex items-center justify-between">
                    <span>{usageExample}</span>
                    <button
                      class="ml-2 px-1 py-0.5 text-xs bg-blue-200 hover:bg-blue-400 rounded cursor-pointer"
                      onClick={() => handleCopy(usageExample)}
                    >
                      {copied() === usageExample ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>            
              </div>
            </div>
          )
        }}
      </Show>
      <footer class="mt-12 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} simple-solid-icons &mdash; Powered by
        SolidJS
      </footer>
    </div>
  )
}
