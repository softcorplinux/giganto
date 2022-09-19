import { describe, expect, it } from '@jest/globals';
import isArray from '../../core/lang/isArray';

describe('isArray', () => {
  const array = [0, 1, 2, 3, 4, 5];

  it('should return true', () => {
    expect(isArray(array)).toEqual(true);
  });

  it('should return false because is a string', function () {
    expect(isArray('abc')).toEqual(false);
  });

  it('should return false because is a object', function () {
    expect(isArray({ a: 1, b: 2, c: 3 })).toEqual(false);
  });
});
