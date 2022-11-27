import { describe, expect, it } from '@jest/globals';
import dropRightWhile from '../../core/func/array/dropRightWhile';

describe('dropRightWhile', () => {
  const array = [
    { user: 'Vic', active: true },
    { user: 'Nat', active: false },
    { user: 'Den', active: false },
  ];

  it('should return new array', () => {
    expect(dropRightWhile(array, ({ active }) => !active)).toEqual([{ user: 'Vic', active: true }]);
  });

  it('should return undefined expect an array', () => {
    expect(dropRightWhile({ data: array } as any, ({ active }: any) => !active)).toEqual(undefined);
  });

  it('should return undefined expect a predicate', () => {
    expect(dropRightWhile(array, { data: array } as any)).toEqual(undefined);
  });
});
