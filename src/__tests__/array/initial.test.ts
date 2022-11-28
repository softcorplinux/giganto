import { describe, expect, it } from '@jest/globals';
import initial from '../../core/func/array/initial';

describe('initial', () => {
  const array = [1, 2, 1, 2, 5];

  it('should return new array', () => {
    expect(initial([1, 2, 3])).toEqual([1, 2]);
  });

  it('should return undefined expect an array', () => {
    expect(initial({ data: array } as any)).toEqual(undefined);
  });
});
