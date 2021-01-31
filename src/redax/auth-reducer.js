let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true
};
debugger
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


export default authReducer;