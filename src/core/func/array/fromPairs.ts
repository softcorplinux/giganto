import isArray from '../lang/isArray';

/**
 * Reverse _.toPairs; this method returns an object consisting of key-value pairs.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.fromPairs([['a', 1], ['b', 2], ['a', 2]]);
 * // => {a: 2, b: 2}
 */
export default function fromPairs<T>(values: T) {
  if (!isArray(values)) return undefined;
  return Object.fromEntries(values);
}
