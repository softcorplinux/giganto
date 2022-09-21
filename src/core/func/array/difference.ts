export default function difference<T>(a: T[], b: T[]) {
  const setA = new Set(a);
  const setB = new Set(b);
  return [...new Set([...setA].filter((i) => !setB.has(i)))];
}
