import { describe, expect, it } from '@jest/globals';
import sortedIndexOf from '../../core/func/array/sortedIndexOf';

describe('sortedIndexOf', () => {
  const array = [40, 50, 50, 50, 60];

  it('should return new number', () => {
    expect(sortedIndexOf(array, 50)).toEqual(1);
  });

  it('should return new number', () => {
    expect(sortedIndexOf(array, 41)).toEqual(-1);
  });

  it('should return undefined expect an array', () => {
    expect(sortedIndexOf({ data: array } as any, 40)).toEqual(undefined);
  });
});
