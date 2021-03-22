import { connect } from 'react-redux';
import DialogsItem from './DialogsItem';
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from 'redux';
import { AppStateType } from '../../../redux/redux-store';

let mapStateToProps = (state: AppStateType) => ({
    dialogsPage: state.dialogsPage
})

// JSX element type 'DialogsItemContainer' does not have any construct or call signatures. (add <React.ComponentType>)
export default compose<React.ComponentType>(
    connect(mapStateToProps),
    withAuthRedirect
)(DialogsItem);