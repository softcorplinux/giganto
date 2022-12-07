import { describe, expect, it } from '@jest/globals';
import zipWith from '../../core/func/array/zipWith';

describe('zipWith', () => {
  const array = [
    [1, 2, 5, 6],
    [10, 20, 5, 5],
    [100, 200, 5, 6],
  ];

  it('should return new array', () => {
    expect(zipWith(...array, (a, b, c) => a + b + c)).toEqual([111, 222, 15, 17]);
  });

  it('should return undefined expect a predicate', () => {
    expect(zipWith(...array, { data: array } as any)).toEqual(undefined);
  });
});
