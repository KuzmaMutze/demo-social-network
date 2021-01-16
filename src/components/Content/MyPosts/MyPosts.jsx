import classes from './MyPosts.module.css';
import Post from './Post/Post';
import react from 'react';
import {addPostActionCreater, updatePostTextActionCreater} from '../../../redax/content-reducer';

const MyPosts = (props) => {
    
    let postElements = props.postData.map( (post) => <Post message={post.message} like={post.like}/>);

    const newPostElement = react.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreater());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updatePostTextActionCreater(text);
        props.dispatch(action);
    };

    return (
        
            <div className={classes.wrapper}>
                my post
                <div className={classes.newPost}>
                    <textarea onChange={onPostChange} value={props.newPostText}  ref={newPostElement} cols="80" rows="5" />
                    <button onClick={addPost} className={classes.newPost__button}>Send</button>
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

export default MyPosts;