import { NavLink } from 'react-router-dom';
import classes from './ItemNavLink.module.css';

type PropsType = {
    id: number
    name: string
}

const ItemNavLink: React.FC<PropsType> = (props) => {
    return (
        <div className={classes.dialogsItem}>
            <div>
                <NavLink activeClassName={classes.active} className={classes.item} to={"/dialogs/" + props.id}>
                    {props.name}
                </NavLink>
            </div>
        </div>
    )
}

export default ItemNavLink;