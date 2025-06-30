export function camelize(str: string): string {
  return str
    .replace(/(^|[-_\s]+)([a-zA-Z0-9])/g, (_: string, __: string, c: string) => c.toUpperCase()
    )
    .replace(/[^a-zA-Z0-9]/g, '');
}
