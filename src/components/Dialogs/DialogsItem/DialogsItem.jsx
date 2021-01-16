import { NavLink } from 'react-router-dom';
import classes from './DialogsItem.module.css';
import ItemNavLink from './ItemNavLink/ItemNavLink';



const DialogsItem = (props) => {
    
    let dialogElement = props.dialogsData.map( (dialogName) => <ItemNavLink name={dialogName.name} id={dialogName.id}/>);
    
    return (
        <div className={classes.dialogsItem}>
            {dialogElement}
        </div>

        
    )
}

export default DialogsItem;