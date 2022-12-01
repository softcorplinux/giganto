import { describe, expect, it } from '@jest/globals';
import slice from '../../core/func/array/slice';

describe('slice', () => {
  const array = [1, 2, 3];

  it('should return new array', () => {
    expect(slice(array, 1, 2)).toEqual([2]);
  });

  it('should return new array', () => {
    expect(slice(array, 1)).toEqual([2, 3]);
  });

  it('should return undefined expect an array', () => {
    expect(slice({ data: array } as any)).toEqual(undefined);
  });
});
