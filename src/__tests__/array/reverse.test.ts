import { describe, expect, it } from '@jest/globals';
import reverse from '../../core/func/array/reverse';

describe('remove', () => {
  const array = [1, 2, 3];

  it('should return new array', () => {
    expect(reverse(array)).toEqual([3, 2, 1]);
    expect(array).toEqual([3, 2, 1]);
  });

  it('should return undefined expect a predicate', () => {
    expect(reverse({ data: array } as any)).toEqual(undefined);
  });
});
