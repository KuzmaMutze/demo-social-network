import { connect } from 'react-redux';
import {addPostActionCreater, updatePostTextActionCreater} from '../../../redax/content-reducer';
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
    return {
        contentPage: state.contentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreater());
        },
        updatePostText: (text) => {
            dispatch(updatePostTextActionCreater(text));
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;