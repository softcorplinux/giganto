import isArray from '../lang/isArray';

export default function drop<T>(value: T[], num: number = 0) {
  if (!isArray(value)) return undefined;
  return value.filter((_, k) => k >= num);
}
