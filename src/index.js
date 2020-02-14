import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './redux-stuffs/rootReducer'


const loggerMiddleware = createLogger()


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk,loggerMiddleware)))


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>


,document.getElementById('root'));


