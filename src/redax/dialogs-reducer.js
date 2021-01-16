
 const dialogsReducer = (state, action) => {
    
    
        if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                message: state.newMessageText
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
        } else if (action.type == 'UPDATE-NEW-MESSAGE-TEXT') {
            state.newMessageText = action.newText;
        }    
    
    
    return state;
}


export const addMessageActionCreater = () => ({
     
    type: 'ADD-MESSAGE'
});

export const updateMessageTextActionCreater = (text) => {
return {
    type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text
};
};


export default dialogsReducer;