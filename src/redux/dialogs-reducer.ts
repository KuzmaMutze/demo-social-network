const ADD_MESSAGE = "samurai-network/dialogs/ADD_MESSAGE";

type MessagesDataType = {
    message: string
}
type DialogsDataType = {
    id: number
    name: string
}

let initialState = {
    messagesData: [
        {message:"helo"},
        {message:"what"},
        {message:"what's up"},
        {message:"bro"},
        {message:"yo"},
        {message:"hi"},
      ] as Array<MessagesDataType>,

    dialogsData: [
        {id:1, name:"Andrey"},
        {id:2, name:"Mike"},
        {id:3, name:"Tommy"},
        {id:4, name:"Sergey"},
        {id:5, name:"Volodya"},
        {id:6, name:"Sasha"},
      ] as Array<DialogsDataType>,
}
 
export type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: ActionsType): initialStateType => {
        if (action.type === ADD_MESSAGE) {
            let body = action.values;
            return {
                ...state,
                messagesData: [...state.messagesData, {message: body}]
            }
        };
    return state;
}

type ActionsType = AddMessageActionCreaterType

type AddMessageActionCreaterType = {
    type: typeof ADD_MESSAGE
    values: string
}

export const addMessageActionCreater = (values: string): AddMessageActionCreaterType => ({type: ADD_MESSAGE, values});

export default dialogsReducer;