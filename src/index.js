import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//adding Redux info
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const addFeeling = (state = [], action) => {
    if(action.type === "ADD_FEELING"){
        console.log('this is our feeling rating', action.payload);
        return[...state, action.payload]
    }
    return state;
}
const addUnderstanding = (state = [], action) => {
    if(action.type === "ADD_UNDERSTANDING"){
        console.log('this is our understanding rating', action.payload);
        return [...state, action.payload]
    }
    return state;
}
const addSupport = (state = [], action) => {
    if(action.type === "ADD_SUPPORT"){
        console.log('this is our support rating', action.payload);
        return [...state, action.payload]
    }
    return state;
}
const addComment = (state = [], action) => {
    if(action.type === "ADD_COMMENT"){
        console.log('these are our comments', action.payload);
        return [...state, action.payload]
    }
    return state;
}


//adding store
const storeInstance = createStore(
    combineReducers({
        addFeeling,
        addUnderstanding,
        addSupport,
        addComment
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
