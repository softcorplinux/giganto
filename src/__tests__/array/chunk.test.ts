import { describe, expect, it } from '@jest/globals';
import chunk from '../../core/func/array/chunk';

describe('chunk', () => {
  const array = [0, 1, 2, 3, 4, 5];

  it('should return chunked arrays', () => {
    expect(chunk(array, 3)).toEqual([
      [0, 1, 2],
      [3, 4, 5],
    ]);
  });

  it('should return the last chunk as remaining elements', () => {
    expect(chunk(array, 4)).toEqual([
      [0, 1, 2, 3],
      [4, 5],
    ]);
  });

  it('should return undefined expect an array', function () {
    expect(chunk({ data: array } as any, 2)).toEqual(undefined);
  });

  it('should return undefined expect a number', function () {
    expect(chunk(array, array.length / 4)).toEqual(undefined);
  });
});
