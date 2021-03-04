import { stopSubmit } from "redux-form";
import {ResultCodesEnum, usersAPI} from "../api/api";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const SET_CAPTCHA = "samurai-network/auth/SET_CAPTCHA";


let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    isFetching: true as boolean | null,
    captchaUrl: null as string | null // if null captcha is not required
};

export type initialStateType = typeof initialState

 const authReducer = (state = initialState, action: any): initialStateType => {

        if (action.type === SET_USER_DATA) {
            return {
                ...state,
                ...action.payload,
            }
        } else if (action.type === SET_CAPTCHA) {
            return {
                ...state,
                captchaUrl: action.captcha
            }
        }
    return state;
};

export type SetUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type SetUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetUserDataActionPayloadType
}
export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataActionType => ({
    type: SET_USER_DATA, payload:{userId, email, login, isAuth}
});


export type GetCaptchaActionType = {
    type: typeof SET_CAPTCHA
    captcha: string
}
export const getCuptcha = (captcha: string): GetCaptchaActionType => ({type: SET_CAPTCHA, captcha});

export const getAuth = () => async (dispatch: any) => {
        let data = await usersAPI.getLogin()
            if (data.resultCode === ResultCodesEnum.Success) {
                let {id, email, login} = data.data;
                dispatch(setUserData(id, email, login, true));
            }
    }

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => {
    return async (dispatch: any) => {
        let data = await usersAPI.login(email, password, rememberMe, captcha)
            if (data.resultCode === ResultCodesEnum.Success) {
                dispatch(getAuth())
            } else if (data.resultCode === ResultCodesEnum.CaptchaIsRequeired){
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
    return async (dispatch: any) => {
        let data = await usersAPI.logout()
            if (data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
    }
}

export const getCuptchaUrl = () => {
    return async (dispatch: any) => {
        let data = await usersAPI.getCaptcha()
        let captchaUrl = data.url;
        dispatch(getCuptcha(captchaUrl))
    }
}
export default authReducer;