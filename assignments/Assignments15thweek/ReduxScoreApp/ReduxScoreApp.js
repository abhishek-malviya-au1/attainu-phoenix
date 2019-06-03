import {createStore} from 'redux';


let scoreReducer=function(state,action){
    if(state==undefined){
        return {
            currentScore : 0
        }

    }
    if(action.type==="UPDATE_STORE"){
        let newState=state;
        newState.currentScore=newState.currentScore+100
        return newState;
    }
    if(action.type==="BONUS"){
        let newState=state;
        newState.currentScore=newState.currentScore+500
        return newState;
    }
    if(action.type==="LIFE_LOST"){
        let newState=state;
        newState.currentScore=newState.currentScore-250
        return newState;
    }
}




let store=createStore(scoreReducer);

store.subscribe(()=>{
    let state=store.getState();
    console.log(state.currentScore);
})

store.dispatch({
    type : "UPDATE_STORE"
})

store.dispatch({
    type : "BONUS"
})

store.dispatch({
    type : "LIFE_LOST"
})
