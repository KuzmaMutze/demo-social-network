import React from "react";
import {Field, reduxForm} from "redux-form"
import {Input} from "../common/FormsControls/FormsControls"
import { required, maxLenghtCreacter } from '../../utils/validators/validatirs';
import { connect } from "react-redux";
import {login} from "../../redax/auth-reducer";
import { Redirect } from "react-router-dom";


let maxLenghtCreacter15 = maxLenghtCreacter(50);
const LoginForm = (props) => {
    
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Email"} name={"email"} component={Input} validate={[required, maxLenghtCreacter15]}/></div>
            <div><Field placeholder={"Password"} name={"password"} component={Input} validate={[required, maxLenghtCreacter15]}/></div>
            <div><Field component={"input"} name={"rememberMe"} type="checkbox"/></div>
            {
                props.error ? <div>{props.error}</div> : ""
            }
            
            <div><button>Sing in</button></div>
            {
                props.captchaUrl && <div>
                    <img src={props.captchaUrl} alt="captcha"/>
                    <Field placeholder="Captcha" name="captcha" component={Input} validate={[required]}/>
                </div>
            }
            
        </form>
    </div>
}
const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <ReduxLoginForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
    </div>
    
}

let mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, })(Login);