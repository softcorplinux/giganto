import { ListIteratee, ListIterator, Dictionary, PropertyName } from '../../model/common';
import filter from '../collection/filter';
import isArray from '../lang/isArray';
import isEqual from '../lang/isEqual';
import isFunction from '../lang/isFunction';
import isObject from '../lang/isObject';
import isString from '../lang/isString';

export default function dropRightWhile<T>(value: T[], predicate: ListIteratee<T>): T[] | undefined {
  if (!isArray(value)) return undefined;
  if (isFunction(predicate)) {
    return filter(value, (i) => !(predicate as any)(i));
  } else if (isObject(predicate)) {
    return filter(value, (i) => !isEqual(i, predicate));
  } else if (isArray(predicate)) {
    const [k, v] = predicate;
    return filter(value, (i) => !isEqual((i as any)[k], v));
  } else if (isString(predicate)) {
    return filter(value, (i) => !(i as any)[predicate as any]);
  }
  return value;
}
