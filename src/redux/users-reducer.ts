import { UsersType } from './../types/types';
import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/validators/ojects-helpers"

const FOLLOW = "samurai-network/users/FOLLOW";
const UNFOLLOW = "samurai-network/users/UNFOLLOW";
const SET_USER = "samurai-network/users/SET_USER";
const SET_CURRENT_PAGE = "samurai-network/users/SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "samurai-network/users/SET_USERS_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "samurai-network/users/TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRES = "samurai-network/users/FOLLOWING_IN_PROGRES";



let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number> // Array of users ids
};

export type initialStateType = typeof initialState

 const usersReducer = (state = initialState, action: any): initialStateType => {

    
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
export const acceptFollow = (userId: number): AcceptFollowType => ({type: FOLLOW, userId});
type AcceptFollowType = {
    type: typeof FOLLOW
    userId: number
}

export const acceptUnFollow = (userId: number): AcceptUnFollowType => ({type: UNFOLLOW, userId});
type AcceptUnFollowType = {
    type: typeof UNFOLLOW
    userId: number
}

export const setUsers = (users: Array<UsersType>): SetUsersType => ({type: SET_USER, users});
type SetUsersType = {
    type: typeof SET_USER
    users: Array<UsersType>
}

export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage});
type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountType => ({type: SET_USERS_TOTAL_COUNT, totalCount});
type SetTotalUsersCountType = {
    type: typeof SET_USERS_TOTAL_COUNT
    totalCount: number
}

export const setToggleIsFetching = (isFetching: boolean): SetToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching});
type SetToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export const setFollowingInProgress = (isFetching: boolean, userId: number): SetFollowingInProgressType => ({type: FOLLOWING_IN_PROGRES, isFetching, userId});
type SetFollowingInProgressType = {
    type: typeof FOLLOWING_IN_PROGRES
    isFetching: boolean
    userId: number
}


const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreater: any) => {
        dispatch(setFollowingInProgress(true, userId));
        let data = await apiMethod(userId)
        if (data.resultCode == 0) {
            dispatch(actionCreater(userId));
        }
        dispatch(setFollowingInProgress(false, userId));
    }

//thunks 
export const getUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(setToggleIsFetching(true));
        dispatch(setCurrentPage(currentPage))
    let data = await usersAPI.getUsers(currentPage, pageSize)
                dispatch(setToggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
    }
};

export const follow = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), acceptFollow);
    }
};

export const unFollow = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), acceptUnFollow);
    }                       
};

export default usersReducer;
