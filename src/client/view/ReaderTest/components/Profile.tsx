import React from 'react';

type Props = {
  username: string;
};

class Profile extends React.Component<Props> {
  render() {
    const { username } = this.props;

    return <h2>Username: {username}</h2>;
  }
}

export { Profile };
