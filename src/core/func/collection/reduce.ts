import isArray from '../lang/isArray';

export default function reduce<T>(
  values: T[],
  predicate: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T,
  initialValue?: any,
) {
  if (!isArray(values) || !predicate) return undefined;
  return values.reduce((previousValue, currentValue, currentIndex, array) =>
    predicate(previousValue, currentValue, currentIndex, array),
  );
}

const res = reduce(
  [1, 2, 3],
  (res, i) => {
    return res;
  },
  [],
);
