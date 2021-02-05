import Message from "./Message/Message";
import classes from "./Messages.module.css";
import {Field, reduxForm} from "redux-form"

const Messages = (props) => {

    let messagesElements = props.messagesData.map( message => <Message massage={message.message}/> );
    
    let addMessage = (values) => {
        props.addMessage(values.newMessageElement);
    };

    return (
        <div className={classes.messages}>
            {messagesElements}
            <AddMesseageFormRedux onSubmit={addMessage}/>
        </div>
        
    )
}

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={"textarea"} name="newMessageElement" placeholder="Enter your messeage"/>
        <button>Send</button>
    </form>
}

const AddMesseageFormRedux = reduxForm({
    form: "addMessageForm"
})(AddMessageForm)

export default Messages; 