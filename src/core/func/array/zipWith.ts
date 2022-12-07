import { Many, RestCallbackRestValues } from '../../types/common';
import size from '../collection/size';
import array from '../lang/array';
import isArray from '../lang/isArray';
import isFunction from '../lang/isFunction';

/**
 * This method is similar to _.zip, except that it takes a predicate to specify how the grouped values should be combined.
 * Predict is called with the elements of each group ...args:T[].
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {...*} args The arrays to process.
 * @param {Function} [predicate] The predicate called for each element.
 * @returns {Array} Returns the new array of grouped elements.
 * @example
 *
 * _.zipWith(
 *  [1, 2, 5, 6],
 *  [10, 20, 5, 5],
 *  [100, 200, 5, 6],
 *  (a, b, c) => a + b + c);
 * // => [111, 222, 15, 17]
 */
export default function zipWith<T>(...args: RestCallbackRestValues<T>): Many<any[]>[] | undefined {
  if (!isArray(args)) return undefined;
  const [predicate] = args.splice(-1);

  if (!predicate || !isFunction(predicate)) return undefined;

  const length = Math.max(...args.map((i) => size(i)));
  const response = array(length);
  let index = length;

  while (index--) {
    response[index] = (predicate as (...args: T[]) => any)(...(args as Many<any[]>[]).map((i) => i[index]));
  }

  return response;
}
