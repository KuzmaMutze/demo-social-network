import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import {Input} from "../common/FormsControls/FormsControls"
import { required, maxLenghtCreacter } from '../../utils/validators/validatirs';
import { connect, useDispatch, useSelector } from "react-redux";
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


type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

export const Login: React.FC = (props) => {

    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div className={classes.login}>
        <h1>Login</h1>
        <ReduxLoginForm captchaUrl={captchaUrl} onSubmit={onSubmit}/>
    </div>
    
}