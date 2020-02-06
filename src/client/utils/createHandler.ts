import { Subject } from 'rxjs';

export const createHandler = <T>() => {
  const sub = new Subject<T>();
  const next = (value: T) => sub.next(value);

  return [sub.asObservable(), next] as const;
};
