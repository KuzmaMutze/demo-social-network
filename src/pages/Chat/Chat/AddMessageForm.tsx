import { Button, Input } from "antd";
import React, { useEffect, useState } from "react"



type PropsType = {
	wsChannel: WebSocket | null
}
export const AddMessageForm: React.FC<PropsType> = (props) => {

	const [message, setMessage] = useState<string>()
	const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

	useEffect(() => {
		const openHandler = () => {
			setReadyStatus("ready")
		} 
		props.wsChannel?.addEventListener('open', openHandler)
		return () => {
			props.wsChannel?.removeEventListener('open', openHandler)
		}
	}, [props.wsChannel])

	const sendMessage = () => {
		if (!message){
			return
		}else {
			props.wsChannel?.send(message)
			setMessage("")
		}
	}

	return (
		<div>
			<div style={{marginTop: "20px", marginBottom: "30px"}}>
				<Input placeholder="Message" onChange={(e) => setMessage(e.currentTarget.value)} value={message} style={{width: "100%", height: "45px"}} type="text"/>
			</div>
			<div>
				<Button disabled={props.wsChannel === null || readyStatus !== "ready"} onClick={sendMessage}>Send</Button>
			</div>
		</div>
	)
};

