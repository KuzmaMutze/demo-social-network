import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile from './Profile/Profile';

let Content = (props) => {
    return (
        <div>
            <Profile profile={props.profile} status={props.status} updateStatusProfile={props.updateStatusProfile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Content;