

import {createStore} from 'redux';


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
         newState.counter=0
         return newState;
     }
}



let store=createStore(counterReducer);


store.subscribe({
    function() {
        console.log(store.getState());
    }
})

store.dispatch({
    type : "INCREMENT"
});


