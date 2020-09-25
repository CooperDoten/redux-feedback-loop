import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//adding Redux info
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';


const addFeeling = (state = [], action) => {
    if(action.type === "ADD_FEELING"){
        return[...state, action.payload]
    }
    return state;
}

//adding store
const storeInstance = createStore(
    combineReducers({
        addFeeling
    }),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
