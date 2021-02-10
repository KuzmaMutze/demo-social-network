import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import classes from './Nav.module.css';

const Nav = (props) => {
    
    // let friendElement = props.state.friendsData.map( (friend) => <Friends img={friend.img} name={friend.name} /> );
    
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

            {/* <div className={classes.friends}>
                <div className={classes.friends__title}>
                    Friends
                    {friendElement}
                </div>
                
            </div> */}

        </nav>
    )
}

export default Nav; 