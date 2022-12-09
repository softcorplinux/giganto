import { Many, RestCallbackCompare } from '../../types/common';
import size from '../collection/size';
import isArray from '../lang/isArray';
import isFunction from '../lang/isFunction';
import differenceWith from './differenceWith';

/**
 * This method is similar to _.or, except that it accepts a comparator that is called to compare array elements.
 * The order of the resulting values is determined by the order in which they appear in arrays.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {...*} args The arrays to inspect.
 * @param {Function} [predicate] The predicate called for each element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
 * const others = [{ x: 1, y: 1 }, { x: 1, y: 2 }];
 *
 * _.xorWith(objects, others, _.isEqual);
 * // => [{ x: 2, y: 1 }, { x: 1, y: 1 }]
 */
export default function xorWith<T>(...args: RestCallbackCompare<T>): Many<T>[] | undefined {
  if (!isArray(args)) return undefined;
  const [predicate] = args.splice(-1);

  if (!predicate || !isFunction(predicate)) return undefined;

  const arr = ([] as T[]).concat(...(args as T[]));
  const mapA = new Map<string, T>();
  const mapB = new Map<string, T>();
  const length = size(arr);
  let index = -1;

  while (++index < length) {
    const stringify = JSON.stringify(arr[index]);

    if (!mapA.has(stringify)) {
      mapA.set(stringify, arr[index]);
    } else {
      mapB.set(stringify, arr[index]);
    }
  }

  return differenceWith<T>([...mapA.values()], [...mapB.values()], predicate as (a: T, b: T) => any);
}
