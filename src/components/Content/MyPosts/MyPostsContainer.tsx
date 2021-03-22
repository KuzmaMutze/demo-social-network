import { connect } from 'react-redux';
import {actions} from '../../../redux/content-reducer';
import { AppStateType } from '../../../redux/redux-store';
import { PostDataType } from '../../../types/types';
import MyPosts from './MyPosts';

type mapStatePropsType = {
    postData: Array<PostDataType>
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
let MyPostsContainer = connect<mapStatePropsType, mapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
        addPost: actions.addPostActionCreater
    })(MyPosts);

export default MyPostsContainer;