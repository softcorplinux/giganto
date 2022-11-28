import filter from '../collection/filter';
import isArray from '../lang/isArray';
import isFunction from '../lang/isFunction';

/**
 * This method is similar to _.intersection, except that it takes the third predicate argument,
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
 * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
 * // => [2.1]
 *
 * _.intersectionBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], ({x}) => x);
 * // => [{ 'x': 1 }]
 */
export default function intersectionBy<T>(values: T[], args: T[], predicate: (value: T) => any): T[] | undefined {
  if (!isArray(values) || !isArray(args) || !predicate || !isFunction(predicate)) return undefined;
  const setA = new Set(values);
  const setB = new Set(args.map((i) => predicate(i)));
  return [
    ...new Set(
      filter([...setA], (i) => {
        return setB.has(predicate(i));
      }),
    ),
  ];
}
