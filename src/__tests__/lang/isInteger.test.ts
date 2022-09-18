import { describe, expect, it } from '@jest/globals';
import isInteger from '../../core/lang/isInteger';

describe('isInteger', () => {
  it('should return true', () => {
    expect(isInteger(1)).toEqual(true);
  });

  it('should return false because Number.MIN_VALUE is not integer', function () {
    expect(isInteger(Number.MIN_VALUE)).toEqual(false);
  });

  it('should return false because Infinity is not integer', function () {
    expect(isInteger(Infinity)).toEqual(false);
  });

  it('should return false because value is a string', function () {
    expect(isInteger('3')).toEqual(false);
  });

  it('should return false because value is greater than 2147483647', function () {
    expect(isInteger(21474836479)).toEqual(false);
  });
});
