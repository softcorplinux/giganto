import isArray from '../lang/isArray';
import isEqual from '../lang/isEqual';
import isFunction from '../lang/isFunction';
import differenceWith from './differenceWith';

/**
 * This method is similar to _.difference, except that it takes the third predicate argument,
 * it is a function with a single argumet of type args:T, it is called for each element of the
 * array and values to generate a criterion by which they are compared.
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
 * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
 * // => [1.2]
 *
 * _.differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], ({x}) => x);
 * // => [{ 'x': 2 }]
 */
export default function differenceBy<T>(values: T[], args: T[], predicate: (value: T) => any): T[] | undefined {
  if (!isArray(values) || !isArray(args) || !predicate || !isFunction(predicate)) return undefined;
  return differenceWith(values, args, (a, b) => isEqual(predicate(a), predicate(b)));
}
