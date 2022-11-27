import { describe, expect, it } from '@jest/globals';
import differenceWith from '../../core/func/array/differenceWith';
import isEqual from '../../core/func/lang/isEqual';

describe('differenceWith', () => {
  const array = [2.1, 1.2];

  it('should return new array', () => {
    expect(differenceWith([1, 2, 3, 6], [4, 5, 2, 2, 1], isEqual)).toEqual([3, 6]);
  });

  it('should return new array', () => {
    expect(differenceWith([{ x: 2 }, { x: 1 }], [{ x: 1 }], (a, b) => a.x === b.x)).toEqual([{ x: 2 }]);
  });

  it('should return undefined expect a predicate', () => {
    expect(differenceWith(array, array, { data: array } as any)).toEqual(undefined);
  });

  it('should return undefined expect an array', () => {
    expect(differenceWith({ data: array } as any, array, isEqual)).toEqual(undefined);
  });

  it('should return undefined expect an array', () => {
    expect(differenceWith(array, { data: array } as any, isEqual)).toEqual(undefined);
  });
});
