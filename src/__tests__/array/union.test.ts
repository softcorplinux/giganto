import { describe, expect, it } from '@jest/globals';
import union from '../../core/func/array/union';

describe('union', () => {
  const array = [1, { user: 'Vic' }];

  it('should return new array', () => {
    expect(union([2], [1, 2, 5, 2])).toEqual([2, 1, 5]);
  });

  it('should return new array', () => {
    expect(union(2, 2, 3, 3, 1)).toEqual([2, 3, 1]);
  });

  it('should return new array', () => {
    expect(union(2, 2, 3, 3, 1, [4], [1])).toEqual([2, 3, 1, 4]);
  });
});
