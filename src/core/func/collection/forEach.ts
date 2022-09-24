import isArray from '../lang/isArray';

export default function forEach<T>(
  values: T[],
  predicate: (value: T, index: number, array: T[]) => void,
  thisArg?: any,
) {
  if (!isArray(values) || !predicate) return undefined;
  return values.forEach((value, index, array) => {
    predicate(value, index, array);
  });
}
