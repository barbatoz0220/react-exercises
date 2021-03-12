import React, { Component } from 'react';

export default class MergeComponent extends Component {
  state = {
    first: 'loading...',
    second: 'loading again...',
    third: 'loading again and again...',
    fourth: 'loading forever...',
    done: 'finished!'
  };

  render() {
    const { state } = this;

    return (
      <ul>
        { Object.keys(state)
          .filter(key => key !== 'done')
          .map(key => (
            <li key={key}>
              <strong>{key} : </strong>
              {state[key]}
            </li>
          ))}
      </ul>
    );
  }
}