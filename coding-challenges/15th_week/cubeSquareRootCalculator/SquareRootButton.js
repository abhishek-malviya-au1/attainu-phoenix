import React from 'react';
import {connect} from 'react-redux';

import {storeMapper} from './store.js';

class SquareRootButtonComponent extends React.Component {
    constructor(props) {
        super(props);

        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked() {
        this.props.dispatch({
            type: "SQRT"
        });
    }

    render() {
        return <button onClick={this.buttonClicked} className="btn btn-info">Square Root</button>;
    }
}

let SquareRootButton = connect(storeMapper)(SquareRootButtonComponent);

export {SquareRootButton};