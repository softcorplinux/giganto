import { Many } from '../../model/common';

export default function concat<T>(...args: Many<T>[]): T[] {
  return ([] as T[]).concat(...args);
}
