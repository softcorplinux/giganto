import { describe, expect, it } from '@jest/globals';
import sortedLastIndex from '../../core/func/array/sortedLastIndex';

describe('sortedLastIndex', () => {
  const array = [4, 5, 5, 5, 6];

  it('should return new array', () => {
    expect(sortedLastIndex(array, 5)).toEqual(4);
  });

  it('should return undefined expect an array', () => {
    expect(sortedLastIndex({ data: array } as any, 40)).toEqual(undefined);
  });
});
