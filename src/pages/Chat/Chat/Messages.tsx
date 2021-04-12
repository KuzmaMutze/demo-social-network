import React, { useEffect, useState } from "react"
import { Message, MessageType } from "./Message";



type PropsType = {
  wsChannel: WebSocket | null
}
export const Messages: React.FC<PropsType> = (props) => {

    const [messages, setMessages] = useState<MessageType[]>([])

    useEffect(() => {

      let messageHandler = (e: MessageEvent) => {
        let newMessages = JSON.parse(e.data)
        setMessages((prevMessages) => [...prevMessages, ...newMessages])
      }

        props.wsChannel?.addEventListener('message', messageHandler)

        return () => {
          props.wsChannel?.removeEventListener('message', messageHandler)
        }
    }, [props.wsChannel])

  return (
    <div style={{height: "500px", overflowY: "auto"}}>
      {messages.map((m, index) => <Message key={index} message={m}/>)}
    </div>
  )
};

