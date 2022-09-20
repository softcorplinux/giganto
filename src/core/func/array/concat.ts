import { Many } from '../../model/common';

export default function concat<T>(...args: Many<T>[]): T[] {
  const res: T[] = ([] as T[]).concat.apply([], args);
  return res;
}
