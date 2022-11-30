import { describe, expect, it } from '@jest/globals';
import pullAt from '../../core/func/array/pullAt';

describe('pullAt', () => {
  const array = ['a', 'b', 'c', 'd'];

  it('should return new array', () => {
    expect(pullAt(array, [0, 2])).toEqual(['b', 'd']);
  });

  it('should return undefined expect an array', () => {
    expect(pullAt(array, 1 as any)).toEqual(undefined);
  });

  it('should return undefined expect an array', () => {
    expect(pullAt({ data: array } as any, [0, 2])).toEqual(undefined);
  });
});
