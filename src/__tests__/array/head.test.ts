import { describe, expect, it } from '@jest/globals';
import head from '../../core/func/array/head';

describe('head', () => {
  const array = [
    { user: 'Vic', active: true },
    { user: 'Nat', active: false },
    { user: 'Den', active: false },
  ];

  it('should return new array', () => {
    expect(head(array)).toEqual({ user: 'Vic', active: true });
  });

  it('should return undefined expect an array', () => {
    expect(head({ data: array } as any)).toEqual(undefined);
  });
});
