import { BaseThunkType, InferActionTypes } from './redux-store';
import { stopSubmit } from "redux-form";
import {ResultCodesEnum, usersAPI} from "../api/api";
import { Action, Dispatch } from 'redux';

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    isFetching: true as boolean | null,
    captchaUrl: null as string | null // if null captcha is not required
};

export type initialStateType = typeof initialState
export type ActionsType = InferActionTypes<typeof actions>
// type DispatchType = Dispatch<ActionsType>
type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>

 const authReducer = (state = initialState, action: ActionsType): initialStateType => {
        if (action.type === "SET_USER_DATA") {
            return {
                ...state,
                ...action.payload,
            }
        } else if (action.type === "SET_CAPTCHA") {
            return {
                ...state,
                captchaUrl: action.captcha
            }
        }
    return state;
};

export const actions = {
    setUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: "SET_USER_DATA", payload:{userId, email, login, isAuth}
    } as const),
    getCuptcha: (captcha: string) => ({type: "SET_CAPTCHA", captcha} as const)
}

export const getAuth = (): ThunkType => async (dispatch) => {
        let data = await usersAPI.getLogin()
            if (data.resultCode === ResultCodesEnum.Success) {
                let {id, email, login} = data.data;
                dispatch(actions.setUserData(id, email, login, true));
            }
    }

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => {
    return async (dispatch) => {
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

export const logout = (): ThunkType => {
    return async (dispatch) => {
        let data = await usersAPI.logout()
            if (data.resultCode === 0) {
                dispatch(actions.setUserData(null, null, null, false))
            }
    }
}

export const getCuptchaUrl = (): ThunkType => {
    return async (dispatch) => {
        let data = await usersAPI.getCaptcha()
        let captchaUrl = data.url;
        dispatch(actions.getCuptcha(captchaUrl))
    }
}
export default authReducer;