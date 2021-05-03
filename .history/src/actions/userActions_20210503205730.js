import {v4 as uuidV4} from 'uuid';

import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/userConstants"

export const userLoginAction = (name,email) => async(dispatch) => {
    try{
        dispatch({
            type:USER_LOGIN_REQUEST
        });

        const user= {
            id:uuidV4(),
            name,
            email,
            password
        }

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:user
        });

        localStorage.setItem('userInfo',JSON.stringify(user))

    }catch(err){
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:error
        })
    }

}