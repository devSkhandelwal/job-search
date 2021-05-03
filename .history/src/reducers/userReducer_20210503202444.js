import { USER_LOGIN_REQUEST } from "../constants/userConstants";

const userLoginReducer = (state={},action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {
                loadign:true
            }
    }
}