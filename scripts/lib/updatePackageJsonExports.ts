import fs from 'fs/promises';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
 const __dirname = path.dirname(__filename)

const packageJsonPath = path.resolve(__dirname, '../../package.json');

export type ExportsField = {
  [key: string]: {
    import: string
    types: string
  }
}

export async function updatePackageJsonExports(iconSetNames: string[]) {
  const pkgRaw = await fs.readFile(packageJsonPath, 'utf-8');
  const pkg = JSON.parse(pkgRaw);
  const newExports: ExportsField = {
    '.': {
      import: './src/index.js',
      types: './src/index.d.ts',
    },
  };
  // Track root and variant exports
  const rootExports: Record<string, boolean> = {};
  for (const setName of iconSetNames) {
    if (setName.includes('/')) {
      const [root, variant] = setName.split('/');
      newExports[`./${root}/${variant}`] = {
        import: `./src/${root}/${variant}/index.js`,
        types: `./src/${root}/${variant}/index.d.ts`,
      };
      rootExports[root] = true;
    } else {
      newExports[`./${setName}`] = {
        import: `./src/${setName}/index.js`,
        types: `./src/${setName}/index.d.ts`,
      };
    }
  }
  // Add root exports for multi-variant sets
  for (const root of Object.keys(rootExports)) {
    newExports[`./${root}`] = {
      import: `./src/${root}/index.js`,
      types: `./src/${root}/index.d.ts`,
    };
  }
  pkg.exports = newExports;
  await fs.writeFile(packageJsonPath, JSON.stringify(pkg, null, 2) + '\n');
  console.log('✓ package.json exports updated');
}
