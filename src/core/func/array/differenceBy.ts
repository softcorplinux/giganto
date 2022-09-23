import filter from '../collection/filter';
import isArray from '../lang/isArray';

export default function differenceBy<T>(a: T[], b: T[], iteratee: (value: T) => any): T[] | undefined {
  if (!isArray(a)) return undefined;
  if (!isArray(b)) return undefined;
  if (!iteratee) return undefined;
  const setA = new Set(a);
  const setB = new Set(b.map((i) => iteratee(i)));
  const res = [
    ...new Set(
      filter([...setA], (i) => {
        return !setB.has(iteratee(i));
      }),
    ),
  ];

  return res;
}
