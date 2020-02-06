import React from 'react';
import { Request, isPending, isFailure } from 'client/api/request';

import { Preloader } from '../Preloader/Preloader';

type Props<T> = {
  data: Request<T>;
  onSuccess: (result: T) => JSX.Element;
};

export function AsyncData<T>(props: Props<T>) {
  const { data, onSuccess } = props;

  if (isPending(data)) {
    return <Preloader />;
  }

  if (isFailure(data)) {
    return <h2>{data.error.toString()}</h2>;
  }

  return onSuccess(data.data);
}
