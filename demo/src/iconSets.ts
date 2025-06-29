function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1) }
import * as TablerIcons from '../../src/tabler/index.js'
import * as HeroiconsIcons from '../../src/heroicons/index.js'
import * as LucideIcons from '../../src/lucide/index.js'
import * as FeatherIcons from '../../src/feather/index.js'
import * as BootstrapIcons from '../../src/bootstrap/index.js'
import * as RemixIcons from '../../src/remix/index.js'
import * as BoxiconsIcons from '../../src/boxicons/index.js'
import * as SimpleiconsIcons from '../../src/simpleicons/index.js'
import * as EvaFillIcons from '../../src/eva/fill/index.js'
import * as EvaOutlineIcons from '../../src/eva/outline/index.js'
import * as ZondiconsIcons from '../../src/zondicons/index.js'
import * as IoniconsIcons from '../../src/ionicons/index.js'
import * as CodiconsIcons from '../../src/codicons/index.js'

export const iconSets = [
  { name: 'Tabler', icons: TablerIcons, importPathPrefix: '../../src/tabler' },
  { name: 'Heroicons', icons: HeroiconsIcons, importPathPrefix: '../../src/heroicons' },
  { name: 'Lucide', icons: LucideIcons, importPathPrefix: '../../src/lucide' },
  { name: 'Feather', icons: FeatherIcons, importPathPrefix: '../../src/feather' },
  { name: 'Bootstrap', icons: BootstrapIcons, importPathPrefix: '../../src/bootstrap' },
  { name: 'Remix', icons: RemixIcons, importPathPrefix: '../../src/remix' },
  { name: 'Boxicons', icons: BoxiconsIcons, importPathPrefix: '../../src/boxicons' },
  { name: 'Simpleicons', icons: SimpleiconsIcons, importPathPrefix: '../../src/simpleicons' },
  { name: 'EvaFill', icons: EvaFillIcons, importPathPrefix: '../../src/eva/fill' },
  { name: 'EvaOutline', icons: EvaOutlineIcons, importPathPrefix: '../../src/eva/outline' },
  { name: 'Zondicons', icons: ZondiconsIcons, importPathPrefix: '../../src/zondicons' },
  { name: 'Ionicons', icons: IoniconsIcons, importPathPrefix: '../../src/ionicons' },
  { name: 'Codicons', icons: CodiconsIcons, importPathPrefix: '../../src/codicons' },
]
