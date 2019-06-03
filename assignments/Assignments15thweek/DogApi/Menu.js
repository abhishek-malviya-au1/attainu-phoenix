import React from 'react';
import {connect} from 'react-redux';

import {storeMapper} from './store.js';


class MenuComponent extends React.Component {

    componentDidMount() {
        this.props.dispatch({
            type: "FETCH_MENU"
        });
    }

    render() {

        if(this.props.isMenuLoading) {
            return <p>Loading Menu...</p>
        } else {
            return (
                this.props.breeds.map(function(b) { 
                    return <button className="btn btn-secondary" key={b}>{b}</button>; 
                })
            );
        }

       
    }
}

let Menu = connect(storeMapper)(MenuComponent);

export {Menu};