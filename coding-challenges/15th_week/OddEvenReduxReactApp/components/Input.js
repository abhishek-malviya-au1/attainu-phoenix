import React from "react";
import store from "./store";




class InputComponent extends React.Component{
    constructor(props) {
        super(props);

        this.numberChanged = this.numberChanged.bind(this);
    }

    numberChanged(event) {
        let number = parseInt(event.target.value);

        if(isNaN(number)) {
            number = 0;
        }

        this.props.dispatch({
            type: "NUMBER_CHANGED",
            number : number
        });
    }

    render() {
        return (
        
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <input className="form-control" onChange={this.numberChanged} type="text"/>
            </div>
        </div>
        )
    }

}

export default InputComponent;

