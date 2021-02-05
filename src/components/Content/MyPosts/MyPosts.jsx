import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form"


const MyPosts = (props) => {
    
    let postElements = props.postData.map( (post) => <Post message={post.message} key={post.id} like={post.like}/>);

    let onAddPost = (values) => {
        props.addPost(values.addedPostElement);
    };

    return (
        <div className={classes.wrapper}>
            my post
            <div className={classes.newPost}>
                <ReduxFormAddPost onSubmit={onAddPost}/>
            </div>
            <div className={classes.newPost}>
                new post
            </div> 
            <div>
                {postElements}  
            </div>
        </div>
    ) 
}

const FormAddPost = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <Field name={"addedPostElement"} component="textarea" cols="80" rows="5"/>
            <button className={classes.newPost__button}>Send</button>
        </form>
    </div>
}

const ReduxFormAddPost = reduxForm({
    form: "profileAddPostTextArea"
})(FormAddPost);

export default MyPosts;