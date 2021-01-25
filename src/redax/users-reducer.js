
let initialState = {
    users: [
        
    ]
};

 const usersReducer = (state = initialState, action) => {

    
        if (action.type === "FOLLOW") {
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        } else if (action.type === "UNFOLLOW") {
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        } else if (action.type === 'SET-USER') {
            return { ...state, users: [...state.users, ...action.users]}
        };
    return state;
};

export const followAC = (userId) => ({type: 'FOLLOW', userId});

export const unFollowAC = (userId) => ({type: 'UNFOLLOW', userId});

export const setUsersAC = (users) => ({type: 'SET-USER', users});

export default usersReducer;