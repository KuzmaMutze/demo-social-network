import {addMessageActionCreater, updateMessageTextActionCreater} from "../../../redax/dialogs-reducer";
import { connect } from "react-redux";
import Messages from "./Messages";


let mapStateToProps = (state) => {
    return {
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreater());
        },
        onMessageChange: (message) => {
            dispatch(updateMessageTextActionCreater(message));
        }
    }
}

let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer; 