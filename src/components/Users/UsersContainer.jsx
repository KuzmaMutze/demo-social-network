import React from "react";
import { connect } from "react-redux";
import {follow, unFollow, setCurrentPage, setFollowingInProgress, getUsers} from "../../redax/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader.jsx";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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


let UsersContainer = connect(mapStateToProps, {follow, unFollow, setCurrentPage, setFollowingInProgress, getUsers})
          (UsersAPIComponent); 

export default UsersContainer;