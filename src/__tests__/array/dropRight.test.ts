import { describe, expect, it } from '@jest/globals';
import dropRight from '../../core/func/array/dropRight';

describe('dropRight', () => {
  const array = [1, 2, 3];

  it('should return new array', () => {
    expect(dropRight(array)).toEqual([1, 2]);
  });

  it('should return new array', () => {
    expect(dropRight(array, 2)).toEqual([1]);
  });

  it('should return undefined expect an array', () => {
    expect(dropRight({ data: array } as any, 2)).toEqual(undefined);
  });
});
