import { Many } from '../../types/common';
import zip from './zip';

/**
 * This method is similar to _.zip, except that it takes an array of grouped elements and creates an array
 * rearranging the elements according to their pre-zip configuration.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array of grouped elements to process.
 * @returns {Array} Returns the new array of regrouped elements.
 * @example
 *
 * const zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
 * // => [['a', 1, true], ['b', 2, false]]
 *
 * _.unzip(zipped);
 * // => [['a', 'b'], [1, 2], [true, false]]
 */
export default function unzip(values: Many<any[]>[]) {
  return zip(...values);
}
