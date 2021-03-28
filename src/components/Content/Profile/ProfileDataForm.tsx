import { Field, InjectedFormProps, reduxForm } from "redux-form"
import { maxLenghtCreacter, required } from "../../../utils/validators/validatirs";
import classes from './Profile.module.css';
import { ProfileType } from "../../../types/types";
import { Button } from 'antd';

let maxLenghtCreacter15 = maxLenghtCreacter(15);

type PropsType = {
    profile: ProfileType
    isOwner: boolean
}

type ProfileDataFormValueType = {
    fullName: string
    aboutMe: string
    lookingForAJob: string
    contacts: string
    lookingForAJobDescription: string
}
// todo: creact key contacts

const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormValueType, PropsType> & PropsType> = ({handleSubmit, profile, isOwner, error}) => {
    return <form onSubmit={handleSubmit}>
        <div className={classes.wrapper}>
            {error && <div className={classes.error}>{error}</div>}
            <div>
                <b>User Name</b>: <Field className={classes.contactsInput} placeholder="Full name" name="fullName" component="input" />
            </div>
            <div>
                <b>About me:</b> <Field className={classes.contactsInput} placeholder="About me" name="aboutMe" component="input"  />
            </div>
                <br/>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    <b>{key}:</b> <Field className={classes.contactsInput} name={"contacts." + key} placeholder={key} component="input"/>
                </div>
                })}                
            </div>
                <br/>
            <div><b>I find work:</b>
                <Field className={classes.contactsInput} name="lookingForAJob" type="checkbox" component="input"/>
            </div>
            <div><b>Description:</b> 
                <Field className={classes.contactsInput} placeholder="Description" name="lookingForAJobDescription" component="input" />
            </div>
            {isOwner && <Button type="primary">Save</Button>}
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm<ProfileDataFormValueType, PropsType>({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataReduxForm;