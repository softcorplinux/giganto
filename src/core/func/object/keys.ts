import isObject from '../lang/isObject';

export default function keys(value: Object): string[] | undefined {
  if (!isObject(value)) return undefined;
  return Object.keys(value);
}
