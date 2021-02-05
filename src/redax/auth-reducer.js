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

export const setUserData = (userId, email, login, isAuth) => ({type: 'SET-USER-DATA', data:{email, userId, login, isAuth}});

export const getAuth = () => {
    return (dispatch) => {
        usersAPI.getLogin()
        .then(data => {
            if (data.resultCode === 0) {
                let {email, id, login} = data.data;
                dispatch(setUserData(email, id, login, true));
            }
        })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        usersAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuth())
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