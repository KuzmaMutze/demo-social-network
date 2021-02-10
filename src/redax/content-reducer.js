import { stopSubmit } from "redux-form";
import {usersAPI} from "./../api/api";

const ADD_POST = "samurai-network/content/ADD_POST";
const UPDATE_NEW_POST_TEXT = "samurai-network/content/UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "samurai-network/content/SET_USER_PROFILE";
const SET_STATUS = "samurai-network/content/SET_STATUS";
const SAVE_PHOTO = "samurai-network/content/SAVE_PHOTO";


let initialState = {
    postData: [
        {message:"Hi, how are you?", like: 30},
        {message:"It's my first post", like: 32}
    ],
    newPostText: "sf",
    profile: null,
    status: ""
};

 const contentReducer = (state = initialState, action) => {
        if (action.type === ADD_POST) {
            return {
                ...state,
                postData: [...state.postData, {message: action.values, like: 0}]
            }
        } else if (action.type == UPDATE_NEW_POST_TEXT) {
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.newPostText = action.newText;
            return stateCopy;
        } else if (action.type == SET_USER_PROFILE) {
            return {...state, profile: action.profile}
        }else if (action.type == SET_STATUS) {
            return {...state, status: action.status}
        }else if (action.type == SAVE_PHOTO) {
            debugger
            return {...state,
            profile: {...state.profile,
                photos: action.photos}
        }
        
        }
    return state;
};

export const addPostActionCreater = (values) => ({type: ADD_POST, values});
export const updatePostTextActionCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccses = (photos) => ({type: SAVE_PHOTO, photos});

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let data = await usersAPI.getProfile(userId)
            dispatch(setUserProfile(data));  
    }
}

export const getStatusProfile = (userId) => {
    return async (dispatch) => {
        let data = await usersAPI.getStatus(userId)
            dispatch(setUserStatus(data));  
    }
}

export const updateStatusProfile = (status) => {
    return async (dispatch) => {
        let data = await usersAPI.updateStatus(status)
            if (data.resultCode === 0){
                dispatch(setUserStatus(status));  
            }
    }
}

export const savePhoto = (photos) => async (dispatch) => {
    let data = await usersAPI.savePhoto(photos);

    if (data.resultCode === 0){
        dispatch(savePhotoSuccses(data.data.photos));  
    }
}

export const saveProfileInfo = (profileInfo) => async (dispatch, getState) => {
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