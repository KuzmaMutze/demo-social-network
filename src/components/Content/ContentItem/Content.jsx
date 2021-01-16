import classes from './Content.module.css';
import MyPosts from '../MyPosts/MyPosts'

const Content = (props) => {

    return (
        <div className={classes.content}>
            <div><img className={classes.img} src="https://img.freepik.com/free-photo/empty-sea-beach-background_74190-313.jpg?size=626&ext=jpg&ga=GA1.2.1135173464.1609286400"></img></div>
            <div>ava + description</div>
            <MyPosts newPostText={props.contentPage.newPostText} postData={props.contentPage.postData} dispatch={props.dispatch}/>
        </div>
    )  
}

export default Content;