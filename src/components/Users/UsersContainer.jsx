import React from "react";
import { connect } from "react-redux";
import {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching} from "../../redax/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader.jsx";


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setToggleIsFetching(false);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });
    }

    onPageChanged = (pageNumber) => {
        this.props.setToggleIsFetching(true);
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setToggleIsFetching(false);
                    this.props.setUsers(response.data.items);
                });
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      usersPage={this.props.usersPage}
                      follow={this.props.follow} 
                      unFollow={this.props.unFollow}
                      isFetching={this.props.isFetching} />

                </>
    }
}

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unFollow: (userId) => {
//             dispatch(unFollowAC(userId));
//         },
//         setUsers: (userId) => {
//             dispatch(setUsersAC(userId));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         setToggleIsFetching: (isFetching) => {
//             dispatch(setToggleIsFetchingAC(isFetching));
//         }
//     }
// }

let UsersContainer = connect(mapStateToProps, {follow: follow, unFollow: unFollow, setUsers: setUsers,setCurrentPage: setCurrentPage, setTotalUsersCount: setTotalUsersCount, setToggleIsFetching: setToggleIsFetching})(UsersAPIComponent); 

export default UsersContainer;