import { describe, expect, it } from '@jest/globals';
import sortedIndexBy from '../../core/func/array/sortedIndexBy';

describe('sortedIndexBy', () => {
  const array = [
    { user: 'Ben', age: 30 },
    { user: 'Nat', age: 50 },
    { user: 'Den', age: 60 },
  ];

  it('should return new array', () => {
    expect(sortedIndexBy(array, { user: 'Vic', age: 40 }, ({ age }) => age)).toEqual(1);
  });

  it('should return undefined expect an array', () => {
    expect(sortedIndexBy({ data: array } as any, { user: 'Vic', age: 40 }, ({ age }) => age)).toEqual(undefined);
  });
});
