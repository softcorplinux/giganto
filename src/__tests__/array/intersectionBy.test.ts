import { describe, expect, it } from '@jest/globals';
import intersectionBy from '../../core/func/array/intersectionBy';

describe('differenceBy', () => {
  const array = [2.1, 1.2];

  it('should return new array', () => {
    expect(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([2.1]);
  });

  it('should return new array', () => {
    expect(intersectionBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], (value) => value.x)).toEqual([{ x: 1 }]);
  });

  it('should return undefined expect a predicate', () => {
    expect(intersectionBy(array, array, { data: array } as any)).toEqual(undefined);
  });

  it('should return undefined expect an array', () => {
    expect(intersectionBy({ data: array } as any, array, Math.floor)).toEqual(undefined);
  });

  it('should return undefined expect an array', () => {
    expect(intersectionBy(array, { data: array } as any, Math.floor)).toEqual(undefined);
  });
});
