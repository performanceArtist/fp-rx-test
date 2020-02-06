import { ask } from 'fp-ts/lib/Reader';

import { withStreams, createHandler, combineReaders } from 'client/utils';
import { I18n, User } from 'client/deps';

import { ReaderTest } from '../components/ReaderTest';

const ReaderTestContainer = combineReaders(
  ask<I18n>(),
  ask<User>(),
  ({ lan }, { username }) => {
    return withStreams(ReaderTest)(() => {
      const [value$, handle] = createHandler<string>();

      return {
        defaultProps: {
          title: 'Initial title',
          onEnter: handle,
          lan,
          username,
        },
        streams: {
          title: value$,
        },
      };
    });
  },
);

export { ReaderTestContainer };
