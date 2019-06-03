import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider , connect} from 'react-redux';





let counterReducer=function(state,action){
    let newState={
        counter : 0
    }
    
    if(state===undefined){
        return newState;
    }
    if(action.type==="INCREMENT"){
        newState.counter=state.counter+1;
        return newState;
    }
    if(action.type==="DECREMENT"){
        newState.counter=state.counter-1;
        return newState;
    }
    if(action.type==="RESET"){
        newState.counter=0;
        return newState;
    }
}





let store=createStore(counterReducer);

function storeMapper(state){
        return state;
}



class DisplayComponent extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <h2>Counter : {this.props.counter}</h2>
                </div>
            </div>
        )
    }
}
let Display=connect(storeMapper)(DisplayComponent);


class IncrementComponent extends React.Component{
   constructor(props){
       super(props)
    this.incrementCounter=this.incrementCounter.bind(this)
   }
   incrementCounter=()=>{
        this.props.dispatch({type : "INCREMENT"})
   }
   
   
   
    render(){
        return(
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <button onClick={this.incrementCounter} className="btn btn-success">Increment</button>
                    
                </div>
            </div>
        )
    }
}
let Increment=connect(storeMapper)(IncrementComponent);

class DecrementComponent extends React.Component{
    constructor(props){
        super(props)
            this.decrementCounter=this.decrementCounter.bind(this);
        
    }
    decrementCounter=()=>{
        this.props.dispatch({
            type : "DECREMENT"
        })
    }
    
    
    
    
    render(){
        return(
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <button onClick={this.decrementCounter} className="btn btn-danger">Decrement</button>
                    
                </div>
            </div>
        )
    }
}
let Decrement=connect(storeMapper)(DecrementComponent);


class ResetComponent extends React.Component{
    constructor(props){
        super(props);
        this.resetCounter=this.resetCounter.bind(this);
    }
    resetCounter=()=>{
        this.props.dispatch({type : "RESET"})
    }
    
    
    render(){
        return(
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <button onClick={this.resetCounter}className="btn btn-primary">Reset</button>
                    
                </div>
            </div>
        )
    }
}
let Reset=connect(storeMapper)(ResetComponent);













class App extends React.Component{
    render(){
       return(<div className="container">
            <Provider store={store}>
                <Display />
                <Increment />
                <Decrement />
                <Reset />
            </Provider>
       </div>);
      
    }
}


ReactDOM.render(<App/>,document.getElementById('root'));