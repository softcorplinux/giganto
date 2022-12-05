import union from './union';

/**
 * Creates a version of the array without duplicates, using some null value for equality comparison,
 * in which only the first occurrence of each element is stored.
 * The order of the resulting values is determined by the order in which they appear in the array.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
export default function uniq<T>(values: T[]): T[] {
  return union(values);
}
