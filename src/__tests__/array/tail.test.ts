import { describe, expect, it } from '@jest/globals';
import tail from '../../core/func/array/tail';

describe('sortedIndex', () => {
  const array = [1, 2, 3];

  it('should return new array', () => {
    expect(tail(array)).toEqual([2, 3]);
  });

  it('should return undefined expect an array', () => {
    expect(tail({ data: array } as any)).toEqual(undefined);
  });
});
