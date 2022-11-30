import includes from '../collection/includes';
import size from '../collection/size';
import isArray from '../lang/isArray';

/**
 * Removes elements from the array corresponding to the indexes and returns an array of deleted elements.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to modify.
 * @param {Array} [indexes] The indexes of elements to remove.
 * @returns {Array} Returns the new array of removed elements.
 * @example
 *
 * const array = ['a', 'b', 'c', 'd'];
 *
 * _.pullAt(array, [0, 2]);
 * // => ['b', 'd']
 *
 * console.log(array);
 * // => ['a', 'c']
 */
export default function pullAt<T>(values: T[], indexes: number[]): T[] | undefined {
  if (!isArray(values) || !isArray(indexes)) return undefined;
  let index = size(values);
  const response = [];

  while (index--) {
    if (!includes(indexes, index)) {
      response.unshift(values[index]);
      values.splice(index, 1);
    }
  }

  return response;
}
