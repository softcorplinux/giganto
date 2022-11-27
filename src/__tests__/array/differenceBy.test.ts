import { describe, expect, it } from '@jest/globals';
import differenceBy from '../../core/func/array/differenceBy';

describe('differenceBy', () => {
  const array = [2.1, 1.2];

  it('should return new array', () => {
    expect(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([1.2]);
  });

  it('should return new array', () => {
    expect(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], (value) => value.x)).toEqual([{ x: 2 }]);
  });

  it('should return undefined expect a predicate', () => {
    expect(differenceBy(array, array, { data: array } as any)).toEqual(undefined);
  });

  it('should return undefined expect an array', () => {
    expect(differenceBy({ data: array } as any, array, Math.floor)).toEqual(undefined);
  });

  it('should return undefined expect an array', () => {
    expect(differenceBy(array, { data: array } as any, Math.floor)).toEqual(undefined);
  });
});
