import React from 'react';

import { Api } from './api/api';
import { createSocketClient } from './api/sockets';
import { TestContainer } from './view/Test/TestContainer';
import { Layout } from './view/ReaderTest/containers/Layout';
import { ApiTestContainer } from './view/ApiTest/ApiTestContainer';
import { SocketComponentContainer } from './view/Socket/SocketComponentContainer';

const mockConfig = { lan: 'en' as const, username: 'Test' };
const Component = Layout(mockConfig);

const serverURL = 'http://localhost:5000/';
const api = new Api(serverURL);
const ApiComponent = ApiTestContainer({ api });
const socket = createSocketClient(serverURL);
const SocketComponent = SocketComponentContainer({ socket });

function App() {
  return (
    <div>
      <TestContainer />
      <Component />
      <ApiComponent />
      <SocketComponent />
    </div>
  );
}

export { App };
