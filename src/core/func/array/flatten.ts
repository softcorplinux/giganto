import isArray from '../lang/isArray';

/**
 * Recursively flatten the array to the depth of times.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to flatten.
 * @param {Number} [depth] The maximum recursion depth.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 *
 * _.flatten([1, [2, [3, [4]], 5]], 5);
 * // => [1, 2, 3, 4, 5]
 */
export default function flatten<T>(values: T[], depth?: number): FlatArray<T[], number>[] | undefined {
  if (!isArray(values)) return undefined;
  return values.flat(depth);
}
