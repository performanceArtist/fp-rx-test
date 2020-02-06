import { withStreams, createHandler } from 'client/utils';

import { Test } from './Test';

const TestContainer = withStreams(Test)(() => {
  const [value$, handle] = createHandler<string>();

  return {
    defaultProps: {
      title: 'Initial title',
      onEnter: handle,
    },
    streams: {
      title: value$,
    },
  };
});

export { TestContainer };
