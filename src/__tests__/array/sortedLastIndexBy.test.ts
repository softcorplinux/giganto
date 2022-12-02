import { describe, expect, it } from '@jest/globals';
import sortedLastIndexBy from '../../core/func/array/sortedLastIndexBy';

describe('sortedLastIndexBy', () => {
  const array = [
    { user: 'Ben', age: 30 },
    { user: 'Vic', age: 40 },
    { user: 'Vic', age: 40 },
    { user: 'Nat', age: 50 },
    { user: 'Den', age: 60 },
  ];

  it('should return new array', () => {
    expect(sortedLastIndexBy(array, { user: 'Vic', age: 40 }, ({ age }) => age)).toEqual(3);
  });

  it('should return undefined expect an array', () => {
    expect(sortedLastIndexBy({ data: array } as any, { user: 'Vic', age: 40 }, ({ age }) => age)).toEqual(undefined);
  });
});
