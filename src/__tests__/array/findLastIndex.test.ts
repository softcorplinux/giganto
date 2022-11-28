import { describe, expect, it } from '@jest/globals';
import findLastIndex from '../../core/func/array/findLastIndex';

describe('findLastIndex', () => {
  const array = [
    { user: 'Ben', active: false },
    { user: 'Vic', active: true },
    { user: 'Nat', active: false },
    { user: 'Den', active: false },
  ];

  it('should return new array', () => {
    expect(findLastIndex(array, ({ user }) => user !== 'Den')).toEqual(2);
  });

  it('should return undefined expect an array', () => {
    expect(findLastIndex({ data: array } as any, ({ active }: any) => !active)).toEqual(undefined);
  });

  it('should return undefined expect a predicate', () => {
    expect(findLastIndex(array, { data: array } as any)).toEqual(undefined);
  });
});
