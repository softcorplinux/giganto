import Giganto from '../oop/Giganto';

export type NextPredicateProps<T> = {
  initialValue: T;
  modifiedValue: any;
  allModifiedValues: any[];
};

export type EjectResponse<T> = {
  next: (predicate?: (props: NextPredicateProps<T>) => T) => Giganto<T>;
  value: () => any[];
};
