import { describe, expect, it } from '@jest/globals';
import concat from '../../core/func/array/concat';

describe('concat', () => {
  const array = [1, { user: 'Vic' }];

  it('should return new array', () => {
    expect(concat(array, 2, [3], [[4]], { user: 'Nat' })).toEqual([1, { user: 'Vic' }, 2, [3], [[4]], { user: 'Nat' }]);
  });

  it('should return undefined expect an array', () => {
    expect(concat({ data: array } as any)).toEqual(undefined);
  });
});
