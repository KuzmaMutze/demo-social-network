import React from "react"

type PropsType = {
    message: MessageType
}
export type MessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}
export const Message: React.FC<PropsType> = ({message}) => {

    return (
    <div>
        <img src={message.photo}/> <b>{message.userName}</b> 
        <br/>
        <div>{message.message}</div>
        <hr></hr>
    </div>
  )
};

