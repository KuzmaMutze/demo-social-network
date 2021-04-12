import Message from "./Message/Message";
import classes from "./Messages.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import {Input} from "../../common/FormsControls/FormsControls"
import { required, maxLenghtCreacter } from '../../../utils/validators/validatirs';
import { MessagesDataType } from "../../../redux/dialogs-reducer";
import { Button } from "antd";

type PropsType = {
    messagesData: Array<MessagesDataType>
    addMessageActionCreater: (newMessageElement: string) => void
}

const Messages: React.FC<PropsType> = (props) => {

    let messagesElements = props.messagesData.map(message => <Message massage={message.message}/>);
    let addMessage = (values : {newMessageElement: string}) => {
        props.addMessageActionCreater(values.newMessageElement);
    };
    return (
        <div className={classes.message}>
            <div>{messagesElements}</div>
            <AddMesseageFormRedux onSubmit={addMessage}/>
        </div>
        
    )
}

// form and type
let maxLenghtCreacter20 = maxLenghtCreacter(20);

type AddMessageFormValueType = {
    newMessageElement: string
}
type AddMessageFormOwnProps = {}


const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormValueType, AddMessageFormOwnProps> & AddMessageFormOwnProps> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field className={classes.messages} component={Input} name="newMessageElement" placeholder="Enter your messeage" validate={[required, maxLenghtCreacter20]}/>
        <button>Send</button>
    </form>
}

// wrapper redux-form
const AddMesseageFormRedux = reduxForm<AddMessageFormValueType, AddMessageFormOwnProps>({
    form: "addMessageForm"
})(AddMessageForm)

export default Messages; 