import array from '../lang/array';
import isArray from '../lang/isArray';

export default function differenceWith<T>(a: T[], b: T[], comparator: (a: T, b: T) => boolean) {
  if (!isArray(a)) return undefined;
  if (!isArray(b)) return undefined;
  if (!comparator) return undefined;
  const res = array();
  const length = a.length;
  let index = -1;

  while (++index < length) {
    if (!comparator(a[index], b[index])) {
      res.push(a[index]);
    }
  }

  return res;
}
