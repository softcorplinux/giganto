import { describe, expect, it } from '@jest/globals';
import unzipWith from '../../core/func/array/unzipWith';
import zip from '../../core/func/array/zip';

describe('unzipWith', () => {
  const array = zip([1, 2], [10, 20], [100, 200]);

  it('should return new array', () => {
    expect(unzipWith(array, (a, b) => a + b)).toEqual([3, 30, 300]);
  });

  it('should return undefined expect a predicate', () => {
    expect(unzipWith(array, { data: array } as any)).toEqual(undefined);
  });
});
