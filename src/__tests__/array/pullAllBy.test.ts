import { describe, expect, it } from '@jest/globals';
import pullAllBy from '../../core/func/array/pullAllBy';

describe('pullAllBy', () => {
  const array = [
    { user: 'Ben', active: false },
    { user: 'Vic', active: true },
    { user: 'Nat', active: false },
    { user: 'Den', active: false },
  ];

  it('should return modified array', () => {
    expect(
      pullAllBy(
        array,
        [
          { user: 'Vic', active: true },
          { user: 'Nat', active: false },
        ],
        ({ user }) => user,
      ),
    ).toEqual([
      { user: 'Ben', active: false },
      { user: 'Den', active: false },
    ]);
  });

  it('should return undefined expect a predicate', () => {
    expect(pullAllBy(array, array, { data: array } as any)).toEqual(undefined);
  });

  it('should return undefined expect an array', () => {
    expect(pullAllBy({ data: array } as any, array as any, Math.floor)).toEqual(undefined);
  });

  it('should return undefined expect an array', () => {
    expect(pullAllBy(array as any, { data: array } as any, Math.floor)).toEqual(undefined);
  });
});
