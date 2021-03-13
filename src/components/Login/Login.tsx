import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import {Input} from "../common/FormsControls/FormsControls"
import { required, maxLenghtCreacter } from '../../utils/validators/validatirs';
import { connect } from "react-redux";
import {login} from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import classes from "./Login.module.css";
import { AppStateType } from "../../redux/redux-store";

type LoginFormOwnProps = {
    captchaUrl: string | null
}

let maxLenghtCreacter15 = maxLenghtCreacter(50);

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = (props) => {
    
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div><Field className={classes.formLogin} placeholder={"Email"} name={"email"} component={Input} validate={[required, maxLenghtCreacter15]}/></div>
            <div><Field className={classes.formLogin} placeholder={"Password"} name={"password"} type="password" component={Input} validate={[required, maxLenghtCreacter15]}/></div> 
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
const ReduxLoginForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
    form: 'login'
})(LoginForm)


type MapStateToProps = {
    captchaUrl: string | null
    isAuth: boolean
}

type MapDispatchToProps = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const Login: React.FC<MapStateToProps & MapDispatchToProps> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
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

let mapStateToProps = (state: AppStateType) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);