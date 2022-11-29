import filter from '../collection/filter';
import size from '../collection/size';
import isArray from '../lang/isArray';
import isFunction from '../lang/isFunction';

/**
 * This method is similar to _.pullAll, except that it takes a predicate, which is called for each
 * element of the array and values to generate a criterion by which they are compared.
 * Predicate is called with two arguments values: T and args: T.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to modify.
 * @param {Array} [args] The values to remove.
 * @param {Function} [predicate] The predicate called for each element.
 * @returns {Array} Returns array.
 * @example
 *
 * const array = [
 *  { x: 1, y: 2 },
 *  { x: 3, y: 4 },
 *  { x: 5, y: 6 },
 * ];
 *
 * _.pullAllWith(array, [{ x: 3, y: 4 }], _.isEqual);
 * console.log(array);
 * // => [{ x: 1, y: 2 }, { x: 5, y: 6 }]
 */
export default function pullAllWith<T>(values: T[], args: T[], predicate: (a: T, b: T) => boolean): T[] | undefined {
  if (!isArray(values) || !isArray(args) || !predicate || !isFunction(predicate)) return undefined;
  let index = size(values);

  while (index--) {
    if (size(filter(args, (j) => predicate(values[index], j)))) {
      values.splice(index, 1);
    }
  }

  return values;
}
