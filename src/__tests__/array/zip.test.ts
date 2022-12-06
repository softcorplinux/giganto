import { describe, expect, it } from '@jest/globals';
import zip from '../../core/func/array/zip';

describe('zip', () => {
  it('should return new array', () => {
    expect(zip(['a', 'b'], [1, 2, 3], [true, false])).toEqual([
      ['a', 1, true],
      ['b', 2, false],
      [undefined, 3, undefined],
    ]);
  });
});
