import { describe, expect, it } from '@jest/globals';
import unionWith from '../../core/func/array/unionWith';
import isEqual from '../../core/func/lang/isEqual';

describe('unionBy', () => {
  const objects = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
  ];
  const others = [
    { x: 1, y: 1 },
    { x: 1, y: 2 },
  ];
  const array = [
    { user: 'Ben', active: false },
    { user: 'Vic', active: true },
    { user: 'Nat', active: false },
    { user: 'Den', active: false },
  ];

  it('should return new array', () => {
    expect(unionWith(objects, others, ({ x }) => isEqual(x, 2))).toEqual([{ x: 2, y: 1 }]);
    expect(
      unionWith(
        array,
        [{ user: 'Nat', active: true }],
        [{ user: 'Lat', active: false }],
        ({ user }) => user.startsWith('N') && user.endsWith('t'),
      ),
    ).toEqual([
      { user: 'Nat', active: false },
      { user: 'Nat', active: true },
    ]);
  });

  it('should return undefined expect a predicate', () => {
    expect(unionWith(array, array, { data: array } as any)).toEqual(undefined);
  });
});
