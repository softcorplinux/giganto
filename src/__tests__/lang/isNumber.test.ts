import { describe, expect, it } from '@jest/globals';
import isNumber from '../../core/lang/isNumber';

describe('isNumber', () => {
  it('should return true', () => {
    expect(isNumber(3)).toEqual(true);
  });

  it('should return true because Number.MIN_VALUE is a number', function () {
    expect(isNumber(Number.MIN_VALUE)).toEqual(true);
  });

  it('should return true because Infinity is a number', function () {
    expect(isNumber(Infinity)).toEqual(true);
  });

  it('should return false because value is a string', function () {
    expect(isNumber('3' as any)).toEqual(false);
  });
});
