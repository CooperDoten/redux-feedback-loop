import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//adding Redux info
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
//import Reducers
import feedBack from '../src/reducers/FeedbackReducer';
import adminTable from '../src/reducers/AdminTable';
//set our store value
const storeInstance = createStore(
    combineReducers({
        feedBack,
        adminTable
    }),
    applyMiddleware(logger)
);
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
