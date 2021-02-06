import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getUserProfile, getStatusProfile, updateStatusProfile } from "../../redax/content-reducer";
import Content from "./Content";
import classes from './Content.module.css';


class ContentContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatusProfile(userId);
        this.props.updateStatusProfile(this.props.status);
    }

    render() {
        return (
            <div className={classes.content}>
                <Content {...this.props} profile={this.props.profile} status={this.props.status} updateStatusProfile={this.props.updateStatusProfile}/>
            </div>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.contentPage.profile,
    status: state.contentPage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatusProfile, updateStatusProfile}),
    withRouter,
)(ContentContainer);