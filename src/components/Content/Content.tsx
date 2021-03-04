import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile from './Profile/Profile';
import classes from './Content.module.css';
import { ProfileType } from '../../types/types';

type PropsType = {
    saveProfileInfo: () => void
    savePhoto: () => void
    isOwner: boolean
    profile: ProfileType
    status: string
    updateStatusProfile: () => void
}

let Content: React.FC<PropsType> = (props) => {
    return (
        <div className={classes.items}>
            <Profile saveProfileInfo={props.saveProfileInfo} savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatusProfile={props.updateStatusProfile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Content;