import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form"
import { required, maxLenghtCreacter } from '../../../utils/validators/validatirs';
import {Textarea} from "../../common/FormsControls/FormsControls"


const MyPosts = (props) => {
    
    let postElements = props.postData.map( (post) => <Post message={post.message} key={post.id} like={post.like}/>);

    let onAddPost = (values) => {
        debugger
        props.addPost(values.addedPostElement);
    };

    return (
        <div className={classes.wrapper}>
            My post
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

const maxLenghtCreacter15 = maxLenghtCreacter(15);

const FormAddPost = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <Field name={"addedPostElement"} component={Textarea} validate={[required, maxLenghtCreacter15]} />
            <button className={classes.newPost__button}>Send</button>
        </form>
    </div>
}

const ReduxFormAddPost = reduxForm({
    form: "profileAddPostTextArea"
})(FormAddPost);

export default MyPosts;