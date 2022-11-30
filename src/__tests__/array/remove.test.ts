import { describe, expect, it } from '@jest/globals';
import remove from '../../core/func/array/remove';

describe('remove', () => {
  const array = [
    { user: 'Ben', active: false },
    { user: 'Vic', active: true },
    { user: 'Nat', active: false },
    { user: 'Den', active: false },
  ];

  it('should return new array', () => {
    expect(remove(array, ({ active }) => !active)).toEqual([
      { user: 'Ben', active: false },
      { user: 'Nat', active: false },
      { user: 'Den', active: false },
    ]);
    expect(array).toEqual([{ user: 'Vic', active: true }]);
  });

  it('should return undefined expect a predicate', () => {
    expect(remove(array, { data: array } as any)).toEqual(undefined);
  });

  it('should return undefined expect an array', () => {
    expect(remove({ data: array } as any, ({ active }: any) => !active)).toEqual(undefined);
  });
});
