import {usersAPI} from "./../api/api";

let initialState = {
    postData: [
        {message:"Hi, how are you?", like: 30},
        {message:"It's my first post", like: 32}
    ],
    newPostText: "sf",
    profile: null
};

 const contentReducer = (state = initialState, action) => {

    
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            };
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        } else if (action.type == 'UPDATE-NEW-POST-TEXT') {
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.newPostText = action.newText;
            return stateCopy;
        } else if (action.type == 'SET-USER-PROFILE') {
            return {...state, profile: action.profile}
        }
    

    return state;
};

export const addPostActionCreater = () => ({
    type: 'ADD-POST'
});

export const updatePostTextActionCreater = (text) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text});
export const setUserProfile = (profile) => ({type: 'SET-USER-PROFILE', profile});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));  
        });
        
    }
}

export default contentReducer;