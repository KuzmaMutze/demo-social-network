import classes from './Message.module.css';

type PropsType = {
    massage: string
}

const Message: React.FC<PropsType> = (props) => {
    return (
        <div className={classes.messages}>
            <div className={classes.massage}>{props.massage}</div>
        </div>
    )
}

export default Message;