import isArray from '../lang/isArray';
import isInteger from '../lang/isInteger';
import array from '../lang//array';
import ceil from '../math/ceil';

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
export default function chunk<T>(arr: T[], size: number = 1) {
  if (!isArray(arr)) return undefined;
  if (!isInteger(size)) return undefined;

  const lastLength = arr.length % size;
  const length = ceil(arr.length / size);
  const response = array(length);
  let resIndex = arr.length - 1;
  let index = length;

  while (index--) {
    let i = length === index + 1 && lastLength ? lastLength : size;
    const res = array(i);

    while (i--) {
      res[i] = arr[resIndex];
      resIndex--;
    }

    response[index] = res;
  }

  return response;
}
