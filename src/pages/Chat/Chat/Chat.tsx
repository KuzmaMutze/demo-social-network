import React, { useEffect } from "react"
import { AddMessageForm } from "./AddMessageForm";
import { Messages } from "./Messages";

type PropsType = {
    
}
export const Chat: React.FC<PropsType> = (props) => {

  return (
    <div>
        {/* @ts-ignore */}
      <Messages wsChannel={props.wsChannel}/>
      {/* @ts-ignore */}
      <AddMessageForm wsChannel={props.wsChannel}/>
    </div>
  )
};

