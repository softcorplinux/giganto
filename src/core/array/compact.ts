import size from '../collection/size';
import array from '../lang/array';
import isArray from '../lang/isArray';

export default function compact<T>(arr: T[]) {
  if (!isArray(arr)) return undefined;

  let index = -1;
  let resIndex = 0;
  const length = arr.length;
  const res = array();

  while (++index < length) {
    if (size(arr[index])) {
      res[resIndex++] = arr[index];
    }
  }

  return res;
}
