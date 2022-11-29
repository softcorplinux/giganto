import isArray from '../lang/isArray';

export default function includes<T>(values: T[], value: T, fromIndex?: number) {
  if (!isArray(values) || !value) return undefined;
  return values.includes(value, fromIndex);
}
