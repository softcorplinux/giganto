import { describe, expect, it } from '@jest/globals';
import takeRightWhile from '../../core/func/array/takeRightWhile';

describe('takeRightWhile', () => {
  const array = [
    { user: 'Ben', active: false },
    { user: 'Vic', active: true },
    { user: 'Nat', active: false },
    { user: 'Den', active: false },
  ];

  it('should return new array', () => {
    expect(takeRightWhile(array, ({ active }) => !active)).toEqual([
      { user: 'Nat', active: false },
      { user: 'Den', active: false },
    ]);
  });

  it('should return undefined expect an array', () => {
    expect(takeRightWhile({ data: array } as any, ({ active }: any) => !active)).toEqual(undefined);
  });

  it('should return undefined expect a predicate', () => {
    expect(takeRightWhile(array, { data: array } as any)).toEqual(undefined);
  });
});
