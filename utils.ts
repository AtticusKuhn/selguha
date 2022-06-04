const hashCode = (s: string): number => s.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0)

export const stringToColor = (string: string): string => {
    return `hsl(${hashCode(string) % 256},70%, 70%)`
}