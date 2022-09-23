import keys from '../object/keys';
import isArray from './isArray';
import isFunction from './isFunction';
import isNumber from './isNumber';
import isObject from './isObject';
import isString from './isString';

export default function isEqual(a: any, b: any) {
  if (isString(a) || isNumber(a) || isFunction(a)) return a === b;
  else if (Number.isNaN(a)) return isNaN(a) === Number.isNaN(b);
  else if ((isArray(a) && isArray(b)) || (isObject(a) && isObject(b))) {
    const keys1 = keys(isArray(a) ? { ...a } : a);
    const keys2 = keys(isArray(a) ? { ...b } : b);

    if (keys1 && keys2) {
      if (keys1.length !== keys2.length) {
        return false;
      }
      for (const key of keys1) {
        const val1 = a[key];
        const val2 = b[key];
        const areObjects = isObject(val1) && isObject(val2);
        if ((areObjects && !isEqual(val1, val2)) || (!areObjects && val1 !== val2)) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  return false;
}
