import { describe, expect, it } from '@jest/globals';
import pullAllWith from '../../core/func/array/pullAllWith';
import isEqual from '../../core/func/lang/isEqual';

describe('pullAllWith', () => {
  const array = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 5, y: 6 },
  ];

  it('should return new array', () => {
    expect(pullAllWith(array, [{ x: 3, y: 4 }], isEqual)).toEqual([
      { x: 1, y: 2 },
      { x: 5, y: 6 },
    ]);
  });

  it('should return undefined expect a predicate', () => {
    expect(pullAllWith(array, array, { data: array } as any)).toEqual(undefined);
  });

  it('should return undefined expect an array', () => {
    expect(pullAllWith({ data: array } as any, array, isEqual)).toEqual(undefined);
  });

  it('should return undefined expect an array', () => {
    expect(pullAllWith(array, { data: array } as any, isEqual)).toEqual(undefined);
  });
});
