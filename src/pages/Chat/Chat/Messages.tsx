import React, { useEffect, useState } from "react"
import { Message, MessageType } from "./Message";



type PropsType = {
    wsChannel: WebSocket
}
export const Messages: React.FC<PropsType> = (props) => {

    const [messages, setMessages] = useState<MessageType[]>([])

    useEffect(() => {
        props.wsChannel.addEventListener('message', (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [])

  return (
    <div style={{height: "500px", overflowY: "auto"}}>
      {messages.map((m: any, index) => <Message key={index} message={m}/>)}
    </div>
  )
};

