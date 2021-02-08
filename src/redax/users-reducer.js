import {usersAPI} from "./../api/api";
import {updateObjectInArray} from "./../utils/validators/ojects-helpers"

const FOLLOW = "samurai-network/users/FOLLOW";
const UNFOLLOW = "samurai-network/users/UNFOLLOW";
const SET_USER = "samurai-network/users/SET_USER";
const SET_CURRENT_PAGE = "samurai-network/users/SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "samurai-network/users/SET_USERS_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "samurai-network/users/TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRES = "samurai-network/users/FOLLOWING_IN_PROGRES";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

 const usersReducer = (state = initialState, action) => {

    
        if (action.type === FOLLOW) {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };
        } else if (action.type === UNFOLLOW) {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        } else if (action.type === SET_USER) {
            return { ...state, users: action.users}
        } else if (action.type === SET_CURRENT_PAGE) {
            return { ...state, currentPage: action.currentPage}
        }else if (action.type === SET_USERS_TOTAL_COUNT) {
            return { ...state, totalUsersCount: action.totalCount}
        }else if (action.type === TOGGLE_IS_FETCHING) {
            return { ...state, isFetching: action.isFetching}
        }else if (action.type === FOLLOWING_IN_PROGRES) {
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

// AC
export const acceptFollow = (userId) => ({type: FOLLOW, userId});
export const acceptUnFollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USER, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount});
export const setToggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setFollowingInProgress = (isFetching, userId) => ({type: FOLLOWING_IN_PROGRES, isFetching, userId});

const  followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreater) => {
        dispatch(setFollowingInProgress(true, userId));
        let data = await apiMethod(userId)
        if (data.resultCode == 0) {
            dispatch(actionCreater(userId));
        }
        dispatch(setFollowingInProgress(false, userId));
    }




//thunks 
export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setToggleIsFetching(true));
        dispatch(setCurrentPage(currentPage))
    let data = await usersAPI.getUsers(currentPage, pageSize)
                dispatch(setToggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
    }
};

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), acceptFollow);
    }
};

export const unFollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), acceptUnFollow);
    }                       
};

export default usersReducer;
