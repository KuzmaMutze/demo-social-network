import React, { useEffect, useState } from "react"
import { AddMessageForm } from "./AddMessageForm";
import { Messages } from "./Messages";

type PropsType = {
    
}
export const Chat: React.FC<PropsType> = (props) => {

  const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)

  useEffect(() => {
    let ws : WebSocket;
    const closeHandler = () => {
      setTimeout(creactChannel, 3000)
    }

    function creactChannel() {
      ws?.removeEventListener('close', closeHandler)
      ws?.close()
      ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
      ws.addEventListener('close', closeHandler)
      setWsChannel(ws)
    }

    creactChannel()

    return () => {
      ws.removeEventListener('close' ,closeHandler)
      ws.close()
    }
  }, [])

  useEffect(() => {

  }, [wsChannel])

  return (
    <div>
      <Messages wsChannel={wsChannel}/>
      <AddMessageForm wsChannel={wsChannel}/>
    </div>
  )
};

