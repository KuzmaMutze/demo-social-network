import React from "react";
import {Field, reduxForm} from "redux-form"
import {Input} from "../common/FormsControls/FormsControls"
import { required, maxLenghtCreacter } from '../../utils/validators/validatirs';


let maxLenghtCreacter15 = maxLenghtCreacter(15);
const LoginForm = (props) => {
    
    
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Login"} name={"login"} component={Input} validate={[required, maxLenghtCreacter15]}/></div>
            <div><Field placeholder={"Password"} name={"password"} component={Input} validate={[required, maxLenghtCreacter15]}/></div>
            <div><Field component={"input"} name={"rememberMe"} type="checkbox"/></div>
            <div><button>Sing in</button></div>
        </form>
    </div>
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
    
}



export default Login;