import { Button } from "antd";
import React, { useEffect, useState } from "react"



type PropsType = {
  wsChannel: WebSocket
}
export const AddMessageForm: React.FC<PropsType> = (props) => {

  const [message, setMessage] = useState<string>()

  const sendMessage = () => {
    if (!message){
      return
    }else {
      props.wsChannel.send(message)
    }
  }

  return (
    <div>
      <div style={{marginTop: "30px"}}>
          <input onChange={(e) => setMessage(e.currentTarget.value)} value={message} style={{width: "100%", height: "45px"}} type="text"/>
      </div>
      <div>
          <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  )
};

