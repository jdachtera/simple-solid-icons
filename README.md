# solid-icons-ssr

SSR-safe icon library for SolidJS with auto-generated components from popular icon sets.

## Features

- ✅ **SSR Compatible** - Works perfectly with Vike, SolidStart, and other SSR frameworks
- 🔄 **Auto-generated** - Icons are automatically generated from upstream sources
- 🎯 **Tree-shakable** - Only bundle the icons you use
- 📦 **Multiple icon sets** - Tabler, Heroicons, Lucide, and more
- 🚀 **TypeScript** - Full TypeScript support with proper types

## Installation

```bash
npm install solid-icons-ssr
# or
pnpm add solid-icons-ssr
```

## Usage

```tsx
import { TablerHeart, HeroHome, LucideSettings } from 'solid-icons-ssr'

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

### Selective imports (recommended for smaller bundles)

```tsx
import { TablerHeart } from 'solid-icons-ssr/tabler'
import { HeroHome } from 'solid-icons-ssr/heroicons'
import { LucideSettings } from 'solid-icons-ssr/lucide'
```

## Icon Sets

- **Tabler Icons** (`Tabler*`) - 4,000+ icons
- **Heroicons** (`Hero*`) - 300+ icons  
- **Lucide** (`Lucide*`) - 1,000+ icons

## Development

```bash
# Install dependencies
npm install

# Generate icons from upstream sources
npm run generate

# Build the library
npm run build

# Update everything (clean + generate + build)
npm run update
```

## Why This Exists

Popular icon libraries like `solid-icons`, `@tabler/icons-solidjs`, and `lucide-solid` have SSR compatibility issues with frameworks like Vike. This library generates clean, simple SolidJS components that work perfectly with SSR.

## License

MIT
