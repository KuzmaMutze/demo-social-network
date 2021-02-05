import React from "react";

const LoginForm = (props) => {
    return <div>
        <form action="">
            <div><input placeholder={"Login"} type="text"/></div>
            <div><input placeholder={"Passwod"} type="text"/></div>
            <div><input type="checkbox"/></div>
            <div><button>Sing in</button></div>
        </form>
    </div>
}

const Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
    
}



export default Login;