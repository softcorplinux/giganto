import isArray from '../lang/isArray';

export default function dropRight<T>(value: T[], num: number = 0) {
  if (!isArray(value)) return undefined;
  const length = value.length - 1;
  return value.filter((_, k) => k <= length - num);
}
