import { Many } from '../../types/common';
import filter from '../collection/filter';
import find from '../collection/find';
import includes from '../collection/includes';
import size from '../collection/size';
import isArray from '../lang/isArray';
import isEqual from '../lang/isEqual';
import isFunction from '../lang/isFunction';

/**
 * Creates a new array of unique values.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} args The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2, 5, 2]);
 * // => [2, 1, 5]
 *
 * _.union(2, 2, 3, 3, 1);
 * // => [2, 3, 1]
 *
 * _.union(2, 2, 3, 3, 1, [4], [1]);
 * // => [2, 3, 1, 4]
 */
export default function unionWith<T>(values: T[], args: T[], predicate: (a: T, b: T) => boolean): T[] | undefined {
  if (!isArray(values) || !isArray(args) || !predicate || !isFunction(predicate)) return undefined;
  const set = new Set();
  values = [...values, ...args];
  const length = size(values);
  let index = -1;
  const response: T[] = [];

  while (++index < length) {
    const value = predicate(values[index], values[index]);

    if (!set.has(value)) {
      set.add(value);
      response.push(values[index]);
    }
  }

  return response;

  // const setA = new Set(values.map((i) => JSON.stringify(i)));
  // const setB = new Set(args.map((i) => JSON.stringify(i)));
  // return [
  //   ...new Set(filter([...setA], (i) => !size(filter([...setB], (j) => predicate(JSON.parse(i), JSON.parse(j)))))),
  // ];
  // return [...new Set([...values, ...args].map((i: any) => JSON.stringify(i)))]
  //   .map((i) => JSON.parse(i))
  //   .filter((i, k, arr) => {
  //     // console.log(k, JSON.parse(i), arr);

  //     // return arr.filter((j) => predicate(JSON.parse(i), JSON.parse(i)));
  //     return predicate(i, i);
  //   });
  // console.log(1111, set);

  // console.log('[...values, ...args]', [...values, ...args]);

  // [...values, ...args].reduce((acc, cur) => {
  //   // if(Array.isArray(acc) && Array.isArray(cur)){
  //   console.log('acc', acc, cur);

  //   //  acc=[...acc,...cur];
  //   return acc;
  //   // }
  // });

  // console.log(
  //   111,
  //   response.filter((j, k) => predicate(response[1], j)),
  // );

  // const response = [...values, ...args];
  // let index = size(response);

  // while (index--) {
  //   if (size(filter(response, (j) => predicate(response[index], j))) > 1) {
  //     response.splice(index, 1);
  //   }
  // }

  // return response;
}
