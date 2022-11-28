import { describe, expect, it } from '@jest/globals';
import fromPairs from '../../core/func/array/fromPairs';

describe('fromPairs', () => {
  const array = [
    ['a', 1],
    ['b', 2],
    ['a', 2],
  ];

  it('should return new object', () => {
    expect(fromPairs(array)).toEqual({ a: 2, b: 2 });
  });

  it('should return undefined expect an array', () => {
    expect(fromPairs({ data: array } as any)).toEqual(undefined);
  });
});
