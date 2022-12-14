import isArray from '../lang/isArray';
import isFunction from '../lang/isFunction';
import isNumber from '../lang/isNumber';
import isObject from '../lang/isObject';
import isString from '../lang/isString';

export default function size(value: any) {
  if (isNumber(value)) return ('' + value).length;
  if (isString(value) || isArray(value) || isFunction(value)) return value.length;
  if (isObject(value)) return Object.keys(value).length;
  if (!value) return 0;
  return undefined;
}
