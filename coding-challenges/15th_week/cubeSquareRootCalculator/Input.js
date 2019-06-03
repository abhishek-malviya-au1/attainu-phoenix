import React from 'react';
import {connect} from 'react-redux';

import {storeMapper} from './store.js';

class InputComponent extends React.Component {
    constructor(props) {
        super(props);

        this.numberChanged = this.numberChanged.bind(this);
    }

    numberChanged(event) {
        this.props.dispatch({
            type: "UPDATE_NUMBER",
            number: parseInt(event.target.value)
        });
    }

    render() {
        return (
            <label htmlFor="">
                <input onChange={this.numberChanged} type="text" className="form-control"/>
            </label>  
        );
    }
}

let Input = connect(storeMapper)(InputComponent);

export {Input};