import { connect } from 'react-redux';
import DialogsItem from './DialogsItem';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const DialogsItemContainer = connect(mapStateToProps)(DialogsItem);

export default DialogsItemContainer;