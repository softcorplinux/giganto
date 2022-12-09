import { describe, expect, it } from '@jest/globals';
import xorBy from '../../core/func/array/xorBy';

describe('xorBy', () => {
  const array = [
    { user: 'Ben', active: false },
    { user: 'Vic', active: true },
    { user: 'Nat', active: false },
    { user: 'Den', active: false },
  ];

  it('should return new array', () => {
    expect(xorBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([1.2, 3.4]);
    expect(
      xorBy(
        array,
        [
          { user: 'Nat', active: false },
          { user: 'Vic', active: true },
        ],
        ({ user }) => user,
      ),
    ).toEqual([
      { user: 'Ben', active: false },
      { user: 'Den', active: false },
    ]);
  });

  it('should return undefined expect a predicate', () => {
    expect(xorBy(...array, { data: array } as any)).toEqual(undefined);
  });
});
