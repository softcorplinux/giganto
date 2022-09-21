import { Many } from '../../model/common';

export default function union<T>(...args: Many<T>[]): T[] {
  return [...new Set(([] as T[]).concat(...args))];
}
