//set initialState to add review values to 
//creates one object to send server-side
let initialState = {
    feeling: '',
    understanding: '',
    support: '',
    comment: ''
}
//set feedback reducer to get dispatches from each prop
const feedBack = (state = initialState, action) => {
    if(action.type === "ADD_FEELING"){
        console.log('this is our feeling rating', action.payload);
        return {...state,  
               feeling: action.payload}
    }
    if(action.type === "ADD_UNDERSTANDING"){
        console.log('this is our understanding rating', action.payload);
        return {...state, 
            understanding: action.payload}
    }
    if(action.type === "ADD_SUPPORT"){
        console.log('this is our support rating', action.payload);
        return {...state, 
            support: action.payload}
    }
    if(action.type === "ADD_COMMENT"){
        console.log('these are our comments', action.payload);
        return {...state, 
            comment: action.payload}
    }
    return state;
}

export default feedBack;