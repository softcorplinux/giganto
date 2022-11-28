import { describe, expect, it } from '@jest/globals';
import flatten from '../../core/func/array/flatten';

describe('flatten', () => {
  const array = [1, [2, [3, [4]], 5]];

  it('should return new array', () => {
    expect(flatten(array)).toEqual([1, 2, [3, [4]], 5]);
  });

  it('should return new array', () => {
    expect(flatten(array, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return undefined expect an array', () => {
    expect(flatten({ data: array } as any)).toEqual(undefined);
  });
});
