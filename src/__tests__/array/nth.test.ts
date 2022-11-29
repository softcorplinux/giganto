import { describe, expect, it } from '@jest/globals';
import nth from '../../core/func/array/nth';

describe('nth', () => {
  const array = [
    { user: 'Ben', active: false },
    { user: 'Vic', active: true },
    { user: 'Nat', active: false },
    { user: 'Den', active: false },
  ];

  it('should return object', () => {
    expect(nth(array, 2)).toEqual({ user: 'Nat', active: false });
  });

  it('should return object', () => {
    expect(nth(array, -3)).toEqual({ user: 'Vic', active: true });
  });

  it('should return undefined expect a number', () => {
    expect(nth(array, '4' as any)).toEqual(undefined);
  });

  it('should return undefined expect an array', () => {
    expect(nth({ data: array } as any, 2)).toEqual(undefined);
  });
});
