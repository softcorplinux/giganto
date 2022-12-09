import { describe, expect, it } from '@jest/globals';
import without from '../../core/func/array/without';

describe('without', () => {
  it('should return new array', () => {
    expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
  });
});
