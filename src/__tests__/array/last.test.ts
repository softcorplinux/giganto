import { describe, expect, it } from '@jest/globals';
import last from '../../core/func/array/last';

describe('last', () => {
  const array = [
    { user: 'Vic', active: true },
    { user: 'Nat', active: false },
    { user: 'Den', active: false },
  ];

  it('should return new array', () => {
    expect(last(array)).toEqual({ user: 'Den', active: false });
  });

  it('should return undefined expect an array', () => {
    expect(last({ data: array } as any)).toEqual(undefined);
  });
});
