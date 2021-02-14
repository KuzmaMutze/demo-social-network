import { connect } from 'react-redux';
import {addPostActionCreater, updatePostTextActionCreater} from '../../../redux/content-reducer';
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
    return {
        postData: state.contentPage.postData,
        newPostText: state.contentPage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (values) => {
            dispatch(addPostActionCreater(values));
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;