// Central icon set and repo config for solid-icons-ssr
// Used by both generateFromTemplate.ts and clone-icon-repos.ts

// Type definitions for icon set config
export type IconSetDefaultProps = {
  size?: number
  color?: 'none' | 'currentColor'
  fill?: 'none' | 'currentColor'
  stroke?: 'none' | 'currentColor'
  'stroke-width'?: number
  [key: string]: any
}

export type IconSetVariantConfig = {
  variant: string
  svgGlob: string
  componentPrefix: string
  defaultProps?: IconSetDefaultProps
  removeClasses?: string[]
}

export type IconSetConfig = {
  name: string
  repoUrl: string
  gitBranch: string
  svgGlob?: string
  componentPrefix: string
  cacheDir: string
  license: string
  licenseUrl: string
  defaultProps?: IconSetDefaultProps
  variants?: IconSetVariantConfig[]
  removeClasses?: string[]
  sourceType?: 'git' | 'npm'
}

const defaultProps: IconSetDefaultProps = {
  size: 32,
  color: 'currentColor',
  fill: 'currentColor',
  stroke: 'none',
  'stroke-width': 2,
}

export const getSetDefaultProps = (setConfig: IconSetConfig): Required<IconSetDefaultProps> => {
  return {
    ...defaultProps,
    ...setConfig.defaultProps,
  } as Required<IconSetDefaultProps>
}

