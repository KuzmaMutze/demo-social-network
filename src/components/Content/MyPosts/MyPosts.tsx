import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import { required, maxLenghtCreacter } from '../../../utils/validators/validatirs';
import {createField, GetStringKeys, Textarea} from "../../common/FormsControls/FormsControls"
import { PostDataType } from '../../../types/types';
import { Button, Input } from 'antd';

type PropsType = {
    postData: Array<PostDataType>
    addPost: (addedPostElement: string) => void
}

const MyPosts: React.FC<PropsType> = (props) => {
    
    let postElements = [...props.postData].reverse().map( (post) => <Post message={post.message} key={post.id} like={post.like}/>);

    let onAddPost = (values: FormAddPostValueType) => {
        props.addPost(values.addedPostElement);
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.newPost}>
                <ReduxFormAddPost onSubmit={onAddPost}/>
            </div>
            <div className={classes.titleNewPost}>
                <b>My posts</b>
            </div> 
            <div>
                {postElements}  
            </div>
        </div>
    ) 
}

// form and type
const maxLenghtCreacter15 = maxLenghtCreacter(15);

export type FormAddPostValueType = {
    addedPostElement: string
}
type FormAddPostOwnPropsType = {}
type FormAddPostValueKeysType = GetStringKeys<FormAddPostValueType>

const FormAddPost: React.FC<InjectedFormProps<FormAddPostValueType, FormAddPostOwnPropsType> & FormAddPostOwnPropsType> = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div className={classes.textarea}>{createField<FormAddPostValueKeysType>("Write a new post", "addedPostElement", [required, maxLenghtCreacter15], Textarea)}</div>
            <button>Send</button>
        </form>
    </div>
}

const ReduxFormAddPost = reduxForm<FormAddPostValueType, FormAddPostOwnPropsType>({
    form: "profileAddPostTextArea"
})(FormAddPost);

export default MyPosts;