import { describe, expect, it } from '@jest/globals';
import fill from '../../core/func/array/fill';

describe('fill', () => {
  const array = [1, 2, 3, 4];

  it('should return new array', () => {
    expect(fill(array, 'N', 0, -2)).toEqual(['N', 'N', 3, 4]);
  });

  it('should return new array', () => {
    expect(fill(array, 'N', 1, 3)).toEqual([1, 'N', 'N', 4]);
  });

  it('should return undefined expect an array', () => {
    expect(fill({ data: array } as any, 2)).toEqual(undefined);
  });
});
