import filter from '../collection/filter';
import isArray from '../lang/isArray';

export default function dropRight<T>(value: T[], num: number = 0): T[] | undefined {
  if (!isArray(value)) return undefined;
  const length = value.length - 1;
  return filter(value, (_, k) => k <= length - num);
}
