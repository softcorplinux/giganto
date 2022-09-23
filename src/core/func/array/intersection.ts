import isArray from '../lang/isArray';

export default function intersection<T>(a: T[], b: T[]) {
  if (!isArray(a)) return undefined;
  if (!isArray(b)) return undefined;
  const setA = new Set(a);
  const setB = new Set(b);
  return [...new Set([...setA].filter((i) => setB.has(i)))];
}
