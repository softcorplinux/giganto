import isArray from '../lang/isArray';

export default function filter<T>(
  values: T[],
  predicate: (value: T, index: number, array: T[]) => unknown,
  thisArg?: any,
) {
  if (!isArray(values) || !predicate) return undefined;
  return values.filter((value, index, array) => predicate(value, index, array), thisArg);
}
