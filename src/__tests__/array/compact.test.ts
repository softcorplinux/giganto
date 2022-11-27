import { describe, expect, it } from '@jest/globals';
import compact from '../../core/func/array/compact';

describe('compact', () => {
  const array = [0, 1, false, 2, '', 3, NaN, 4, undefined, 5, 6, Boolean(0)];

  it('should return new array', () => {
    expect(compact(array)).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });

  it('should return undefined expect an array', () => {
    expect(compact({ data: array } as any)).toEqual(undefined);
  });
});
