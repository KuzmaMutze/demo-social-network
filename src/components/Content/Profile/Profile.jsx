import Preloader from '../../common/Preloader/Preloader';
import classes from './Profile.module.css';
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from "../../../assets/img/1.png";

const Content = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    } 

    return (
        <div>
            <div><img className={classes.img} src="https://img.freepik.com/free-photo/empty-sea-beach-background_74190-313.jpg?size=626&ext=jpg&ga=GA1.2.1135173464.1609286400"></img></div>
            
            <div>
                <img src={props.profile.photos.large || userPhoto } className={classes.avatar} alt="avatar"/>
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={props.status} updateStatusProfile={props.updateStatusProfile}/>
                <div>
                    About me: {props.profile.aboutMe}
                </div>
                <br/>
                <div>
                    My Contacts:
                    <div>Vk: {props.profile.contacts.vk}</div>
                    <div>GitHub: {props.profile.contacts.github}</div>
                </div>
                <br/>
                <div>
                    <div>I find work: {props.profile.lookingForAJob === true ? "Да" : "Нет"}</div>
                    <div>Description: {props.profile.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    )  
}

export default Content;