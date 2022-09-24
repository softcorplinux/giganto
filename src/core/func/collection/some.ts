import isArray from '../lang/isArray';

export default function some<T>(
  values: T[],
  predicate: (value: T, index: number, array: T[]) => boolean,
  thisArg?: any,
) {
  if (!isArray(values) || !predicate) return undefined;
  return values.some((value, index, array) => predicate(value, index, array));
}
