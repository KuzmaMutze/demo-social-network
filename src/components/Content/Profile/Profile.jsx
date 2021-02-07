import Preloader from '../../common/Preloader/Preloader';
import classes from './Profile.module.css';
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const Content = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div><img className={classes.img} src="https://img.freepik.com/free-photo/empty-sea-beach-background_74190-313.jpg?size=626&ext=jpg&ga=GA1.2.1135173464.1609286400"></img></div>
            
            <div>
                <img src={props.profile.photos.small} alt=""/>
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