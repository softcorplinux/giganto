import { describe, expect, it } from '@jest/globals';
import uniqWith from '../../core/func/array/uniqWith';
import isEqual from '../../core/func/lang/isEqual';

describe('uniqWith', () => {
  const objects = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { x: 1, y: 1 },
    { x: 1, y: 2 },
  ];

  const array = [
    { user: 'Ben', active: false },
    { user: 'Vic', active: true },
    { user: 'Nat', active: false },
    { user: 'Den', active: false },
    { user: 'Nat', active: true },
    { user: 'Nat', active: false },
  ];

  it('should return new array', () => {
    expect(uniqWith(objects, ({ y }) => isEqual(y, 2))).toEqual([{ x: 1, y: 2 }]);
    expect(uniqWith(array, ({ user }) => user.startsWith('N') && user.endsWith('t'))).toEqual([
      { user: 'Nat', active: false },
      { user: 'Nat', active: true },
    ]);
  });

  it('should return undefined expect a predicate', () => {
    expect(uniqWith(array, { data: array } as any)).toEqual(undefined);
  });
});
