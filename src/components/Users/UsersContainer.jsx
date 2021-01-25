import { connect } from "react-redux";
import Users from "./UsersС";
import {followAC, unFollowAC, setUsersAC} from "../../redax/users-reducer";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (userId) => {
            dispatch(setUsersAC(userId));
        }
    }
}

let UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;