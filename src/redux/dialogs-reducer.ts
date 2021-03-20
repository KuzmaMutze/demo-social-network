import { InferActionTypes } from "./redux-store";

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
type ActionsType = InferActionTypes<typeof actions>

const dialogsReducer = (state = initialState, action: ActionsType): initialStateType => {
        if (action.type === "ADD_MESSAGE") {
            let body = action.values;
            return {
                ...state,
                messagesData: [...state.messagesData, {message: body}]
            }
        };
    return state;
}

export const actions = {
    addMessageActionCreater: (values: string) => ({type: "ADD_MESSAGE", values} as const)
}

export default dialogsReducer;