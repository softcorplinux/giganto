import { Many } from '../../model/common';

export default function concatUnique<T>(...args: Many<T>[]): T[] {
  const res: T[] = [...new Set(([] as T[]).concat(...args))];
  return res;
}
