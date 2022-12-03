import { describe, expect, it } from '@jest/globals';
import take from '../../core/func/array/take';

describe('take', () => {
  const array = [1, 2, 3];

  it('should return new array', () => {
    expect(take(array)).toEqual([1]);
    expect(take(array, 2)).toEqual([1, 2]);
    expect(take(array, 5)).toEqual([1, 2, 3]);
    expect(take(array, 0)).toEqual([]);
    expect(take(array, -1)).toEqual([]);
  });

  it('should return undefined expect an array', () => {
    expect(take({ data: array } as any)).toEqual(undefined);
  });
});
