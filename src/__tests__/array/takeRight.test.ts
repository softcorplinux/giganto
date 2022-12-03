import { describe, expect, it } from '@jest/globals';
import takeRight from '../../core/func/array/takeRight';

describe('takeRight', () => {
  const array = [1, 2, 3];

  it('should return new array', () => {
    expect(takeRight(array)).toEqual([3]);
    expect(takeRight(array, 2)).toEqual([2, 3]);
    expect(takeRight(array, 5)).toEqual([1, 2, 3]);
    expect(takeRight(array, 0)).toEqual([]);
    expect(takeRight(array, -1)).toEqual([]);
  });

  it('should return undefined expect an array', () => {
    expect(takeRight({ data: array } as any)).toEqual(undefined);
  });
});
