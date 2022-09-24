import isArray from '../lang/isArray';

export default function find<T>(
  values: T[],
  predicate: (value: T, index: number, array: T[]) => unknown,
  thisArg?: any,
) {
  if (!isArray(values) || !predicate) return undefined;
  return values.find((value, index, array) => predicate(value, index, array));
}
