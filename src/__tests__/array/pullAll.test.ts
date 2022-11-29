import { describe, expect, it } from '@jest/globals';
import pullAll from '../../core/func/array/pullAll';

describe('pullAll', () => {
  const array = ['a', 'b', 'c', 'a', 'b', 'c'];

  it('should return new array', () => {
    expect(pullAll(array, ['a', 'c'])).toEqual(['b', 'b']);
  });

  it('should return undefined expect an array', () => {
    expect(pullAll({ data: array } as any, ['a', 'c'])).toEqual(undefined);
  });
});
