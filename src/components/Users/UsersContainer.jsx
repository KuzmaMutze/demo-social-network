import { connect } from "react-redux";
import Users from "./UsersС";
import {followAC, unFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC} from "../../redax/users-reducer";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

let UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;