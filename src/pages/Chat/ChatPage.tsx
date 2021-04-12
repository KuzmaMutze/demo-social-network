import React from "react"
import { Chat } from "./Chat/Chat";

type PropsType = {}  
export const ChatPage:React.FC<PropsType> = (props) => {
  return (
    <div>
      <Chat />
    </div>
  )
};

export default ChatPage