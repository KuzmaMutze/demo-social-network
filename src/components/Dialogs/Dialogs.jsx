import DialogsItem from './DialogsItem/DialogsItem';
import Messages from './Messages/Messages';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <DialogsItem dialogsData={props.dialogsPage.dialogsData}/>
            <Messages dispatch={props.dispatch} newMessageText={props.dialogsPage.newMessageText} messagesData={props.dialogsPage.messagesData}/>
        </div>
    )
} 

export default Dialogs;


