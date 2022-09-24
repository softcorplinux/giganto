import filter from '../collection/filter';
import isArray from '../lang/isArray';

export default function differenceBy<T>(a: T[], b: T[], predicate: (value: T) => any): T[] | undefined {
  if (!isArray(a) || !isArray(b) || !predicate) return undefined;
  const setA = new Set(a);
  const setB = new Set(b.map((i) => predicate(i)));
  const res = [
    ...new Set(
      filter([...setA], (i) => {
        return !setB.has(predicate(i));
      }),
    ),
  ];

  return res;
}
