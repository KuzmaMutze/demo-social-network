import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import { getUserProfile, getStatusProfile, updateStatusProfile, savePhoto, saveProfileInfo } from "../../redux/content-reducer";
import { AppStateType } from "../../redux/redux-store";
import { ProfileType } from "../../types/types";
import Content from "./Content";
import classes from './Content.module.css';

type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type mapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatusProfile: (userId: number) => void
    updateStatusProfile: (status: string) => void
    savePhoto: (file: File) => void
    saveProfileInfo: (profile: ProfileType) => Promise<any>
}

type PathParamType = {
    userId: string
}
type PathPropsType = RouteComponentProps<PathParamType> & {
    someString: string
}

type PropsType = MapStateToPropsType & mapDispatchPropsType & PathPropsType

class ContentContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
            if(!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.updateStatusProfile(this.props.status);
        if(!userId) {
            console.error('ID should exists in URI params or in state ("authUserId")')
        } else {
            this.props.getUserProfile(userId);
            this.props.getStatusProfile(userId);
        }
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
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


let mapStateToProps = (state: AppStateType) => ({ 
    profile: state.contentPage.profile,
    status: state.contentPage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {getUserProfile, getStatusProfile, updateStatusProfile, savePhoto, saveProfileInfo})
)(ContentContainer);