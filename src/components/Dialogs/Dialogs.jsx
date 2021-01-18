import classes from './Dialogs.module.css';
import DialogsItemContainer from './DialogsItem/DialogsItemContainer';
import MessagesContainer from './Messages/MessagesContainer';

const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <DialogsItemContainer/>
            <MessagesContainer/>
        </div>
    )
} 

export default Dialogs;


