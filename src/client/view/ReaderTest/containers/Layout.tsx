import React from 'react';

import { combineReaders } from 'client/utils';

import { ReaderTestContainer } from './ReaderTestContainer';

const Layout = combineReaders(ReaderTestContainer, ReaderTestContainer => {
  return () => (
    <div>
      <h2>Layout</h2>
      <div>
        <ReaderTestContainer />
      </div>
    </div>
  );
});

export { Layout };
