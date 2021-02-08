import {usersAPI} from "./../api/api";

const ADD_POST = "samurai-network/content/ADD_POST";
const UPDATE_NEW_POST_TEXT = "samurai-network/content/UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "samurai-network/content/SET_USER_PROFILE";
const SET_STATUS = "samurai-network/content/SET_STATUS";


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
                postData: [...state.postData, {message: action.values, like: 1}]
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
        }
    return state;
};

export const addPostActionCreater = (values) => ({type: ADD_POST, values});
export const updatePostTextActionCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));  
        });
        
    }
}

export const getStatusProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getStatus(userId)
        .then(data => {
            dispatch(setUserStatus(data));  
        });
        
    }
}

export const updateStatusProfile = (status) => {
    
    return (dispatch) => {
        usersAPI.updateStatus(status)
        .then(data => {
            
            if (data.resultCode === 0){
                dispatch(setUserStatus(status));  
            }
        });
        
    }
}


export default contentReducer;