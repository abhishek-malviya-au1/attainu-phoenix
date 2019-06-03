import React from "react";
import {Provider , connect} from 'react-redux';
import InputComponent from './Input.js';
import store from '../store';
import DisplayComponent from './Display.js'
import ButtonComponent from './Button.js'


let storeMapper=function(state){
    return state;
}


let Input= connect(storeMapper)(InputComponent);
let Display=connect(storeMapper)(DisplayComponent);
let Buttone = connect(storeMapper)(ButtonComponent);
class App extends React.Component{
    
    
    
    
    
    render(){
        return(
            <div>
                <Provider store={store}>
                    <Input />
                    <Buttone/>
                    <Display />
                </Provider>
            </div>
        )
    }
}

export default App;