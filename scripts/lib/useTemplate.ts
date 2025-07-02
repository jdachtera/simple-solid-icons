import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const templatesDir = path.resolve(__dirname, 'templates')

let templateContents: Record<string, string> = {}

async function loadTemplate(name: string): Promise<string> {
  if (!templateContents[name]) {
    templateContents[name] = await fs.readFile(
      path.join(templatesDir, `${name}.template`),
      'utf-8'
    )
  }

  return templateContents[name]
}

export const useTemplate = async (
  name: string,
  values: Record<string, string | number> = {}
): Promise<string> => {
  let contents = await loadTemplate(name)

  for (const [key, value] of Object.entries(values)) {
    contents = contents.replace(new RegExp(`${key}`, 'g'), String(value))
  }

  return contents
}
