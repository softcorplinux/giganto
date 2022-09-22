import isObject from '../lang/isObject';

export default function values(value: Object): any[] | undefined {
  if (!isObject(value)) return undefined;
  return Object.values(value);
}
