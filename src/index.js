import React from 'react';
import { render } from 'react-dom';
import MyComponent from './MergeComponent';

const myComponent = render(<MyComponent />, document.getElementById('root'));
setTimeout(() => {
    myComponent.setState({ first: 'done 1st!' });
}, 1000);

setTimeout(() => {
    myComponent.setState({ second: 'done 2nd!' });
}, 2000);

setTimeout(() => {
    myComponent.setState({ third: 'done 3rd!' });
}, 3000);

setTimeout(() => {
    myComponent.setState(state => ({
        ...state,
        fourth: state.done
    }));
}, 4000);