import { describe, expect, it } from '@jest/globals';
import uniqBy from '../../core/func/array/uniqBy';

describe('uniqBy', () => {
  const array = [
    { user: 'Ben', active: false },
    { user: 'Vic', active: true },
    { user: 'Nat', active: false },
    { user: 'Den', active: false },
  ];

  it('should return new array', () => {
    expect(uniqBy([2.1, 1.2, 2.3], Math.floor)).toEqual([2.1, 1.2]);
    expect(uniqBy(array, ({ active }) => active)).toEqual([
      { user: 'Ben', active: false },
      { user: 'Vic', active: true },
    ]);
  });

  it('should return undefined expect a predicate', () => {
    expect(uniqBy(array, { data: array } as any)).toEqual(undefined);
  });
});
