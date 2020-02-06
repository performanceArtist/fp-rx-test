import React from 'react';

import { Request } from 'client/api/request';
import { AsyncData } from 'client/ui/AsyncData/AsyncData';

type Props = {
  serverData: Request<{ test: string }>;
};

export const ApiTest: React.FC<Props> = props => {
  const { serverData } = props;

  const renderSuccess = (data: { test: string }) => {
    return <h2>Success: {data.test}</h2>;
  };

  return <AsyncData data={serverData} onSuccess={renderSuccess} />;
};
