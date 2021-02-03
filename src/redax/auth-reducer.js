import {usersAPI} from "./../api/api";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true
};

 const authReducer = (state = initialState, action) => {

        if (action.type === 'SET-USER-DATA') {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
    return state;
};

export const setUserData = (userId, email, login) => ({type: 'SET-USER-DATA', data:{email, userId, login}});

export const getAuth = () => {
    return (dispatch) => {
        usersAPI.getLogin()
        .then(data => {
            if (data.resultCode === 0) {
                let {email, id, login} = data.data;
                dispatch(setUserData(email, id, login));
            }
        })
    }
}


export default authReducer;