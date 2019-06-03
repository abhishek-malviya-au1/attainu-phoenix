


function reducer(state,action){
    let newState={
        number : "",
        isOdd  : "",
        isEven : ""
    }
    
    if(!state){
        return newState;
    }
    if(action.type="UPDATE_NUMBER"){
        newState.number=state.number;
        return newState;
    }
    if(action.type == "CHECK_NUMBER") {
        newState.number = state.number;

        if(newState.number % 2 == 0) {
            newState.isEven = true;
            newState.isOdd = false;
        } else {
            newState.isEven = false;
            newState.isOdd = true;
        }

    }
}


export default reducer;