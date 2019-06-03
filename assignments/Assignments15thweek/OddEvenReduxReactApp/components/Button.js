import React from 'react';



class ButtonCompnent extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.dispatch({
            type: "CHECK_NUMBER"
        });
    }

    render() {
        return (<div className="row">
            <div className="col-md-4 offset-md-4">
            <button class="btn btn-success" onClick={this.handleClick}>Check Number</button>
            </div>
        </div>)
    }
}


export default ButtonCompnent;
