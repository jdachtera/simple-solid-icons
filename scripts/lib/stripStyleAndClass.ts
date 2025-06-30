export function stripStyleAndClass(
  svg: string,
  removeClasses: string[] = []
): string {
  // Remove XML declaration
  let out = svg.replace(/<\?xml[\s\S]*?\?>/gi, '')
  // Remove HTML comments
  out = out.replace(/<!--([\s\S]*?)-->/g, '')
  // Remove elements with a class in removeClasses
  if (removeClasses.length > 0) {
    const classPattern = removeClasses
      .map(cls => cls.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'))
      .join('|')
    // Remove self-closing tags
    out = out.replace(
      new RegExp(
        `<([a-zA-Z0-9]+)[^>]*class=["']([^"'>]*\\b(?:${classPattern})\\b[^"'>]*)["'][^>]*/>`,
        'gi'
      ),
      ''
    )
    // Remove open/close tag pairs using a function to avoid backreference issues
    out = out.replace(
      new RegExp(
        `<([a-zA-Z0-9]+)[^>]*class=["']([^"'>]*\\b(?:${classPattern})\\b[^"'>]*)["'][^>]*>([\s\S]*?)<\/([a-zA-Z0-9]+)>`,
        'gi'
      ),
      (match, tag1, classAttr, inner, tag2) => (tag1 === tag2 ? '' : match)
    )
  }
  // Remove class and className attributes (do this last)
  out = out.replace(/\s(class|className)="[^"]*"/gi, '')
  // Remove all <style>...</style> tags
  out = out.replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '')
  // Replace color values in inline style attributes (for fill/stroke, except 'none')
  out = out.replace(
    /(style\s*=\s*")([^"]*)(")/gi,
    (
      match: string,
      before: string,
      styleContent: string,
      after: string
    ): string => {
      // Replace fill or stroke color values (not 'none') with currentColor
      const replaced = styleContent.replace(
        /(stroke|fill)\s*:\s*([^;"']+)(;?)/gi,
        (m: string, prop: string, val: string, semi: string): string => {
          if (val.trim() !== 'none') {
            return `${prop}:currentColor${semi}`
          }
          return m
        }
      )
      return `${before}${replaced}${after}`
    }
  )
  // Replace fill and stroke attributes on SVG elements (e.g., path, rect, etc.) with currentColor, except if value is 'none'
  out = out.replace(
    /(<(path|rect|circle|ellipse|polygon|polyline|line)[^>]*?)\s(stroke|fill)="(?!none)([^"]*)"/gi,
    (
      match: string,
      before: string,
      tag: string,
      attr: string,
      value: string
    ): string => `${before} ${attr}="currentColor"`
  )
  // Remove nested <svg> tags, keep only inner content
  const svgMatch = out.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i)
  if (svgMatch) {
    out = svgMatch[1]
  }
  return out
}
