const ADD_MESSAGE = "samurai-network/dialogs/ADD_MESSAGE";

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

    
};
 
const dialogsReducer = (state = initialState, action) => {
        if (action.type === ADD_MESSAGE) {
            let body = action.values;
            return {
                ...state,
                messagesData: [...state.messagesData, {message: body}]
            }
        };
    return state;
}

export const addMessageActionCreater = (values) => ({type: ADD_MESSAGE, values});

export default dialogsReducer;