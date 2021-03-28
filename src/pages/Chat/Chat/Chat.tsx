import React, { useEffect } from "react"
import { AddMessageForm } from "./AddMessageForm";
import { Messages } from "./Messages";

type PropsType = {
    wsChannel: WebSocket
}
export const Chat: React.FC<PropsType> = (props) => {

  return (
    <div>
      <Messages wsChannel={props.wsChannel}/>
      <AddMessageForm wsChannel={props.wsChannel}/>
    </div>
  )
};

