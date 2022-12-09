import { describe, expect, it } from '@jest/globals';
import xor from '../../core/func/array/xor';

describe('xor', () => {
  it('should return new array', () => {
    expect(xor([2, 1], [2, 3])).toEqual([1, 3]);
  });
});
