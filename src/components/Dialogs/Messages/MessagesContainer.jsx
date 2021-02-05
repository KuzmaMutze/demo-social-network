import {addMessageActionCreater, updateMessageTextActionCreater} from "../../../redax/dialogs-reducer";
import { connect } from "react-redux";
import Messages from "./Messages";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (values) => {
            dispatch(addMessageActionCreater(values));
        },
    }
}

export default compose(
    
    connect(mapStateToProps, mapDispatchToProps)
)(Messages);