import Preloader from '../../common/Preloader/Preloader';
import classes from './Profile.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from "../../../assets/img/1.png";
import { useState } from 'react';
import ProfileDataReduxForm from './ProfileDataForm';
import React from "react";

const Content = (props) => {

    let [editMode, setEditMode] = useState(false);
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        props.saveProfileInfo(formData).then(() => {
            setEditMode(false);
        })
        
    }

    return (
        <div>
            {/* <div><img className={classes.img} src="https://img.freepik.com/free-photo/empty-sea-beach-background_74190-313.jpg?size=626&ext=jpg&ga=GA1.2.1135173464.1609286400"></img></div> */}
            
            <div className={classes.items}>
                <div className={classes.info}>
                    <img src={props.profile.photos.large || userPhoto } className={classes.avatar} alt="avatar"/>
                    {props.isOwner && <label className={classes.upload}>Upload avatar<input type="file" onChange={onMainPhotoSelected}/></label>}
                    <ProfileStatusWithHooks status={props.status} updateStatusProfile={props.updateStatusProfile}/>
                </div>
                <div className={classes.info}>
                    {editMode ? <ProfileDataReduxForm onSubmit={onSubmit} initialValues={props.profile} profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {setEditMode(false)}}/> 
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {setEditMode(true)}}/>}
                </div>
            </div>
        </div>
    )  
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        <div className={classes.profileDataItems}>
           <b>User Name:</b> {profile.fullName}
        </div>
                <div className={classes.profileDataItems}>
                    <b>About me:</b> {profile.aboutMe}
                </div>
                <br/>
                <div>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <Contact contactTitle={key} contactValue={profile.contacts[key]}/>
                    })}                
                </div>
                <br/>
                <div>
                    <div className={classes.profileDataItems}><b>I find work:</b> {profile.lookingForAJob ? "Yes" : "No"}</div>
                    <div className={classes.profileDataItems}><b>Description:</b> {profile.lookingForAJobDescription}</div>
                </div>
                {isOwner && <button className={classes.editContacts} onClick={goToEditMode}>Edit</button>}
    </div>
}



export const Contact = ({contactTitle, contactValue}) => {
    return <div className={classes.profileDataItems}><b>{contactTitle}</b>: {contactValue}</div>
}

export default Content;