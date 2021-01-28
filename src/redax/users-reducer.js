
let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
            return { ...state, users: action.users}
        } else if (action.type === 'SET-CURRENT-PAGE') {
            return { ...state, currentPage: action.currentPage}
        }else if (action.type === 'SET-USERS-TOTAL-COUNT') {
            return { ...state, totalUsersCount: action.totalCount}
        };
    return state;
};

export const followAC = (userId) => ({type: 'FOLLOW', userId});

export const unFollowAC = (userId) => ({type: 'UNFOLLOW', userId});

export const setUsersAC = (users) => ({type: 'SET-USER', users});

export const setCurrentPageAC = (currentPage) => ({type: 'SET-CURRENT-PAGE', currentPage});

export const setTotalUsersCountAC = (totalCount) => ({type: 'SET-USERS-TOTAL-COUNT', totalCount});

export default usersReducer;