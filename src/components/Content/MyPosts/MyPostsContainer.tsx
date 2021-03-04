import { connect } from 'react-redux';
import {addPostActionCreater, updatePostTextActionCreater} from '../../../redux/content-reducer';
import { AppStateType } from '../../../redux/redux-store';
import { PostDataType } from '../../../types/types';
import MyPosts from './MyPosts';

type mapStatePropsType = {
    postData: PostDataType
    newPostText: string
}

type mapDispatchPropsType = {
    addPost: (values: string) => void
}

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        postData: state.contentPage.postData,
        newPostText: state.contentPage.newPostText
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (values: string) => {
            dispatch(addPostActionCreater(values));
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;