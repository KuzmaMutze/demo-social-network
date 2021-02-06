import React from "react";
import {Field, reduxForm} from "redux-form"
import {Input} from "../common/FormsControls/FormsControls"
import { required, maxLenghtCreacter } from '../../utils/validators/validatirs';
import { connect } from "react-redux";
import {login } from "../../redax/auth-reducer";
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
        </form>
    </div>
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
    
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, })(Login);