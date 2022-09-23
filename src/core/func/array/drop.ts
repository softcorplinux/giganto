import filter from '../collection/filter';
import isArray from '../lang/isArray';

export default function drop<T>(value: T[], num: number = 0): T[] | undefined {
  if (!isArray(value)) return undefined;
  return filter(value, (_, k) => k >= num);
}
