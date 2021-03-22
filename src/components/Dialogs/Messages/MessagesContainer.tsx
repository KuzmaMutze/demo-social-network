import {actions} from "../../../redux/dialogs-reducer";
import { connect } from "react-redux";
import Messages from "./Messages";
import { compose } from "redux";
import { AppStateType } from "../../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => ({
        messagesData: state.dialogsPage.messagesData,   
})
export default compose<React.ComponentType>(
    connect(mapStateToProps, {...actions})
)(Messages);