import { describe, expect, it } from '@jest/globals';
import difference from '../../core/func/array/difference';

describe('difference', () => {
  const array = [2, 1];

  it('should return new array', () => {
    expect(difference(array, [2, 3])).toEqual([1]);
  });

  it('should return undefined expect an array', function () {
    expect(difference({ data: array } as any, array)).toEqual(undefined);
  });

  it('should return undefined expect an array', function () {
    expect(difference(array, { data: array } as any)).toEqual(undefined);
  });
});
