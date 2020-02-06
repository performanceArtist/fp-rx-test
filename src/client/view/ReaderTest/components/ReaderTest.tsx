import React from 'react';

import { Profile } from './Profile';

type Props = {
  title: string;
  lan: 'en' | 'ru';
  username: string;
  onEnter: (title: string) => void;
};

class ReaderTest extends React.Component<Props> {
  render() {
    const { title, onEnter, lan, username } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        <h2>Language: {lan}</h2>
        <Profile username={username} />
        <button type="button" onClick={() => onEnter(Math.random().toString())}>
          Click
        </button>
      </div>
    );
  }
}

export { ReaderTest };
