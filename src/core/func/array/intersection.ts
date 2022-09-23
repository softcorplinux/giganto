import filter from '../collection/filter';
import isArray from '../lang/isArray';

export default function intersection<T>(a: T[], b: T[]): T[] | undefined {
  if (!isArray(a)) return undefined;
  if (!isArray(b)) return undefined;
  const setA = new Set(a);
  const setB = new Set(b);
  return [...new Set(filter([...setA], (i) => setB.has(i)))];
}
