import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={classes.item}>
                <img className={classes.img} src="https://sun9-76.userapi.com/impf/c630116/v630116375/35fa8/amcvlYluyh0.jpg?size=200x200&quality=96&proxy=1&sign=175e9fc3773031e2b291c40e618909af&c_uniq_tag=SAZKXJyRWvPJXt0GEE-L-eNyituxcBrRKYoch7Qb8R4&type=album" alt="ava"/>
                <span className={classes.writing}>
                    {props.message}
                </span>
                <a className={classes.like} href="#">Like {props.like}</a>
            </div>
        </div>
    )  
}


export default Post;