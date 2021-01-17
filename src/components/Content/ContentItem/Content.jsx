import classes from './Content.module.css';
import MyPostsContainer from '../MyPosts/MyPostsContainer';

const Content = (props) => {
    return (
        <div className={classes.content}>
            <div><img className={classes.img} src="https://img.freepik.com/free-photo/empty-sea-beach-background_74190-313.jpg?size=626&ext=jpg&ga=GA1.2.1135173464.1609286400"></img></div>
            <div>ava + description</div>
            <MyPostsContainer store={props.store}/>
        </div>
    )  
}

export default Content;