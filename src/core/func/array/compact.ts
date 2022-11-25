import size from '../collection/size';
import array from '../lang/array';
import isArray from '../lang/isArray';

/**
 * Creates a new array and removes all false values from it. The values false, null, "", undefined and NaN are false.
 * Note that the value 0 is not false.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3, NaN, 4, undefined, 5, 6, Boolean(0)])
 * // => [0, 1, 2, 3, 4, 5, 6]
 */
export default function compact<T>(values: T[]): T[] | undefined {
  if (!isArray(values)) return undefined;

  let index = -1;
  let resIndex = 0;
  const length = size(values);
  const res = array();

  while (++index < length) {
    if (size(values[index])) {
      res[resIndex++] = values[index];
    }
  }

  return res;
}
