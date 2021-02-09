import { Field, reduxForm } from "redux-form"
import { maxLenghtCreacter, required } from "../../../utils/validators/validatirs";
import { Contact } from "./Profile";

let maxLenghtCreacter15 = maxLenghtCreacter(15);

const ProfileDataForm = ({handleSubmit, profile, isOwner, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            {isOwner && <button >Save</button>}
            {error && <div>{error}</div>}
            <div>
                <b>Full name</b>: <Field placeholder="Full name" name="fullName" component="input" />
            </div>
            <div>
                <b>About me:</b> <Field placeholder="About me" name="aboutMe" component="input"  />
            </div>
                <br/>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div ket={key}>
                    <b>{key}:</b> <Field name={"contacts." + key} placeholder={key} component="input"/>
                </div>
                })}                
            </div>
                <br/>
            <div><b>I find work:</b>
                <Field name="lookingForAJob" type="checkbox" component="input"/>
            </div>
            <div><b>Description:</b> {profile.lookingForAJobDescription}
                <Field placeholder="Description" name="lookingForAJobDescription" component="input" />
            </div>
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataReduxForm;