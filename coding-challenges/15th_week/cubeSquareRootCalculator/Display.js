import React from 'react';
import {connect} from 'react-redux';

import {storeMapper} from './store.js';

class DisplayComponent extends React.Component {
    render() {
        return <h1>Result: {this.props.result}</h1>;
    }
}

let Display = connect(storeMapper)(DisplayComponent);

export {Display};