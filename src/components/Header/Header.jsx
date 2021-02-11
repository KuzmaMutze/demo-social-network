import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    
    return (
        <header className={classes.header}>
            {/* <img className={classes.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"></img> */}
            <div className={classes.loginBlock}>
                {props.isAuth ? <div className={classes.loginParam}>
                    {props.login} - <button className={classes.logout} onClick={props.logout}>Log out</button>
                </div> : <NavLink to={"/login"}> Login </NavLink>  }
            </div>
        </header>
    )
}
 
export default Header;
