import isArray from '../lang/isArray';

export default function every<T>(
  values: T[],
  predicate: (value: T, index: number, array: T[]) => boolean,
  thisArg?: any,
) {
  if (!isArray(values) || !predicate) return undefined;
  return values.every((value, index, array) => predicate(value, index, array), thisArg);
}
