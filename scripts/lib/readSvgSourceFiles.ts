import { glob } from 'glob';
import path from 'path';
import { SetOrVariant } from '../../iconSets.config';
import { __dirname } from './generateIcons';

export const readSvgSourceFiles = async (set: SetOrVariant): Promise<string[]> => {
  const globPattern = set.svgGlob || '**/*.svg';
  if (set.sourceType === 'npm') {
    return await glob(globPattern, { absolute: true });
  } else {
    const svgDir = path.resolve(__dirname, '../../', set.cacheDir);
    const svgFiles = await glob(globPattern, { cwd: svgDir });

    return svgFiles.map(file => path.resolve(svgDir, file));
  }
};
