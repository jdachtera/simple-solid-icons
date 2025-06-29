import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { iconSetConfigs } from '../iconSets.config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const cacheDir = path.resolve(__dirname, '../.icon-cache')

if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir)

for (const { name, repoUrl, gitBranch } of iconSetConfigs) {
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
console.log('All icon repos are up to date.')
