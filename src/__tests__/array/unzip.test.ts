import { describe, expect, it } from '@jest/globals';
import unzip from '../../core/func/array/unzip';
import zip from '../../core/func/array/zip';

describe('unzip', () => {
  const zipped = zip(['a', 'b'], [1, 2, 3], [true, false]);

  it('should return new array', () => {
    expect(unzip(zipped)).toEqual([
      ['a', 'b', undefined],
      [1, 2, 3],
      [true, false, undefined],
    ]);
  });
});
