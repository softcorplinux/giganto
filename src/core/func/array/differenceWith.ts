import filter from '../collection/filter';
import size from '../collection/size';
import isArray from '../lang/isArray';
import isFunction from '../lang/isFunction';

/**
 * This method is similar to _.differenceBy, except that it takes a third predicate argument with two parameters,
 * values: T and args:T. The predicate is called for each element of the array and values to generate a criterion
 * by which they are compared.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to inspect.
 * @param {Array} [args] The values to exclude.
 * @param {Function} [predicate] The predicate called for each element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.differenceWith([1, 2, 3, 6], [4, 5, 2, 2, 1], _.isEqual)
 * // => [3, 6]
 *
 * _.differenceWith([{ x: 2 }, { x: 1 }], [{ x: 1 }], (a, b) => a.x === b.x);
 * // => [{ 'x': 2 }]
 */
export default function differenceWith<T>(values: T[], args: T[], predicate: (a: T, b: T) => boolean): T[] | undefined {
  if (!isArray(values) || !isArray(args) || !predicate || !isFunction(predicate)) return undefined;
  const setA = new Set(values);
  const setB = new Set(args);
  return [...new Set(filter([...setA], (i) => !size(filter([...setB], (j) => predicate(i, j)))))];
}
