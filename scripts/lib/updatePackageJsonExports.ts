import fs from 'fs/promises';
import path from 'path';

import { fileURLToPath } from 'url';
import { variantSets } from '../../iconSets.config';

const __filename = fileURLToPath(import.meta.url)
 const __dirname = path.dirname(__filename)

const packageJsonPath = path.resolve(__dirname, '../../package.json');

export type ExportsField = {
  [key: string]: {
    import: string
    types: string
  }
}

export async function updatePackageJsonExports() {
  const pkgRaw = await fs.readFile(packageJsonPath, 'utf-8');
  const pkg = JSON.parse(pkgRaw);
  
  const newExports: Record<string, any> = {
    
  };
  // Track root and variant exports
  const rootExports: Record<string, boolean> = {};
  for (const set of variantSets) {
    
    const name = set.name.toLowerCase();
    if ('variant' in set) {    
      const variant = set.variant.toLowerCase();
 
      newExports[`./${name}/${variant}`] = {
        import: `./src/${name}/${variant}.js`,
        types: `./src/${name}/${variant}.d.ts`,
        "solid-server": `./src/${name}/${variant}.ssr.js`,
      };

      newExports[`./${name}`] = {
        import: `./src/${name}/index.js`,
        types: `./src/${name}/index.d.ts`,
        "solid-server": `./src/${name}/index.ssr.js`,
      };

    } else {
      newExports[`./${name}`] = {
        import: `./src/${name}.js`,
        types: `./src/${name}.d.ts`,
        "solid-server": `./src/${name}.ssr.js`,
      };
    }
  }

  pkg.exports = newExports;
  await fs.writeFile(packageJsonPath, JSON.stringify(pkg, null, 2) + '\n');
  console.log('✓ package.json exports updated (with SSR files)');
}
