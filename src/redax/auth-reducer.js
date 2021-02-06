import { stopSubmit } from "redux-form";
import {usersAPI} from "./../api/api";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true,
};

 const authReducer = (state = initialState, action) => {

        if (action.type === 'SET-USER-DATA') {
            return {
                ...state,
                ...action.data,
                
            }
        }
    return state;
};

export const setUserData = (userId, email, login, isAuth) => ({type: 'SET-USER-DATA', data:{userId, email, login, isAuth}});

export const getAuth = () => (dispatch) => {
        return usersAPI.getLogin()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setUserData(id, email, login, true));
            }
        })
    }

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        usersAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuth())
            } else {
                debugger
                let message = data.messages.length > 0 ? data.messages[0] : "some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        usersAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
    }
}

export default authReducer;