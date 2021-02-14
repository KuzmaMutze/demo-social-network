import React from "react";
import {Field, reduxForm} from "redux-form"
import {Input} from "../common/FormsControls/FormsControls"
import { required, maxLenghtCreacter } from '../../utils/validators/validatirs';
import { connect } from "react-redux";
import {login} from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import classes from "./Login.module.css";


let maxLenghtCreacter15 = maxLenghtCreacter(50);
const LoginForm = (props) => {
    
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div><Field className={classes.formLogin} value="free@samuraijs.com" placeholder={"Email"} name={"email"} component={Input} validate={[required, maxLenghtCreacter15]}/></div>
            <div><Field className={classes.formLogin} value="free" placeholder={"Password"} name={"password"} type="password" component={Input} validate={[required, maxLenghtCreacter15]}/></div> 
            <div><Field className={classes.formLogin} component={"input"} name={"rememberMe"} type="checkbox"/> Remember me</div>
            {
                props.error ? <div>{props.error}</div> : ""
            }
            
            <div><button className={classes.buttonLogin}>Sing in</button></div>
            {
                props.captchaUrl && <div>
                    <img src={props.captchaUrl} alt="captcha"/>
                    <Field className={classes.formLogin} placeholder="Captcha" name="captcha" component={Input} validate={[required]}/>
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

    return <div  className={classes.login}>
        <h1>Login</h1>
        <ReduxLoginForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
    </div>
    
}

let mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, })(Login);