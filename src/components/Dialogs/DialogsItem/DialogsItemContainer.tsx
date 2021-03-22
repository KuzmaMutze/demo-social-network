import { connect } from 'react-redux';
import DialogsItem from './DialogsItem';
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from 'redux';
import { AppStateType } from '../../../redux/redux-store';

let mapStateToProps = (state: AppStateType) => ({
    dialogsPage: state.dialogsPage
})

export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)(DialogsItem);