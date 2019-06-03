import React from 'react';
import App from './app.js'



class Input extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <h1>React State Challenge</h1>
                    <hr/>
                    <input className="form-control" placeholder="Enter Something" onChange={this.props.updateInput}></input>
                </div>
            </div>
        )
    
    }
}

export default Input;