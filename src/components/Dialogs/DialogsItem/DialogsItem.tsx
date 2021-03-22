import { initialStateType } from '../../../redux/dialogs-reducer';
import classes from './DialogsItem.module.css';
import ItemNavLink from './ItemNavLink/ItemNavLink';

type PropsType = {
    dialogsPage: initialStateType
}

const DialogsItem: React.FC<PropsType> = (props) => {
    
    let dialogElement = props.dialogsPage.dialogsData.map( (dialogName) => <ItemNavLink name={dialogName.name} key={dialogName.id} id={dialogName.id}/>);
    
    return (
        <div className={classes.dialogsItem}>
            {dialogElement}
        </div>        
    )
}

export default DialogsItem;