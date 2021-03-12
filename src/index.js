import React from 'react';
import { render } from 'react-dom';
import MyComponent from './MyComponent';

const myComponent = render(<MyComponent />, document.getElementById('root'));
setTimeout(() => {
    myComponent.setState({
        heading: 'React Awesomeness (available)',
        content: 'Done!'
    });
}, 3000);