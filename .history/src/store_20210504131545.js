import {combineReducers,createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { userApplyFormReducer, userLoginReducer } from './reducers/userReducer';
import { jobDetailsReducer, jobListReducer } from './reducers/jobReducers';


const reducers = combineReducers({
    login:userLoginReducer,
    jobList:jobListReducer,
    jobDetails:jobDetailsReducer,
    data:userApplyFormReducer
});

const userFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) :null;
const userDataFromStarage = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) :'';

const initialState = {
    login:{userInfo:userFromStorage},
    data:{userData:userDataFromStarage}
}


const middleware = [thunk]


const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;