import { stopSubmit } from "redux-form";
import {usersAPI} from "./../api/api";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true,
};

 const authReducer = (state = initialState, action) => {

        if (action.type === SET_USER_DATA) {
            return {
                ...state,
                ...action.data,
            }
        }
    return state;
};

export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data:{userId, email, login, isAuth}});

export const getAuth = () => async (dispatch) => {
        let data = await usersAPI.getLogin()
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setUserData(id, email, login, true));
            }
    }

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let data = await usersAPI.login(email, password, rememberMe)
            if (data.resultCode === 0) {
                dispatch(getAuth())
            } else {
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

export default authReducer;