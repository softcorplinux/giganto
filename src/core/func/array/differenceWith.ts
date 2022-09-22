import array from '../lang/array';
import isArray from '../lang/isArray';
import isObject from '../lang/isObject';
import keys from '../object/keys';

export default function differenceWith<T>(a: T[], b: T[], iteratee: (a: Object, b: Object) => boolean) {
  if (!isArray(a)) return undefined;
  if (!isArray(b)) return undefined;
  const res = array();

  function loop<T>(a: Object, b: Object, res: Object[], iteratee: (a: Object, b: Object) => boolean) {
    const list = keys(isArray(a) ? { ...a } : a);

    if (list) {
      for (const key of list) {
        const val1 = a[key as keyof typeof a];
        const val2 = b[key as keyof typeof b];
        const areObjects = isObject(val1) && isObject(val2);

        if (areObjects && !loop(val1, val2, res, iteratee)) {
          res.push(val1);
        } else {
          return iteratee(val1, val2);
        }
      }
    }
  }
  loop(a, b, res, iteratee);

  return res;
}
