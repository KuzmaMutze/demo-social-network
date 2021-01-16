import classes from './Message.module.css';

const Message = (props) => {
    return (
        <div className={classes.messages}>
            <div className={classes.massage}>{props.massage}</div>
        </div>
    )
}

export default Message;