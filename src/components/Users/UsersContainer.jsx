import React from "react";
import { connect } from "react-redux";
import {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching, setFollowingInProgress} from "../../redax/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader.jsx";
import {usersAPI} from "../../api/api";
class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setToggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                    this.props.setToggleIsFetching(false);
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount);
                });
    }

    onPageChanged = (pageNumber) => {
        this.props.setToggleIsFetching(true);
        this.props.setCurrentPage(pageNumber)
        
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                    this.props.setToggleIsFetching(false);
                    this.props.setUsers(data.items);
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
                      isFetching={this.props.isFetching}
                      followingInProgress={this.props.followingInProgress}
                      setFollowingInProgress={this.props.setFollowingInProgress} />

                </>
    }
}

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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

let UsersContainer = connect(mapStateToProps, {follow: follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching, setFollowingInProgress})(UsersAPIComponent); 

export default UsersContainer;