import { describe, expect, it } from '@jest/globals';
import pull from '../../core/func/array/pull';

describe('pull', () => {
  const array = ['a', 'b', 'c', 'a', 'b', 'c'];

  it('should return new array', () => {
    expect(pull(array, 'a', 'c')).toEqual(['b', 'b']);
  });

  it('should return undefined expect an array', () => {
    expect(pull({ data: array } as any, 'a', 'c')).toEqual(undefined);
  });
});
