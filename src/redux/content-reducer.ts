import { ProfileType, PostDataType } from './../types/types';
import { stopSubmit } from "redux-form";
import { usersAPI } from "../api/api";
import { Dispatch } from 'redux';
import { AppStateType } from './redux-store';

const ADD_POST = "samurai-network/content/ADD_POST";
const UPDATE_NEW_POST_TEXT = "samurai-network/content/UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "samurai-network/content/SET_USER_PROFILE";
const SET_STATUS = "samurai-network/content/SET_STATUS";
const SAVE_PHOTO = "samurai-network/content/SAVE_PHOTO";



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

 const contentReducer = (state = initialState, action: any): InitialStateType => {
        if (action.type === ADD_POST) {
            return {
                ...state,
                postData: [...state.postData, {message: action.values, like: 0}]
            }
        } else if (action.type == UPDATE_NEW_POST_TEXT) {
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.newPostText = action.text;
            return stateCopy;
        } else if (action.type == SET_USER_PROFILE) {
            return {...state, profile: action.profile}
        }else if (action.type == SET_STATUS) {
            return {...state, status: action.status}
        }else if (action.type == SAVE_PHOTO) {
            return {...state,
            profile: {...state.profile, photos: action.photos} as ProfileType
        }
        
        }
    return state;
};
type ActionsType = AddPostActionCreaterType | UpdatePostTextActionCreaterType | SetUserProfileType | SetUserStatusType | SavePhotoSuccsesType
type DispatchType = Dispatch<ActionsType>
type GetStateType = () => AppStateType

export const addPostActionCreater = (values: string): AddPostActionCreaterType => ({type: ADD_POST, values});
type AddPostActionCreaterType = {
    type: typeof ADD_POST
    values: string
}

export const updatePostTextActionCreater = (text: string): UpdatePostTextActionCreaterType => ({type: UPDATE_NEW_POST_TEXT, text});
type UpdatePostTextActionCreaterType = {
    type: typeof UPDATE_NEW_POST_TEXT
    text: string
}

export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile});
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

export const setUserStatus = (status: string): SetUserStatusType => ({type: SET_STATUS, status});
type SetUserStatusType = {
    type: typeof SET_STATUS
    status: string
}

export const savePhotoSuccses = (photos: string): SavePhotoSuccsesType => ({type: SAVE_PHOTO, photos});
type SavePhotoSuccsesType = {
    type: typeof SAVE_PHOTO
    photos: string
}


export const getUserProfile = (userId: number) => {
    return async (dispatch: DispatchType) => {
        let data = await usersAPI.getProfile(userId)
            dispatch(setUserProfile(data));  
    }
}

export const getStatusProfile = (userId: number) => {
    return async (dispatch: DispatchType) => {
        let data = await usersAPI.getStatus(userId)
            dispatch(setUserStatus(data));  
    }
}

export const updateStatusProfile = (status: string) => {
    return async (dispatch: DispatchType) => {
        let data = await usersAPI.updateStatus(status)
            if (data.resultCode === 0){
                dispatch(setUserStatus(status));  
            }
    }
}

export const savePhoto = (photos: any) => async (dispatch: DispatchType) => {
    let data = await usersAPI.savePhoto(photos);

    if (data.resultCode === 0){
        dispatch(savePhotoSuccses(data.data.photos));  
    }
}

export const saveProfileInfo = (profileInfo: ProfileType) => async (dispatch: DispatchType, getState: GetStateType) => {
    const userId = getState().auth.userId;
    let data = await usersAPI.setProfileInfo(profileInfo);
    if (data.resultCode === 0){
        dispatch(getUserProfile(userId));  
    }else {
        let message = data.messages.length > 0 ? data.messages[0] : "some error"
        dispatch(stopSubmit("edit-profile", {_error: message}));
        return Promise.reject(data.messages[0])
    }

}
export default contentReducer;