import { describe, expect, it } from '@jest/globals';
import sortedIndex from '../../core/func/array/sortedIndex';

describe('sortedIndex', () => {
  const array = [30, 50, 60, 70];

  it('should return new array', () => {
    expect(sortedIndex(array, 40)).toEqual(1);
  });

  it('should return undefined expect an array', () => {
    expect(sortedIndex({ data: array } as any, 40)).toEqual(undefined);
  });
});
