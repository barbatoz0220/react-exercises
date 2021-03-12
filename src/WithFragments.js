import React, {Component, Fragment} from 'react';

class WithFragments extends Component {
    render() {
        return(
            <Fragment>
                <h1>With Fragments</h1>
                <p>The <code>h1</code> and this <code>p</code> elements
                are grouped together in a <code>Fragment</code> of React.
                This does not add an extra <code>div</code> to the DOM</p>
            </Fragment>
        )
    }
}

export default WithFragments;