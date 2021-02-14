import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getUserProfile, getStatusProfile, updateStatusProfile, savePhoto, saveProfileInfo } from "../../redux/content-reducer";
import Content from "./Content";
import classes from './Content.module.css';


class ContentContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
            if(!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatusProfile(userId);
        this.props.updateStatusProfile(this.props.status);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <div className={classes.content}>
                <Content {...this.props} 
                saveProfileInfo={this.props.saveProfileInfo}
                profile={this.props.profile} 
                status={this.props.status} 
                updateStatusProfile={this.props.updateStatusProfile}
                isOwner={!this.props.match.params.userId}
                savePhoto={this.props.savePhoto}/>
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
    withRouter,
    connect(mapStateToProps, {getUserProfile, getStatusProfile, updateStatusProfile, savePhoto, saveProfileInfo}),
    
)(ContentContainer);