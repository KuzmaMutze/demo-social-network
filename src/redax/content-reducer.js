import {usersAPI} from "./../api/api";

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

    
        if (action.type === 'ADD-POST') {
            return {
                ...state,
                postData: [...state.postData, {message: action.values, like: 1}]
            }
        } else if (action.type == 'UPDATE-NEW-POST-TEXT') {
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.newPostText = action.newText;
            return stateCopy;
        } else if (action.type == 'SET-USER-PROFILE') {
            return {...state, profile: action.profile}
        }else if (action.type == 'SET-STATUS') {
            return {...state, status: action.status}
        }
    

    return state;
};

export const addPostActionCreater = (values) => ({
    type: 'ADD-POST', values
});

export const updatePostTextActionCreater = (text) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text});
export const setUserProfile = (profile) => ({type: 'SET-USER-PROFILE', profile});
export const setUserStatus = (status) => ({type: 'SET-STATUS', status});

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