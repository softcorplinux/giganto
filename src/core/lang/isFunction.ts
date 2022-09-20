export default function isFunction(value: any) {
  return value !== null && typeof value === 'function';
}
