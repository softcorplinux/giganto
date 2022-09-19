import array from '../lang/array';
import isArray from '../lang/isArray';

export default function compact<T>(arr: T[]) {
  if (!isArray(arr)) return undefined;

  let index = 0;
  let resIndex = 0;
  const length = arr.length;
  const response = array();

  while (index++ < length) {
    if (arr[index]) {
      response[resIndex++] = arr[index];
    }
  }

  return response;
}