export const iconSetConfigs: IconSetConfig[] = [
  // Font Awesome Free (npm, multi-variant)
  {
    name: 'fontawesome',
    repoUrl: '@fortawesome/fontawesome-free',
    gitBranch: '', // not used for npm
    cacheDir: './.icon-cache/fontawesome',
    license: 'CC BY 4.0',
    licenseUrl: 'https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt',
    defaultProps: {
      size: 32,
      fill: 'currentColor',
      stroke: 'none',
    },
    sourceType: 'npm',
    componentPrefix: 'Fa', // required for type, not used for variants
    variants: [
      {
        variant: 'solid',
        svgGlob: 'node_modules/@fortawesome/fontawesome-free/svgs/solid/*.svg',
        componentPrefix: 'FaSolid',
      },
      {
        variant: 'regular',
        svgGlob: 'node_modules/@fortawesome/fontawesome-free/svgs/regular/*.svg',
        componentPrefix: 'FaRegular',
      },
      {
        variant: 'brands',
        svgGlob: 'node_modules/@fortawesome/fontawesome-free/svgs/brands/*.svg',
        componentPrefix: 'FaBrands',
      },
    ],
  },
  // Tabler Icons (npm)
  {
    name: 'tabler',
    repoUrl: '@tabler/icons',
    gitBranch: '', // not used for npm
    svgGlob: 'node_modules/@tabler/icons/icons/outline/*.svg',
    componentPrefix: 'Tabler',
    cacheDir: './.icon-cache/tabler',
    license: 'MIT',
    licenseUrl: 'https://github.com/tabler/tabler-icons/blob/main/LICENSE',
    defaultProps: {
      size: 32,
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': 2,
    },
    sourceType: 'npm',
  },
  {
    name: 'heroicons',
    repoUrl: 'https://github.com/tailwindlabs/heroicons.git',
    gitBranch: 'master',
    svgGlob: 'src/24/outline/*.svg',
    componentPrefix: 'Hero',
    cacheDir: './.icon-cache/heroicons',
    license: 'MIT',
    licenseUrl: 'https://github.com/tailwindlabs/heroicons/blob/master/LICENSE',
    defaultProps: {
      size: 32,
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': 2,
    },
  },
  {
    name: 'lucide',
    repoUrl: 'lucide-static',
    gitBranch: '', // not used for npm
    svgGlob: 'node_modules/lucide-static/icons/*.svg',
    componentPrefix: 'Lucide',
    cacheDir: './.icon-cache/lucide',
    license: 'ISC',
    licenseUrl: 'https://github.com/lucide-icons/lucide/blob/main/LICENSE',
    defaultProps: {
      size: 32,
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': 2,
    },
    sourceType: 'npm',
  },
  {
    name: 'feather',
    repoUrl: 'https://github.com/feathericons/feather.git',
    gitBranch: 'main',
    svgGlob: 'icons/*.svg',
    componentPrefix: 'Feather',
    cacheDir: './.icon-cache/feather',
    license: 'MIT',
    licenseUrl: 'https://github.com/feathericons/feather/blob/main/LICENSE',
    defaultProps: {
      size: 32,
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': 2,
    },
  },
  {
    name: 'bootstrap',
    repoUrl: 'bootstrap-icons',
    gitBranch: '', // not used for npm
    svgGlob: 'node_modules/bootstrap-icons/icons/*.svg',
    componentPrefix: 'Bootstrap',
    cacheDir: './.icon-cache/bootstrap',
    license: 'MIT',
    licenseUrl: 'https://github.com/twbs/icons/blob/main/LICENSE.md',
    defaultProps: {
      size: 32,
      fill: 'currentColor',
      stroke: 'none',
      'stroke-width': 0.5,
    },
    sourceType: 'npm',
  },
  {
    name: 'remix',
    repoUrl: 'remixicon',
    gitBranch: '', // not used for npm
    svgGlob: 'node_modules/remixicon/icons/**/*.svg',
    componentPrefix: 'Remix',
    cacheDir: './.icon-cache/remix',
    license: 'Apache-2.0',
    licenseUrl: 'https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE',
    defaultProps: {
      size: 32,
      fill: 'currentColor',
      stroke: 'none',
    },
    sourceType: 'npm',
  },
  {
    name: 'boxicons',
    repoUrl: 'boxicons',
    gitBranch: '', // not used for npm
    svgGlob: 'node_modules/boxicons/svg/regular/*.svg',
    componentPrefix: 'Box',
    cacheDir: './.icon-cache/boxicons',
    license: 'MIT',
    licenseUrl: 'https://github.com/atisawd/boxicons/blob/master/LICENSE',
    defaultProps: {
      size: 32,
      fill: 'currentColor',
      stroke: 'none',
    },
    sourceType: 'npm',
  },
  {
    name: 'simpleicons',
    repoUrl: 'simple-icons',
    gitBranch: '', // not used for npm
    svgGlob: 'node_modules/simple-icons/icons/*.svg',
    componentPrefix: 'Simple',
    cacheDir: './.icon-cache/simpleicons',
    license: 'CC0-1.0',
    licenseUrl:
      'https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md',
    defaultProps: {
      size: 32,
      fill: 'currentColor',
      stroke: 'none',
    },
    sourceType: 'npm',
  },
  {
    name: 'eva',
    repoUrl: 'https://github.com/akveo/eva-icons.git',
    gitBranch: 'master',
    componentPrefix: 'Eva',
    variants: [
      {
        variant: 'fill',
        svgGlob: 'package/icons/fill/**/*.svg',
        componentPrefix: 'EvaFill',
      },
      {
        variant: 'outline',
        svgGlob: 'package/icons/outline/**/*.svg',
        componentPrefix: 'EvaOutline',
      },
    ],
    cacheDir: './.icon-cache/eva',
    license: 'MIT',
    licenseUrl: 'https://github.com/akveo/eva-icons/blob/master/LICENSE.txt',
    defaultProps: {
      size: 32,
      fill: 'currentColor',
      stroke: 'none',
    },
    removeClasses: ['cls-1'],
  },
  // Zondicons (MIT)
  {
    name: 'zondicons',
    repoUrl: 'https://github.com/dukestreetstudio/zondicons.git',
    gitBranch: 'master',
    svgGlob: 'src/*.svg',
    componentPrefix: 'Zondicon',
    cacheDir: './.icon-cache/zondicons',
    license: 'MIT',
    licenseUrl:
      'https://github.com/dukestreetstudio/zondicons/blob/master/LICENSE',

    defaultProps: {
      size: 32,
      fill: 'currentColor',
      stroke: 'none',
    },
  },
  // Ionicons (MIT)
  {
    name: 'ionicons',
    repoUrl: 'https://github.com/ionic-team/ionicons.git',
    gitBranch: 'main',
    svgGlob: 'src/svg/*.svg',
    componentPrefix: 'Ion',
    cacheDir: './.icon-cache/ionicons',
    license: 'MIT',
    licenseUrl: 'https://github.com/ionic-team/ionicons/blob/main/LICENSE',
    defaultProps: {
      size: 32,
      fill: 'currentColor',
      stroke: 'none',
    },
  },
  // Ant Design Icons (Variants: outline, fill, twotone; MIT)
  {
    name: 'antdesign',
    repoUrl: '@ant-design/icons-svg',
    gitBranch: '', // not used for npm
    componentPrefix: 'Antd',
    cacheDir: './.icon-cache/antdesign',
    license: 'MIT',
    licenseUrl: 'https://github.com/ant-design/ant-design-icons/blob/master/LICENSE',
    defaultProps: {
      size: 32,
      fill: 'currentColor',
      stroke: 'none',
    },
    sourceType: 'npm',
    variants: [
      {
        variant: 'outline',
        svgGlob: 'node_modules/@ant-design/icons-svg/inline-svg/outlined/*.svg',
        componentPrefix: 'AntdOutline',
      },
      {
        variant: 'fill',
        svgGlob: 'node_modules/@ant-design/icons-svg/inline-svg/filled/*.svg',
        componentPrefix: 'AntdFill',
      },
      {
        variant: 'twotone',
        svgGlob: 'node_modules/@ant-design/icons-svg/inline-svg/twotone/*.svg',
        componentPrefix: 'AntdTwotone',
      },
    ],
  },
  // Codicons (MIT)
  {
    name: 'codicons',
    repoUrl: 'https://github.com/microsoft/vscode-codicons.git',
    gitBranch: 'main',
    svgGlob: 'src/icons/*.svg',
    componentPrefix: 'Codicon',
    cacheDir: './.icon-cache/codicons',
    license: 'MIT',
    licenseUrl: 'https://github.com/microsoft/vscode-codicons/blob/main/LICENSE',
    defaultProps: {
      size: 32,
      fill: 'currentColor',
      stroke: 'none',
    },
  },
]
