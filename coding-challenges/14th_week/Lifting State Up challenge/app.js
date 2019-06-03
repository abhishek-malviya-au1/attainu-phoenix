import React from'react';
import Display from './displayComponent.js';
import Input from './inputComponent.js'




class App extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            input : ""
        }
        this.updateInput=this.updateInput.bind(this);
    }


    updateInput(event){
        this.setState({input : event.target.value});
    }
    render(){
        return(
            <div className="container">
                <Input state={this.state}
                        updateInput={this.updateInput}/>
                <Display state={this.state}/>
            </div>
        )
    }
}


export default App;