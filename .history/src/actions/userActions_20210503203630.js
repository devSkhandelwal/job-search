import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/userConstants"

const userLoginAction = (name,email,password) => async(dispatch) {
    try{
        dispatch({
            type:USER_LOGIN_REQUEST
        });

        userInfo = {
            id,
            name,
            email,
            password
        }

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:userInfo
        });

    }catch(err){
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:error
        })
    }

}