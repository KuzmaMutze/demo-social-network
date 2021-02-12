import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                Company name
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
