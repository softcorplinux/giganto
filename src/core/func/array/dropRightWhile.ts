import filter from '../collection/filter';
import isArray from '../lang/isArray';

export default function dropRightWhile<T>(
  values: T[],
  predicate: (value: T, index: number, array: T[]) => boolean,
  thisArg?: any,
): T[] | undefined {
  if (!isArray(values) || !predicate) return undefined;
  return filter(values, (value, index, array) => !predicate(value, index, array));
}