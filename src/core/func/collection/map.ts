import isArray from '../lang/isArray';

export default function map<T>(values: T[], predicate: (value: T, index: number, array: T[]) => T, thisArg?: any) {
  if (!isArray(values) || !predicate) return undefined;
  return values.map((value, index, array) => predicate(value, index, array));
}
