import { InjectedFormProps, reduxForm } from "redux-form"
import { maxLenghtCreacter, required } from "../../../utils/validators/validatirs";
import classes from './Profile.module.css';
import { ProfileType } from "../../../types/types";
import { Button } from 'antd';
import { createField, GetStringKeys, Input } from "../../common/FormsControls/FormsControls";

let maxLenghtCreacter15 = maxLenghtCreacter(15);

type PropsType = {
    profile: ProfileType
    isOwner: boolean
}
// todo: creact key contacts
type ProfileDataFormValueTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit, profile, isOwner, error}) => {
    return <form onSubmit={handleSubmit}>
        <div className={classes.wrapper}>
            {error && <div className={classes.error}>{error}</div>}
            <div>
                <b>User Name</b>:
                {createField<ProfileDataFormValueTypeKeys>("Full name", "fullName", [], Input)}
            </div>
            <div>
                <b>About me:</b>
                {createField<ProfileDataFormValueTypeKeys>("About me", "aboutMe", [], Input)}
            </div>
                <br/>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                    {/* todo: create some solution for embedded objects*/}
                </div>
                })}                
            </div>
                <br/>
            <div><b>I find work:</b>{createField<ProfileDataFormValueTypeKeys>('', "lookingForAJob", [], Input, {type: "checkbox"})}</div>
            <div><b>Description:</b> {createField<ProfileDataFormValueTypeKeys>("Description", "lookingForAJobDescription", [], Input)}</div>
            {isOwner && <button>Save</button>}
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm<ProfileType, PropsType>({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataReduxForm;