export default function isNumber(num: number) {
  return typeof num === 'number' && !isNaN(num);
}
