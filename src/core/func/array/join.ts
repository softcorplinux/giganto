import isArray from '../lang/isArray';
import isString from '../lang/isString';

/**
 * Converts all array elements to a delimited string.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to convert.
 * @param {String} [separator=','] The element separator.
 * @returns {String} Returns the joined string.
 * @example
 *
 * _.join(['a', 'b', 'c'], '~');
 * // => 'a~b~c'
 */
export default function join<T>(values: T[], separator: string = ','): string | undefined {
  if (!isArray(values) || !isString(separator)) return undefined;
  return values.join(separator);
}
