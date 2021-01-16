
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
            state.postData.push(newPost);
            state.newPostText = '';
            
        } else if (action.type == 'UPDATE-NEW-POST-TEXT') {
            state.newPostText = action.newText;
            
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