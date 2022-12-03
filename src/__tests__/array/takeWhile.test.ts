import { describe, expect, it } from '@jest/globals';
import takeWhile from '../../core/func/array/takeWhile';

describe('takeWhile', () => {
  const array = [
    { user: 'Ben', active: true },
    { user: 'Vic', active: true },
    { user: 'Nat', active: false },
    { user: 'Den', active: true },
  ];

  it('should return new array', () => {
    expect(takeWhile(array, ({ active }) => active)).toEqual([
      { user: 'Ben', active: true },
      { user: 'Vic', active: true },
    ]);
  });

  it('should return undefined expect an array', () => {
    expect(takeWhile({ data: array } as any, ({ active }: any) => !active)).toEqual(undefined);
  });

  it('should return undefined expect a predicate', () => {
    expect(takeWhile(array, { data: array } as any)).toEqual(undefined);
  });
});
