import { describe, expect, it } from '@jest/globals';
import uniq from '../../core/func/array/uniq';

describe('uniq', () => {
  it('should return new array', () => {
    expect(uniq([2, 1, 2])).toEqual([2, 1]);
  });
});
