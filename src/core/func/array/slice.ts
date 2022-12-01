import size from '../collection/size';
import isArray from '../lang/isArray';

/**
 * Creates a fragment of the array from the beginning to, but not including the end.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to slice.
 * @param {Number} [start=0] The start position.
 * @param {Number} [end=values.length] The end position.
 * @returns {Array} Returns the slice of array.
 * @example
 *
 * const array = [1, 2, 3];
 *
 * _.slice(array, 1, 2);
 * // => [2]
 *
 * _.slice(array, 1);
 * // => [2, 3]
 */
export default function slice<T>(values: T[], start: number = 0, end: number = size(values)): T[] | undefined {
  if (!isArray(values)) return undefined;
  return values.slice(start, end);
}
