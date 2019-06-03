import React from 'react';
import App from './app.js'

class Display extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <h2>{this.props.state.input}</h2>
                </div>
            </div>
        )
    }
}
export default Display;