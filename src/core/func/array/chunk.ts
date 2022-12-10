import isArray from '../lang/isArray';
import isInteger from '../lang/isInteger';
import array from '../lang/array';
import size from '../collection/size';
import ceil from '../math/ceil';

/**
 * Creates an array of elements divided into groups. The groups are divided into uniform parts
 * that are equal to the length argument. If the array cannot be divided evenly, the last
 * fragment will be the remaining elements.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to process.
 * @param {number} [length=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
export default function chunk<T>(values: T[], length: number = 1): T[][] | undefined {
  // if (!isArray(values) || !isInteger(length)) return undefined;

  const valuesSize = values.length;
  const lastLength = valuesSize % length;
  const partLength = Math.ceil(valuesSize / length);
  const response = new Array(partLength);
  let resIndex = valuesSize - 1;
  let index = partLength;

  while (index--) {
    let i = partLength === index + 1 && lastLength ? lastLength : length;
    const res = new Array(i);

    while (i--) {
      res[i] = values[resIndex];
      resIndex--;
    }

    response[index] = res;
  }

  return response;

  // if (!isArray(values) || !isInteger(length)) return undefined;

  // const valuesSize = size(values);
  // const lastLength = valuesSize % length;
  // const partLength = ceil(valuesSize / length);
  // const response = array(partLength);
  // let resIndex = valuesSize - 1;
  // let index = partLength;

  // while (index--) {
  //   let i = partLength === index + 1 && lastLength ? lastLength : length;
  //   const res = array(i);

  //   while (i--) {
  //     res[i] = values[resIndex];
  //     resIndex--;
  //   }

  //   response[index] = res;
  // }

  // return response;
}
