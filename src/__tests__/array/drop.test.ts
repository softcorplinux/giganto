import { describe, expect, it } from '@jest/globals';
import drop from '../../core/func/array/drop';

describe('differenceWith', () => {
  const array = [1, 2, 3];

  it('should return new array', () => {
    expect(drop(array)).toEqual([2, 3]);
  });

  it('should return new array', () => {
    expect(drop(array, 2)).toEqual([3]);
  });

  it('should return undefined expect an array', () => {
    expect(drop({ data: array } as any, 2)).toEqual(undefined);
  });
});
