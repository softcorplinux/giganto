import { describe, expect, it } from '@jest/globals';
import unionBy from '../../core/func/array/unionBy';

describe('unionBy', () => {
  const array = [
    { user: 'Ben', active: false },
    { user: 'Vic', active: true },
    { user: 'Nat', active: false },
    { user: 'Den', active: false },
  ];

  it('should return new array', () => {
    expect(unionBy([2.1], [1.2, 2.3], Math.floor)).toEqual([2.1, 1.2]);
    expect(
      unionBy(array, [{ user: 'Nat', active: true }], [{ user: 'Lat', active: false }], ({ active }) => active),
    ).toEqual([
      { user: 'Ben', active: false },
      { user: 'Vic', active: true },
    ]);
  });

  it('should return undefined expect a predicate', () => {
    expect(unionBy(array, array, { data: array } as any)).toEqual(undefined);
  });
});
