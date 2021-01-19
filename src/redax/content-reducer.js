
let initialState = {
    postData: [
        {message:"Hi, how are you?", like: 30},
        {message:"It's my first post", like: 32}
    ],
    newPostText: "sf"
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
        }
    

    return state;
};

export const addPostActionCreater = () => ({
    type: 'ADD-POST'
});

export const updatePostTextActionCreater = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', newText: text
    };
};

export default contentReducer;