import { ProfileType, PostDataType } from './../types/types';
import { stopSubmit } from "redux-form";
import { usersAPI } from "../api/api";
import { Dispatch } from 'redux';
import { AppStateType, BaseThunkType, InferActionTypes } from './redux-store';

let initialState = {
    postData: [
        {message:"Hi, how are you?", like: 30},
        {message:"It's my first post", like: 32}
    ] as Array<PostDataType>,
    newPostText: "sf",
    profile: null as ProfileType | null,
    status: ""
};

export type InitialStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>
// type DispatchType = Dispatch<ActionsType>
// type GetStateType = () => AppStateType
type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>

 const contentReducer = (state = initialState, action: ActionsType): InitialStateType => {
        if (action.type === "ADD_POST") {
            return {
                ...state,
                postData: [...state.postData, {message: action.values, like: 0}]
            }
        } else if (action.type == "UPDATE_NEW_POST_TEXT") {
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.newPostText = action.text;
            return stateCopy;
        } else if (action.type == "SET_USER_PROFILE") {
            return {...state, profile: action.profile}
        }else if (action.type == "SET_STATUS") {
            return {...state, status: action.status}
        }else if (action.type == "SAVE_PHOTO") {
            return {...state,  profile: {...state.profile, photos: action.photos} as ProfileType}
        }
    return state;
};

export const actions = {
    addPostActionCreater: (values: string) => ({type: "ADD_POST", values} as const),
    updatePostTextActionCreater: (text: string) => ({type: "UPDATE_NEW_POST_TEXT", text} as const),
    setUserProfile: (profile: ProfileType) => ({type: "SET_USER_PROFILE", profile} as const),
    setUserStatus: (status: string) => ({type: "SET_STATUS", status} as const),
    savePhotoSuccses: (photos: string) => ({type: "SAVE_PHOTO", photos} as const)
}


export const getUserProfile = (userId: number): ThunkType => {
    return async (dispatch) => {
        let data = await usersAPI.getProfile(userId)
            dispatch(actions.setUserProfile(data));  
    }
}

export const getStatusProfile = (userId: number): ThunkType => {
    return async (dispatch) => {
        let data = await usersAPI.getStatus(userId)
            dispatch(actions.setUserStatus(data));  
    }
}

export const updateStatusProfile = (status: string): ThunkType => {
    return async (dispatch) => {
        let data = await usersAPI.updateStatus(status)
            if (data.resultCode === 0){
                dispatch(actions.setUserStatus(status));
            }
    }
}

export const savePhoto = (photos: File): ThunkType => async (dispatch) => {
    let data = await usersAPI.savePhoto(photos);

    if (data.resultCode === 0){
        dispatch(actions.savePhotoSuccses(data.data.photos));  
    }
}

export const saveProfileInfo = (profileInfo: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let data = await usersAPI.setProfileInfo(profileInfo);
    if (data.resultCode === 0){
        if(userId != null) {
            dispatch(getUserProfile(userId));
        } else {
            throw new Error("userId can't be null")
        }
    }else {
        let message = data.messages.length > 0 ? data.messages[0] : "some error"
        dispatch(stopSubmit("edit-profile", {_error: message}));
        return Promise.reject(data.messages[0])
    }

}
export default contentReducer;