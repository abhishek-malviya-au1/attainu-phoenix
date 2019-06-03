import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js'

class Verify extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            number : 0,
            isOdd  : null
        }
        this.numberChanged=this.numberChanged.bind(this);
        this.checkNumber=this.checkNumber.bind(this);
    }
    
    
    numberChanged(event){
        this.setState({number : event.target.value});
    }

    checkNumber(){
        if(parseInt(this.state.number)%2 ===0){
            this.setState({isOdd : true});
        }
        else if(parseInt(this.state.number)%2 !==0){
            this.setState({isOdd: false});
        }else{
            this.setState({isOdd : null});
        }
    }
    render(){
        return(
            <App state={this.state}
                 numberChanged={this.numberChanged}
                 checkNumber={this.checkNumber}
                  />
        )
    }
}

ReactDOM.render(<Verify />, document.getElementById('root'));

