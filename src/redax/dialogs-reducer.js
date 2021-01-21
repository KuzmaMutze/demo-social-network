
let initialState = {
    messagesData: [
        {message:"helo"},
        {message:"what"},
        {message:"what's up"},
        {message:"bro"},
        {message:"yo"},
        {message:"hi"},
      ],

    dialogsData: [
        {id:1, name:"Andrey"},
        {id:2, name:"Mike"},
        {id:3, name:"Tommy"},
        {id:4, name:"Sergey"},
        {id:5, name:"Volodya"},
        {id:6, name:"Sasha"},
      ],

    newMessageText: "s"
};
 
 
 const dialogsReducer = (state = initialState, action) => {
        if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                message: state.newMessageText
            }
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        } else if (action.type == 'UPDATE-NEW-MESSAGE-TEXT') {
            let stateCopy = {...state};
            stateCopy.newMessageText = [...state.newMessageText];
            stateCopy.newMessageText = action.newText;
            return stateCopy;
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