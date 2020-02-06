import { ask } from 'fp-ts/lib/Reader';

import { withStreams, combineReaders } from 'client/utils';
import { ApiInstance } from 'client/deps';
import { pending } from 'client/api/request';

import { ApiTest } from './ApiTest';

const ApiTestContainer = combineReaders(ask<ApiInstance>(), ({ api }) => {
  return withStreams(ApiTest)(() => {
    return {
      defaultProps: {
        serverData: pending(),
      },
      streams: {
        serverData: api.request('test', { method: 'GET' }),
      },
    };
  });
});

export { ApiTestContainer };
