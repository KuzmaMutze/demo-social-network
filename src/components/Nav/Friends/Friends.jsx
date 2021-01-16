import classes from './Friends.module.css';

const Friends = (props) => {
    
    return (
        <div className={classes.wrapper}>
            <div className={classes.img}>
                <img src={props.img} alt="iimg"/>
            </div>
            <div className={classes.name}>
                {props.name}
            </div>
        </div>
    )
}

export default Friends;