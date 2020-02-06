import React from 'react';

type Props = {
  title: string;
  onEnter: (title: string) => void;
};

class Test extends React.Component<Props> {
  render() {
    const { title, onEnter } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        <button type="button" onClick={() => onEnter(Math.random().toString())}>
          Click
        </button>
      </div>
    );
  }
}

export { Test };
