import isArray from '../lang/isArray';

export default function reduce<T, U>(
  values: T[],
  predicate: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T,
  initialValue?: U,
) {
  if (!isArray(values) || !predicate) return undefined;
  return (
    values.reduce((previousValue, currentValue, currentIndex, array) =>
      predicate(previousValue, currentValue, currentIndex, array),
    ),
    initialValue
  );
}
