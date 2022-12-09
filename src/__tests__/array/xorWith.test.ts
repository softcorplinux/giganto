import { describe, expect, it } from '@jest/globals';
import xorWith from '../../core/func/array/xorWith';
import isEqual from '../../core/func/lang/isEqual';

describe('xorWith', () => {
  const objects = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
  ];
  const others = [
    { x: 1, y: 1 },
    { x: 1, y: 2 },
  ];

  it('should return new array', () => {
    expect(xorWith(objects, others, isEqual)).toEqual([
      { x: 2, y: 1 },
      { x: 1, y: 1 },
    ]);
  });

  it('should return undefined expect a predicate', () => {
    expect(xorWith(objects, others, { data: objects } as any)).toEqual(undefined);
  });
});
