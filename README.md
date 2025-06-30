# simple-solid-icons


[![Netlify Status](https://api.netlify.com/api/v1/badges/4ea370d8-122e-488b-aaff-1505138d62bb/deploy-status)](https://simplesolidicons.netlify.app/)

**🌐 [Live Icon Search & Demo](https://simplesolidicons.netlify.app/)**


SSR-safe, simple, and auto-generated icon library for SolidJS with components from popular open-source icon sets.

---

## Quick Start

```bash
pnpm add simple-solid-icons
# or
npm install simple-solid-icons
```

```tsx
import { TablerHeart } from 'simple-solid-icons/tabler/TablerHeart'
// or
import { TablerHeart } from 'simple-solid-icons/tabler'
```

---

## Features

- ✅ **SSR Compatible** - Works perfectly with Vike, SolidStart, and other SSR frameworks
- 🔄 **Auto-generated** - Icons are automatically generated from upstream sources
- 🎯 **Tree-shakable** - Only bundle the icons you use
- 📦 **Multiple icon sets** - Tabler, Heroicons, Lucide, Feather, Bootstrap, Remix, Boxicons, Simple Icons, Eva, Phosphor, and more
- 🚀 **TypeScript** - Full TypeScript support with proper types
- 🛡️ **License Attribution** - Every icon file includes license and source info

## Installation

```bash
pnpm add simple-solid-icons
# or
npm install simple-solid-icons
```
## Usage

```tsx
// Import an icon directly from its file for maximum tree-shaking:
import { TablerHeart } from 'simple-solid-icons/tabler/TablerHeart'

// Or import from a set (recommended for most users):
import { TablerHeart } from 'simple-solid-icons/tabler'
import { HeroHome } from 'simple-solid-icons/heroicons'
import { LucideSettings } from 'simple-solid-icons/lucide'

function MyComponent() {
  return (
    <div>
      <TablerHeart class="text-red-500" />
      <HeroHome size={32} />
      <LucideSettings stroke-width="1" />
    </div>
  )
}
```
}
```

## Icon Sets

- **Tabler Icons** (`Tabler*`) — MIT
- **Heroicons** (`Hero*`) — MIT
- **Lucide** (`Lucide*`) — ISC
- **Feather** (`Feather*`) — MIT
- **Bootstrap Icons** (`Bootstrap*`) — MIT
- **Remix Icon** (`Remix*`) — Apache-2.0
- **Boxicons** (`Box*`) — MIT
- **Simple Icons** (`Simple*`) — CC0-1.0
- **Eva Icons** (`Eva*`) — MIT
- **Phosphor Icons** (`Phosphor*`) — MIT

Each icon file includes a header with license and source info. See the source repos for full license details.

## Development

The demo app and icon generator scripts are not included in the npm package. To work on the icons or demo locally:

```bash
# Install dependencies
pnpm install

# Update icon repos (clone/pull latest SVGs)
pnpm update:repos

# Generate icon components/types from SVGs
pnpm generate:icons

# Update everything (repos + generate)
pnpm update:all

# Clean all generated files
pnpm clean
```

## Why This Exists

Popular icon libraries like `solid-icons`, `@tabler/icons-solidjs`, and `lucide-solid` have SSR compatibility issues with frameworks like Vike. This library generates clean, simple SolidJS components that work perfectly with SSR.

**Note:** This package is tested with Vike and plain SolidJS. If you use SolidStart and encounter any issues, please open an issue or PR!
## Contributing

Contributions, bug reports, and feature requests are welcome! Please open an issue or PR on GitHub.

---

## License & Attribution

- This package is MIT licensed (codegen and wrapper code).
- **All icons are copyright their respective authors.**
- Each icon set is included under its original open-source license (see file headers and above).
- No icons or trademarks are claimed by this package or its authors.
- See each icon set's repo for full license terms and attribution requirements.

---

**Generated and maintained by the Saztunes team.**
