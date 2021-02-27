import React from "react";
import { connect } from "react-redux";
import {follow, unFollow, setCurrentPage, setFollowingInProgress, getUsers} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader.jsx";
import { Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {getUsersData, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from "../../redux/selectors/users-selectors"
import { UsersType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";

type mapStateToPropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    isAuth: boolean
    totalUsersCount: number
    usersPage: Array<UsersType>
    followingInProgress: Array<number> 
    
}

type mapDispatchToPropsType = {
    getUsers: (currentPage:number, pageSize:number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setFollowingInProgress: Array<number>
}

type PropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersAPIComponent extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber:number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    render() {
        if (this.props.isAuth == false) return <Redirect to={"/login"}></Redirect>;
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

let mapStateToProps = (state: AppStateType) => {
    return {
        usersPage: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

export default compose(
    withAuthRedirect,
    connect<mapStateToPropsType, mapDispatchToPropsType, AppStateType>(mapStateToProps, {follow, unFollow, setFollowingInProgress, getUsers}),
    
)(UsersAPIComponent);;