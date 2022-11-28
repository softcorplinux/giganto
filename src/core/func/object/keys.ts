import isObject from '../lang/isObject';

export default function keys(value: object): string[] | undefined {
  if (!isObject(value)) return undefined;
  return Object.keys(value);
}
