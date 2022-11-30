import isArray from '../lang/isArray';
import isUndefined from '../lang/isUndefined';

export default function includes<T>(values: T[], value: T, fromIndex?: number) {
  if (!isArray(values) || isUndefined(value)) return undefined;
  return values.includes(value, fromIndex);
}
