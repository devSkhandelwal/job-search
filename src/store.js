import {combineReducers,createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { userLoginReducer } from './reducers/userReducer';


const reducers = combineReducers({
    login:userLoginReducer
});

const userFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) :null

const initialState = {
    login:{userInfo:userFromStorage}
}


const middleware = [thunk]


const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;