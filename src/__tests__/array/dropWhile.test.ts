import { describe, expect, it } from '@jest/globals';
import dropWhile from '../../core/func/array/dropWhile';

describe('dropWhile', () => {
  const array = [
    { user: 'Ben', active: false },
    { user: 'Vic', active: true },
    { user: 'Nat', active: false },
    { user: 'Den', active: false },
  ];

  it('should return new array', () => {
    expect(dropWhile(array, ({ active }) => !active)).toEqual([
      { user: 'Vic', active: true },
      { user: 'Nat', active: false },
      { user: 'Den', active: false },
    ]);
  });

  it('should return undefined expect an array', () => {
    expect(dropWhile({ data: array } as any, ({ active }: any) => !active)).toEqual(undefined);
  });

  it('should return undefined expect a predicate', () => {
    expect(dropWhile(array, { data: array } as any)).toEqual(undefined);
  });
});
