import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatesDir = path.resolve(__dirname);
const jsxTemplatePath = path.join(templatesDir, 'iconTemplate.jsx');
const tsxTemplatePath = path.join(templatesDir, 'iconTemplate.tsx');
const dtsTemplatePath = path.join(templatesDir, 'iconTemplate.d.ts');

async function generateIcons() {
  const srcDir = path.resolve('src/generated');
  const distDir = path.resolve('dist/generated');

  const jsxTemplate = await fs.readFile(jsxTemplatePath, 'utf-8');
  const tsxTemplate = await fs.readFile(tsxTemplatePath, 'utf-8');
  const dtsTemplate = await fs.readFile(dtsTemplatePath, 'utf-8');

  const tsxFiles = await glob('**/*.tsx', { cwd: srcDir });

  for (const tsxFile of tsxFiles) {
    const srcPath = path.join(srcDir, tsxFile);
    const content = await fs.readFile(srcPath, 'utf-8');
    const componentName = path.basename(tsxFile, '.tsx');
    // Extract only the inner SVG paths/content
    const svgMatch = content.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
    if (!svgMatch) throw new Error(`No SVG found in ${tsxFile}`);
    const svgPaths = svgMatch[1];

    // JSX
    const jsxCode = jsxTemplate
      .replace(/ICON_NAME/g, componentName)
      .replace('SVG_PATHS', svgPaths);
    const jsxDistPath = path.join(distDir, tsxFile.replace('.tsx', '.jsx'));
    await fs.mkdir(path.dirname(jsxDistPath), { recursive: true });
    await fs.writeFile(jsxDistPath, jsxCode);

    // TSX (optional, for dev)
    const tsxCode = tsxTemplate
      .replace(/ICON_NAME/g, componentName)
      .replace('SVG_PATHS', svgPaths);
    const tsxDistPath = path.join(distDir, tsxFile.replace('.tsx', '.tsx'));
    await fs.writeFile(tsxDistPath, tsxCode);

    // DTS
    const dtsCode = dtsTemplate.replace(/ICON_NAME/g, componentName);
    const dtsDistPath = path.join(distDir, tsxFile.replace('.tsx', '.d.ts'));
    await fs.writeFile(dtsDistPath, dtsCode);
  }

  // Build index files for each icon set
  const iconSetDirs = await fs.readdir(srcDir);
  const iconSets: string[] = [];
  for (const dir of iconSetDirs) {
    const dirPath = path.join(srcDir, dir);
    const stat = await fs.stat(dirPath);
    if (stat.isDirectory()) iconSets.push(dir);
  }
  for (const iconSet of iconSets) {
    const iconSetDir = path.join(distDir, iconSet);
    const iconFiles = await glob('*.jsx', { cwd: iconSetDir });
    const exports = iconFiles
      .map(file => {
        const componentName = path.basename(file, '.jsx');
        return `export { ${componentName} } from './${componentName}.jsx'`;
      })
      .join('\n');
    const indexPath = path.join(iconSetDir, 'index.js');
    await fs.writeFile(indexPath, exports);
  }
  // Main index.js
  const mainIndexContent = iconSets
    .map(set => `export * from './generated/${set}/index.js'`)
    .join('\n');
  await fs.writeFile(path.join(distDir, '../index.js'), mainIndexContent);
}

generateIcons().catch(console.error);
