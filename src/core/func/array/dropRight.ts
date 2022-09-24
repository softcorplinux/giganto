import filter from '../collection/filter';
import isArray from '../lang/isArray';

export default function dropRight<T>(values: T[], num: number = 0): T[] | undefined {
  if (!isArray(values)) return undefined;
  const length = values.length - 1;
  return filter(values, (_, key) => key <= length - num);
}
