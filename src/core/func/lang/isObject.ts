import isArray from './isArray';

export default function isObject(value: any) {
  return value !== null && typeof value === 'object' && !isArray(value);
}
