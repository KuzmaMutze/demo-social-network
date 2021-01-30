
let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
        }else if (action.type === 'TOGGLE-IS-FETCHING') {
            return { ...state, isFetching: action.isFetching}
        };
    return state;
};

export const follow = (userId) => ({type: 'FOLLOW', userId});

export const unFollow = (userId) => ({type: 'UNFOLLOW', userId});

export const setUsers = (users) => ({type: 'SET-USER', users});

export const setCurrentPage = (currentPage) => ({type: 'SET-CURRENT-PAGE', currentPage});

export const setTotalUsersCount = (totalCount) => ({type: 'SET-USERS-TOTAL-COUNT', totalCount});

export const setToggleIsFetching = (isFetching) => ({type: 'TOGGLE-IS-FETCHING', isFetching});

export default usersReducer;