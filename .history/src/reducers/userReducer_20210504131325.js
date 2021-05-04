import { USER_APPLY_FORM_FAIL, USER_APPLY_FORM_REQUEST, USER_APPLY_FORM_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/userConstants";

export const userLoginReducer = (state={},action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {
                loading:true
            }
        case USER_LOGIN_SUCCESS:
            return{
                loading:false,
                userInfo:action.payload
            }
        case USER_LOGIN_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}


export const userApplyFormReducer = (state={userData:{}},action) => {
    switch(action.type){
        case USER_APPLY_FORM_REQUEST:
            return {
                loading:true,
                userData:{}
            }
        case USER_APPLY_FORM_SUCCESS:
            return{
                loading:false,
                userData:action.payload
            }
        case USER_APPLY_FORM_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}