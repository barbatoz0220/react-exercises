import React, { Component, Fragment } from 'react';

class WithoutFragments extends Component {
    render() {
        return (
            <div>
                <h1>Without Fragments</h1>
                <p>
                Adds an extra <code>div element</code>
                to the DOM.
                </p>
            </div>
        );
    }
}

export default WithoutFragments;
