import isArray from '../lang/isArray';

export default function filter<T>(
  value: T[],
  predicate: (value: T, index: number, array: T[]) => unknown,
  thisArg?: any,
) {
  if (!isArray(value)) return undefined;
  return value.filter((i, k, a) => predicate(i, k, a));
}
