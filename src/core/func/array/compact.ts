import size from '../collection/size';
import array from '../lang/array';
import isArray from '../lang/isArray';

export default function compact<T>(values: T[]): T[] | undefined {
  if (!isArray(values)) return undefined;

  let index = -1;
  let resIndex = 0;
  const length = values.length;
  const res = array();

  while (++index < length) {
    if (size(values[index])) {
      res[resIndex++] = values[index];
    }
  }

  return res;
}
