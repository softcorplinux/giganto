export type Many<T> = T | ConcatArray<T> | ReadonlyArray<T>;
export interface Dictionary<T> {
  [key: string | symbol]: T;
}
export type PartialShallow<T> = {
  [P in keyof T]?: T[P] extends object ? object : T[P];
};
export type PropertyName = string | number | symbol;
export type NotVoid = unknown;
export type IterateeShorthand<T> = PropertyName | [PropertyName, any] | PartialShallow<T> | Dictionary<T>;
export type List<T> = ArrayLike<T>;
export type ListIterator<T, TResult> = (value: T, index?: number, array?: T[]) => TResult | unknown;
export type ListIteratee<T> = ListIterator<T, NotVoid> | IterateeShorthand<T>;
export type ListIteratorTypeGuard<T, S extends T> = (value: T, index: number, collection: List<T>) => value is S;
export type StringIterator<TResult> = (char: string, index: number, string: string) => TResult;
export type RestCallback<T> = [...Many<T>[], (value: T) => any];
