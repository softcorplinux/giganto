export default function isInteger(value: any) {
  let x;
  return isNaN(value) || value instanceof String || typeof value === 'string'
    ? !1
    : ((x = parseFloat(value)), (0 | x) === x);
}
