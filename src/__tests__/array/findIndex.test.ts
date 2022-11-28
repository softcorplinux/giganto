import { describe, expect, it } from '@jest/globals';
import findIndex from '../../core/func/array/findIndex';

describe('dropWhile', () => {
  const array = [
    { user: 'Ben', active: false },
    { user: 'Vic', active: true },
    { user: 'Nat', active: false },
    { user: 'Den', active: false },
  ];

  it('should return new array', () => {
    expect(findIndex(array, ({ user }) => user === 'Vic')).toEqual(1);
  });

  it('should return undefined expect an array', () => {
    expect(findIndex({ data: array } as any, ({ active }: any) => !active)).toEqual(undefined);
  });

  it('should return undefined expect a predicate', () => {
    expect(findIndex(array, { data: array } as any)).toEqual(undefined);
  });
});
