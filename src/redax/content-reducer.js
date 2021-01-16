
 const contentReducer = (state, action) => {

    
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