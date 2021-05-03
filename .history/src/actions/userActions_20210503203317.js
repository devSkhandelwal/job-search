import { USER_LOGIN_REQUEST } from "../constants/userConstants"

const userLoginAction = (name,email,password) => async(dispatch) {
    dispatch({
        type:USER_LOGIN_REQUEST
    });

    userInfo = {
        id,
        name,
        email,
        password
    }

}