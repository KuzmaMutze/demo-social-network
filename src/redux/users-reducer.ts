import { UsersType } from './../types/types';
import {ResponseType, usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/validators/ojects-helpers"
import { Dispatch } from 'redux';
import { BaseThunkType, InferActionTypes } from './redux-store'

let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>, // Array of users ids
    filter: {
        term: "",
        friend: null as null | boolean
    }
};

export type initialStateType = typeof initialState
export type FilterType = typeof initialState.filter
type ActionsType = InferActionTypes<typeof actions>
type DispatchType = Dispatch<ActionsType>
type ThunkType = BaseThunkType<ActionsType>


 const usersReducer = (state = initialState, action: ActionsType): initialStateType => {
        if (action.type === "FOLLOW") {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };
        } else if (action.type === "UNFOLLOW") {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        } else if (action.type === "SET_USER") {
            return { ...state, users: action.users}
        } else if (action.type === "SET_CURRENT_PAGE") {
            return { ...state, currentPage: action.currentPage}
        }else if (action.type === "SET_USERS_TOTAL_COUNT") {
            return { ...state, totalUsersCount: action.totalCount}
        }else if (action.type === "TOGGLE_IS_FETCHING") {
            return { ...state, isFetching: action.isFetching}
        }else if (action.type === "FOLLOWING_IN_PROGRES") {
            return {
                ...state,
                followingInProgress: 
                action.isFetching 
                ? [...state.followingInProgress, action.userId] 
                : state.followingInProgress.filter(id => id != action.userId)
            }
        }else if (action.type === "SET-FILTER") {
            return {
                ...state,
                filter: action.payload
            }
        };
    return state;
};



// AC
export const actions = {
    acceptFollow: (userId: number) => ({type: "FOLLOW", userId} as const),
    acceptUnFollow: (userId: number) => ({type: "UNFOLLOW", userId} as const),
    setUsers: (users: Array<UsersType>) => ({type: "SET_USER", users} as const),
    setCurrentPage: (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const),
    setTotalUsersCount: (totalCount: number) => ({type: "SET_USERS_TOTAL_COUNT", totalCount} as const),
    setToggleIsFetching: (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching} as const),
    setFollowingInProgress: (isFetching: boolean, userId: number) => ({type: "FOLLOWING_IN_PROGRES", isFetching, userId} as const),
    setFilter: (filter: FilterType) => ({type: "SET-FILTER", payload: filter} as const)
}

// inner
const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: (userId: number) => Promise<ResponseType>, actionCreater: (userId: number) => ActionsType) => {
        dispatch(actions.setFollowingInProgress(true, userId));
        let data = await apiMethod(userId)
        if (data.resultCode == 0) {
            dispatch(actionCreater(userId));
        }
        dispatch(actions.setFollowingInProgress(false, userId));
    }

// thunks 
export const getUsers = (currentPage: number, pageSize: number, filter: FilterType): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.setToggleIsFetching(true));
        dispatch(actions.setCurrentPage(currentPage))
        dispatch(actions.setFilter(filter))
    let data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend)
        dispatch(actions.setToggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
    }
};

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.acceptFollow);
    }
};

export const unFollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), actions.acceptUnFollow);
    }                       
};

export default usersReducer;
