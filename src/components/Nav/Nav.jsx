import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import classes from './Nav.module.css';

const Nav = (props) => {
    
    let friendElement = props.state.friendsData.map( (friend) => <Friends img={friend.img} name={friend.name} /> );

    return (
        <nav className={classes.nav}>

            <div>
                <NavLink activeClassName={classes.active} className={`${classes.button}`} to="/content">
                    Profile
                </NavLink>
            </div>

            <div>
                <NavLink activeClassName={classes.active} className={`${classes.button}`} to="/music">
                    music
                </NavLink> 
            </div>

            <div>
                <NavLink activeClassName={classes.active} className={`${classes.button}`} to="/news">
                    news
                </NavLink>
            </div>

            <div>
                <NavLink activeClassName={classes.active} className={`${classes.button}`} to="/dialogs">
                    messages
                </NavLink>
            </div>

            <div>
                <NavLink activeClassName={classes.active} className={`${classes.button}`} to="/setting">
                    setting
                </NavLink>
            </div>

            <div className={classes.friends}>
                <div className={classes.friends__title}>
                    Friends
                    {friendElement}
                </div>
                
            </div>

        </nav>
    )
}

export default Nav; 