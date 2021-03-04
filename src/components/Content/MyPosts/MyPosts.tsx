import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form"
import { required, maxLenghtCreacter } from '../../../utils/validators/validatirs';
import {Textarea} from "../../common/FormsControls/FormsControls"
import { PostDataType } from '../../../types/types';

type PropsType = {
    postData: PostDataType
    addPost: (addedPostElement: string) => void
}

const MyPosts: React.FC<PropsType> = (props) => {
    
    let postElements = props.postData.slice(0).reverse().map( (post) => <Post message={post.message} key={post.id} like={post.like}/>);

    let onAddPost = (values) => {
        props.addPost(values.addedPostElement);
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.newPost}>
                <ReduxFormAddPost onSubmit={onAddPost}/>
            </div>
            <div className={classes.newPost}>
                <b>My posts</b>
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
            <Field className={classes.textarea} name={"addedPostElement"} placeholder="Write a new post" component={Textarea} validate={[required, maxLenghtCreacter15]} />
            <button className={classes.newPost__button}>Send</button>
        </form>
    </div>
}

const ReduxFormAddPost = reduxForm({
    form: "profileAddPostTextArea"
})(FormAddPost);

export default MyPosts;