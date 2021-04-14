import { InjectedFormProps, reduxForm } from "redux-form"
import { maxLenghtCreacter, required } from "../../../utils/validators/validatirs";
import classes from './Profile.module.css';
import { ProfileType } from "../../../types/types";
import { Button } from 'antd';
import { createField, GetStringKeys, Input } from "../../common/FormsControls/FormsControls";
import {
    CheckboxField,
    TextField,
    // @ts-ignore
  } from 'redux-form-antd'

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
            <div className={classes.input}>
                <b>User Name</b>:
                {createField<ProfileDataFormValueTypeKeys>("Full name", "fullName", [], TextField)}
            </div>
            <div className={classes.input}>
                <b>About me:</b>
                {createField<ProfileDataFormValueTypeKeys>("About me", "aboutMe", [], TextField)}
            </div>
                <br/>
            <div className={classes.input}>
                <div style={{marginBottom: "15px", fontSize: "18px"}}><b>Contacts</b>:</div> {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    <b>{key}: {createField(key, "contacts." + key, [], TextField)}</b>
                    {/* todo: create some solution for embedded objects*/}
                </div>
                })}                
            </div>
                <br/>
            <div className={classes.input}><b>I find work:</b>{createField<ProfileDataFormValueTypeKeys>('', "lookingForAJob", [], CheckboxField)}</div>
            <div className={classes.input}><b>Description:</b> {createField<ProfileDataFormValueTypeKeys>("Description", "lookingForAJobDescription", [], TextField)}</div>
            {isOwner && <Button className={classes.btn_contact} htmlType="submit" type="primary">Save</Button>}
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm<ProfileType, PropsType>({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataReduxForm;