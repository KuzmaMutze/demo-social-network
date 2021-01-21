import Message from "./Message/Message";
import classes from "./Messages.module.css";
import react from "react";
const Messages = (props) => {
    debugger
    let messagesElements = props.messagesData.map( message => <Message massage={message.message}/> );

    let newMessageElement = react.createRef();
    
    let addMessage = () => {
        // let message = newMessageElement.current.value;
        props.addMessage();
    };

    let onMessageChange = () => {
        let message = newMessageElement.current.value;
        props.onMessageChange(message);
    };
    
    return (
        <div className={classes.messages}>
            {messagesElements}
            <textarea onChange={onMessageChange} value={props.newMessageText} ref={newMessageElement} cols="30" rows="10"/>
            <button onClick={addMessage}>Send</button>
        </div>
        
    )
    
}

export default Messages; 