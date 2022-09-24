import isObject from '../lang/isObject';

export default function values<T>(value: { [s: string]: T } | ArrayLike<T>): T[] | undefined {
  if (!isObject(value)) return undefined;
  return Object.values(value);
}
