import React from 'react';


class DisplayComponent extends React.Component{
   
   
   
   
    render(){
        if(this.props.number == 0) {
            return (
                <div class="row">
                    <div class="col-md-4 offset-md-4">
                    <h2>  Please enter a number to check odd/even status</h2>
                    </div>
                </div>
               )
        }

        if(this.props.isEven) {
            return (
                <div class="row">
                    <div class="col-md-4 offset-md-4">
                    <h2>{this.props.number} is Even!</h2>
                    </div>
                </div>
               )
        } else {
            return (
                <div class="row">
                    <div class="col-md-4 offset-md-4">
                    <h2>{this.props.number} is Odd!</h2>
                    </div>
                </div>
               )
        }
    }
}

export default DisplayComponent;