import { describe, expect, it } from '@jest/globals';
import intersectionWith from '../../core/func/array/intersectionWith';
import isEqual from '../../core/func/lang/isEqual';

describe('intersectionWith', () => {
  const array = [2.1, 1.2];

  it('should return new array', () => {
    expect(intersectionWith([1, 2, 3, 6], [4, 5, 2, 2, 1], isEqual)).toEqual([1, 2]);
  });

  it('should return new array', () => {
    expect(intersectionWith([{ x: 2 }, { x: 1 }], [{ x: 1 }], (a, b) => a.x === b.x)).toEqual([{ x: 1 }]);
  });

  it('should return undefined expect a predicate', () => {
    expect(intersectionWith(array, array, { data: array } as any)).toEqual(undefined);
  });

  it('should return undefined expect an array', () => {
    expect(intersectionWith({ data: array } as any, array, isEqual)).toEqual(undefined);
  });

  it('should return undefined expect an array', () => {
    expect(intersectionWith(array, { data: array } as any, isEqual)).toEqual(undefined);
  });
});
