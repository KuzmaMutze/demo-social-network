import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav: React.FC = (props) => {
        
    return (
        <nav className={classes.nav}>
            <div className={classes.items}>
                <div>
                    <NavLink activeClassName={classes.active} className={`${classes.button}`} to="/profile">
                        Profile
                    </NavLink>
                </div>

                <div>
                    <NavLink activeClassName={classes.active} className={`${classes.button}`} to="/users">
                        Users
                    </NavLink>
                </div>

                <div>
                    <NavLink activeClassName={classes.active} className={`${classes.button}`} to="/music">
                        Music
                    </NavLink> 
                </div>

                <div>
                    <NavLink activeClassName={classes.active} className={`${classes.button}`} to="/news">
                        News
                    </NavLink>
                </div>

                <div>
                    <NavLink activeClassName={classes.active} className={`${classes.button}`} to="/dialogs">
                        Messages
                    </NavLink>
                </div>

                <div>
                    <NavLink activeClassName={classes.active} className={`${classes.button}`} to="/setting">
                        Setting
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Nav; 