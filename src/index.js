import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//adding Redux info
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


let initialState = {
    feeling: '',
    understanding: '',
    support: '',
    comment: ''
}
let adminReview = [];

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
const adminTable = (state = adminReview, action) => {
    if(action.type === "SET_ADMIN_REVIEW"){
        console.log('this is our table data', action.payload);
        return {...state,  
               adminReview: action.payload}
    }
    return state;
}

//adding store
const storeInstance = createStore(
    combineReducers({
        feedBack,
        adminTable
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
