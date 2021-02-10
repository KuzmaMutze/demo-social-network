import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile from './Profile/Profile';
import classes from './Content.module.css';


let Content = (props) => {
    return (
        <div className={classes.items}>
            <Profile saveProfileInfo={props.saveProfileInfo} savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatusProfile={props.updateStatusProfile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Content;