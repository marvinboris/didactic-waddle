import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/auth';
import contentReducer from './reducers/content';
import backendReducer from './reducers/backend';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    content: contentReducer,
    backend: backendReducer,
});

export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));