import { stopSubmit } from "redux-form";
import {usersAPI} from "./../api/api";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const SET_CAPTCHA = "samurai-network/auth/SET_CAPTCHA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true,
    captchaUrl: null
};

 const authReducer = (state = initialState, action) => {

        if (action.type === SET_USER_DATA) {
            return {
                ...state,
                ...action.data,
            }
        } else if (action.type === SET_CAPTCHA) {
            return {
                ...state,
                captchaUrl: action.captcha
            }
        }
    return state;
};

export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data:{userId, email, login, isAuth}});
export const getCuptcha = (captcha) => ({type: SET_CAPTCHA, captcha});

export const getAuth = () => async (dispatch) => {
        let data = await usersAPI.getLogin()
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setUserData(id, email, login, true));
            }
    }

export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let data = await usersAPI.login(email, password, rememberMe, captcha)
            if (data.resultCode === 0) {
                dispatch(getAuth())
            } else if (data.resultCode === 10){
                dispatch(getCuptchaUrl())
                let message = data.messages.length > 0 ? data.messages[0] : "some error"
                dispatch(stopSubmit("login", {_error: message}))                             //fix
            } else{
                let message = data.messages.length > 0 ? data.messages[0] : "some error"
                dispatch(stopSubmit("login", {_error: message}))
            }

    }
}

export const logout = () => {
    return async (dispatch) => {
        let data = await usersAPI.logout()
            if (data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
    }
}

export const getCuptchaUrl = () => {
    return async (dispatch) => {
        let data = await usersAPI.getCaptcha()
        let captchaUrl = data.url;
        dispatch(getCuptcha(captchaUrl))
    }
}
export default authReducer;