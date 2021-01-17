import {addPostActionCreater, updatePostTextActionCreater} from '../../../redax/content-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
     let state = props.store.getState();
    debugger
    let addPost = () => {
        props.store.dispatch(addPostActionCreater());
    };

    let onPostChange = (text) => {
        let action = updatePostTextActionCreater(text);
        props.store.dispatch(action);
    };

    return (
    <MyPosts addPost={addPost} updatePostText={onPostChange} postData={state.contentPage.postData}
            newPostText={state.contentPage.newPostText}
    />
        
    ) 
}

export default MyPostsContainer;