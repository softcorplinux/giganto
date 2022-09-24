import array from '../lang/array';
import isArray from '../lang/isArray';

export default function differenceWith<T>(a: T[], b: T[], predicate: (a: T, b: T) => boolean): T[] | undefined {
  if (!isArray(a) || !isArray(b) || !predicate) return undefined;
  const res = array();
  const length = a.length;
  let index = -1;

  while (++index < length) {
    if (!predicate(a[index], b[index])) {
      res.push(a[index]);
    }
  }

  return res;
}
