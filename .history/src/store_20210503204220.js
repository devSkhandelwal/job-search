import {combineReducers,createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { userLoginReducer } from './reducers/userReducer';


const reducers = combineReducers({
    login:userLoginReducer
});

