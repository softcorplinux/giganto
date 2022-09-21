export default function intersection<T>(a: T[], b: T[]) {
  return [...new Set([...new Set(a)].filter((i) => new Set(b).has(i)))];
}
