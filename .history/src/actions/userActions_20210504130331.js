import {v4 as uuidV4} from 'uuid';

import { USER_APPLY_FORM_REQUEST, USER_APPLY_FORM_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/userConstants"

export const userLoginAction = (name,email) => async(dispatch) => {
    try{
        dispatch({
            type:USER_LOGIN_REQUEST
        });

        const user= {
            id:uuidV4(),
            name,
            email
        }

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:user
        });

        localStorage.setItem('userInfo',JSON.stringify(user))

    }catch(err){
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:err
        })
    }

};

export const userApplyFormAction = (name,email,file) => async(dispatch) => {
    try{
        dispatch({
            type:USER_APPLY_FORM_REQUEST
        });

        const user= {
            id:uuidV4(),
            name,
            email,
            file
        }

        dispatch({
            type:USER_APPLY_FORM_SUCCESS,
            payload:user
        });

        localStorage.setItem('userData',JSON.stringify(user))

    }catch(err){
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:err
        })
    }

}

