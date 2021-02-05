import Message from "./Message/Message";
import classes from "./Messages.module.css";
import {Field, reduxForm} from "redux-form"
import {Textarea} from "../../common/FormsControls/FormsControls"
import { required, maxLenghtCreacter } from '../../../utils/validators/validatirs';

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

let maxLenghtCreacter20 = maxLenghtCreacter(20);

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name="newMessageElement" placeholder="Enter your messeage" validate={[required, maxLenghtCreacter20]}/>
        <button>Send</button>
    </form>
}

const AddMesseageFormRedux = reduxForm({
    form: "addMessageForm"
})(AddMessageForm)

export default Messages; 