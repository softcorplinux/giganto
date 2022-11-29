import { describe, expect, it } from '@jest/globals';
import lastIndexOf from '../../core/func/array/lastIndexOf';

describe('lastIndexOf', () => {
  const array = [1, 2, 1, 2, 5];

  it('should return nmuber', () => {
    expect(lastIndexOf(array, 2)).toEqual(3);
  });

  it('should return undefined expect an array', () => {
    expect(lastIndexOf({ data: array } as any, 2)).toEqual(undefined);
  });
});
