import { describe, expect, it } from '@jest/globals';
import intersection from '../../core/func/array/intersection';

describe('intersection', () => {
  const array = [2, 1];

  it('should return new array', () => {
    expect(intersection(array, [2, 3])).toEqual([2]);
  });

  it('should return undefined expect an array', () => {
    expect(intersection({ data: array } as any, array)).toEqual(undefined);
  });

  it('should return undefined expect an array', () => {
    expect(intersection(array, { data: array } as any)).toEqual(undefined);
  });
});
