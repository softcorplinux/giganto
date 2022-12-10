import { chunk as chunkFunc } from '../func/array';
import { EjectResponse, NextPredicateProps } from '../types/giganto';

export default class Giganto<T> {
  private _initialValue: T;
  private _modifiedValue: Map<number, any> = new Map();
  private _nextIndex: number = 0;

  constructor(value: T) {
    this._initialValue = value;
    this._modifiedValue.set(this._nextIndex, value);
  }

  public chunk(num: number = 1) {
    this._modifiedValue.set(this._nextIndex, chunkFunc(this._modifiedValue.get(this._nextIndex) as T[], num));
    return this;
  }

  public value() {
    return [...this._modifiedValue].map(([_, v]) => v);
  }

  public eject(): EjectResponse<T> {
    return { next: this.next.bind(this), value: this.value.bind(this) };
  }

  public chain<U extends any>(newValue: U, predicate?: (newValue: U, props: NextPredicateProps<any>) => U) {
    return new Giganto<U>(predicate ? predicate(newValue, this.getNextPredicateProps()) : newValue);
  }

  // private
  private next(predicate?: (props: NextPredicateProps<T>) => T) {
    const nextValue = predicate ? predicate(this.getNextPredicateProps()) : this._initialValue;
    this._nextIndex += 1;
    this._modifiedValue.set(this._nextIndex, nextValue);
    return this;
  }

  private getNextPredicateProps() {
    return {
      initialValue: this._initialValue,
      modifiedValue: this._modifiedValue.get(this._nextIndex),
      allModifiedValues: [...this._modifiedValue].filter((_, i) => i <= this._nextIndex).map(([_, v]) => v),
    };
  }
}
