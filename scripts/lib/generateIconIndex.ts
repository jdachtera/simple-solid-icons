import fs from 'fs/promises';
import path from 'path';
import { iconSetConfigs } from '../../iconSets.config';

import { capitalize } from './capitalize';


import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
 const __dirname = path.dirname(__filename)

export async function generateIconIndex() {
  const iconIndexPath = path.resolve(__dirname, '../../demo/iconIndex.ts');
  type IconIndexEntry = { set: string; name: string; importPath: string; variant?:string };
  let entries: IconIndexEntry[] = [];
  for (const set of iconSetConfigs) {
    if ('variants' in set && Array.isArray(set.variants)) {
      for (const variant of set.variants) {
        const setName = `${capitalize(set.name)}`;
        const variantName = `${capitalize(variant.variant)}`;
        const indexFile = path.resolve(__dirname, `../../src/${set.name}/${variant.variant}/index.js`);
        const indexContent = await fs.readFile(indexFile, 'utf-8');
        const matches = [...indexContent.matchAll(/export \{ (\w+) \}/g)];
        for (const m of matches) {
          const name =  m[1]      
          const importPath = `../src/${set.name}/${name}.jsx`;
          entries.push({ set: setName, name, variant: variantName, importPath });
        }
      }
    } else {
      const setName = `${capitalize(set.name)}`;
   

      const indexFile = path.resolve(__dirname, `../../src/${set.name}/index.js`);
      const indexContent = await fs.readFile(indexFile, 'utf-8');
      const matches = [...indexContent.matchAll(/export \{ (\w+) \}/g)];


      for (const m of matches) {
        const name =  m[1]      
        const importPath = `../src/${set.name}/${name}.jsx`;
        entries.push({ set: setName, name, importPath });
      }
    }
  }
  const typeDef = `// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.\n\nexport type IconIndexEntry = {\n  set: string;\n  name: string;\n  variant: string;\n  importPath: string;\n};\n\nexport const iconIndex: IconIndexEntry[] = [\n`;
  const arr = entries.map(e => `  { set: '${e.set}', ${e.variant?`variant: '${e.variant}',`:' '}name: '${e.name}', importPath: '${e.importPath}' },`).join('\n');
  const fileContent = `${typeDef}${arr}\n]\n`;
  await fs.writeFile(iconIndexPath, fileContent);
  console.log('✓ demo/iconIndex.ts generated');
}
