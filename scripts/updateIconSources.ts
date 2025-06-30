import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { iconSetConfigs } from '../iconSets.config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const cacheDir = path.resolve(__dirname, '../.icon-cache')

console.log(`Using cache directory: ${cacheDir}`)

if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir)

function isNpmSource(set: { sourceType?: string }) {
  return set.sourceType === 'npm'
}

function getNpmPackageName(repoUrl: string) {
  // Handles both '@scope/pkg' and 'pkg'
  return repoUrl.replace(/^npm:/, '')
}

;(async () => {
  // Gather all npm packages needed
  const npmPkgs = iconSetConfigs
    .filter(isNpmSource)
    .map(set => getNpmPackageName(set.repoUrl))
    .filter((pkg, i, arr) => arr.indexOf(pkg) === i) // dedupe

  // Always install all npm icon packages at latest version
  if (npmPkgs.length > 0) {
    console.log(`Installing latest npm icon packages: ${npmPkgs.join(', ')}`)
    execSync(`pnpm add ${npmPkgs.map(pkg => pkg + '@latest').join(' ')}`, {
      stdio: 'inherit',
    })
  }

  // Handle git-based sets as before
  for (const set of iconSetConfigs) {
    if (!isNpmSource(set)) {
      const { name, repoUrl, gitBranch } = set
      const repoDir = path.join(cacheDir, name)
      if (fs.existsSync(repoDir)) {
        console.log(`Updating ${name}...`)
        execSync('git pull', { cwd: repoDir, stdio: 'inherit' })
      } else {
        console.log(`Cloning ${name}...`)
        execSync(
          `git clone --depth 1 --branch ${gitBranch} ${repoUrl} ${repoDir}`,
          {
            stdio: 'inherit',
          }
        )
      }
    }
  }
  console.log('All icon repos/packages are up to date.')
})()
