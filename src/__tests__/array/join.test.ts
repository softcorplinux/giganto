import { describe, expect, it } from '@jest/globals';
import join from '../../core/func/array/join';

describe('join', () => {
  const array = ['a', 'b', 'c'];

  it('should return new string', () => {
    expect(join(array, '~')).toEqual('a~b~c');
  });

  it('should return undefined expect an array', () => {
    expect(join({ data: array } as any, '~')).toEqual(undefined);
  });

  it('should return undefined expect string', () => {
    expect(join(array, 1 as any)).toEqual(undefined);
  });
});
