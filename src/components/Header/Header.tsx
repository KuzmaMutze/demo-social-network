import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
// import { Redirect } from "react-router-dom";

export type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}   

const Header: React.FC<PropsType> = (props) => {
    
    return (
        <header className={classes.header}>
            <div className={classes.logo} >
                <NavLink  to={"/profile"}>
                    Company name
                </NavLink>
            </div>
            <div className={classes.loginBlock}>
                {props.isAuth ? <div className={classes.loginParam}>
                    {props.login} - <button className={classes.logout} onClick={props.logout}>Log out</button>
                </div> : <NavLink to={"/login"}> Login </NavLink>  }
            </div>
        </header>
    )
}
 
export default Header;
