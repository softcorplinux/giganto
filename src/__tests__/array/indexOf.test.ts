import { describe, expect, it } from '@jest/globals';
import indexOf from '../../core/func/array/indexOf';

describe('indexOf', () => {
  const array = [1, 2, 1, 2, 5];

  it('should return new array', () => {
    expect(indexOf(array, 2)).toEqual(1);
  });

  it('should return undefined expect an array', () => {
    expect(indexOf({ data: array } as any, 2)).toEqual(undefined);
  });
});
