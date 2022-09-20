import size from '../collection/size';
import array from '../lang/array';
import isArray from '../lang/isArray';

export default function compact<T>(value: T[]) {
  if (!isArray(value)) return undefined;

  let index = -1;
  let resIndex = 0;
  const length = value.length;
  const res = array();

  while (++index < length) {
    if (size(value[index])) {
      res[resIndex++] = value[index];
    }
  }

  return res;
}
