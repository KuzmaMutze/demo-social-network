import { connect } from 'react-redux';
import DialogsItem from './DialogsItem';
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}


export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)(DialogsItem);