import {usersAPI} from "./../api/api";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
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
        }else if (action.type === 'FOLLOWING-IN-PROGRES') {
            return {
                ...state,
                followingInProgress: 
                action.isFetching 
                ? [...state.followingInProgress, action.userId] 
                : state.followingInProgress.filter(id => id != action.userId)
            }
        };
    return state;
};

export const acceptFollow = (userId) => ({type: 'FOLLOW', userId});

export const acceptUnFollow = (userId) => ({type: 'UNFOLLOW', userId});

export const setUsers = (users) => ({type: 'SET-USER', users});

export const setCurrentPage = (currentPage) => ({type: 'SET-CURRENT-PAGE', currentPage});

export const setTotalUsersCount = (totalCount) => ({type: 'SET-USERS-TOTAL-COUNT', totalCount});

export const setToggleIsFetching = (isFetching) => ({type: 'TOGGLE-IS-FETCHING', isFetching});

export const setFollowingInProgress = (isFetching, userId) => ({type: 'FOLLOWING-IN-PROGRES', isFetching, userId});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setToggleIsFetching(true));
        dispatch(setCurrentPage(currentPage))
    usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setToggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingInProgress(true, userId));
        usersAPI.follow(userId)
        .then(data => {
            if (data.resultCode == 0) {
                dispatch(acceptFollow(userId));
            }
            dispatch(setFollowingInProgress(false, userId));
         });
    }
};

export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingInProgress(true, userId));

        usersAPI.unFollow(userId)
        .then(data => {
            
            if (data.resultCode == 0) {
                dispatch(acceptUnFollow(userId));
            }
            dispatch(setFollowingInProgress(false, userId));
        });

    }                       
};

export default usersReducer;
