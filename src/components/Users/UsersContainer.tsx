import React from "react";
import { connect } from "react-redux";
import { follow, unFollow, getUsers, FilterType } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader.jsx";
import { Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getUsersData, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUsersFilter } from "../../redux/selectors/users-selectors"
import { UsersType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";

type mapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    usersPage: Array<UsersType>
    followingInProgress: Array<number> 
    isAuth: boolean
    filter: FilterType
}

type mapDispatchPropsType = {
    getUsers: (currentPage:number, pageSize:number, filter: FilterType) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}



type PropsType = mapStatePropsType & mapDispatchPropsType

class UsersAPIComponent extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.filter);
    }

    onPageChanged = (pageNumber:number) => {
        this.props.getUsers(pageNumber, this.props.pageSize, this.props.filter);
    }

    onFilterChanged = (filter: FilterType) => {
        this.props.getUsers(1, this.props.pageSize, filter);
    }
    render() {
        
        if (this.props.isAuth == false) return <Redirect to={"/login"}></Redirect>;
        return <>
            { this.props.isFetching ? <Preloader/> : null }
            <Users    totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      usersPage={this.props.usersPage}
                      follow={this.props.follow} 
                      unFollow={this.props.unFollow}
                      isFetching={this.props.isFetching}
                      followingInProgress={this.props.followingInProgress}
                      onFilterChanged={this.onFilterChanged}
                      />
                </>
    }
}

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        usersPage: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getUsersFilter(state)
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect<mapStatePropsType, mapDispatchPropsType, null, AppStateType>(mapStateToProps, {follow, unFollow, getUsers}),
    
)(UsersAPIComponent)