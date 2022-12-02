import { describe, expect, it } from '@jest/globals';
import sortedLastIndexOf from '../../core/func/array/sortedLastIndexOf';

describe('sortedLastIndexOf', () => {
  const array = [40, 50, 50, 50, 60];

  it('should return new number', () => {
    expect(sortedLastIndexOf(array, 50)).toEqual(3);
  });

  it('should return new number', () => {
    expect(sortedLastIndexOf(array, 41)).toEqual(-1);
  });

  it('should return undefined expect an array', () => {
    expect(sortedLastIndexOf({ data: array } as any, 40)).toEqual(undefined);
  });
});
