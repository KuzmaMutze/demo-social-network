import React from "react"
import { Chat } from "./Chat/Chat";

const wsChannel = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")

type PropsType = {}  
export const ChatPage:React.FC<PropsType> = (props) => {
  return (
    <div>
      {/* @ts-ignore */}
        <Chat wsChannel={wsChannel}/>
    </div>
  )
};

export default ChatPage