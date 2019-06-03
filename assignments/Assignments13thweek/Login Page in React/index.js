import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js'

class Verify extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            email : "",
            password  : "",
            verification : false
        }
        this.emailChanged=this.emailChanged.bind(this);
        this.passwordChanged=this.passwordChanged.bind(this);
        this.checkDetails=this.checkDetails.bind(this);
    }
    
    
    emailChanged(event){
        this.setState({email : event.target.value});
    }
    passwordChanged(event){
        this.setState({password : event.target.value});
    }

    checkDetails(){
        if((this.state.email==="abhishekmalviya17@gmail.com")&&(this.state.password==="abhi")){
            this.setState({verification : true})
            
        }
        else{this.setState({verification:false})}
    }

    
    render(){
        return(
            <App state={this.state}
                 emailChanged={this.emailChanged}
                 passwordChanged={this.passwordChanged}
                 checkDetails={this.checkDetails}
                  />
        )
    }
}

ReactDOM.render(<Verify />, document.getElementById('root'));

