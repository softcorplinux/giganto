import size from '../collection/size';
import array from '../lang/array';
import isArray from '../lang/isArray';
import isUndefined from '../lang/isUndefined';

/**
 * Creates a new array and fills its elements with the value from the "value" argument from beginning to end,
 * but not including "end".
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to fill.
 * @param {*} value The value to fill array with.
 * @param {Number} [start=0] The start position.
 * @param {Number} [end=values.length] The end position.
 * @returns {Array} Returns new array.
 * @example
 *
 * _.fill([1, 2, 3, 4], 'N', 0, -2);
 * // => ['N', 'N', 3, 4]
 *
 * _.fill([1, 2, 3, 4], 'N', 1, 3);
 * // => [1, 'N', 'N', 4]
 */
export default function fill<T, U>(
  values: T[],
  value: U,
  start: number = 0,
  end: number = size(values),
): (T | U)[] | undefined {
  if (!isArray(values) || isUndefined(value)) return undefined;
  const length = size(values);
  let index = length;
  const response = array(length);

  if (start! < 0) {
    start += length;
  }

  if (end < 0) {
    end += length;
  }
  end = start >= end! ? start : end;

  while (index--) {
    response[index] = index >= start && index < end ? value : values[index];
  }
  return response;
}
