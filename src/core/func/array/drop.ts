import filter from '../collection/filter';
import isArray from '../lang/isArray';

export default function drop<T>(values: T[], num: number = 0): T[] | undefined {
  if (!isArray(values)) return undefined;
  return filter(values, (_, key) => key >= num);
}
