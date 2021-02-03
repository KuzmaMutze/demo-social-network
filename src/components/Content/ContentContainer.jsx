import React from "react";
import Content from "./Content";
import classes from './Content.module.css';
import { connect } from "react-redux";
import {getUserProfile} from "../../redax/content-reducer"
import { Redirect, withRouter } from "react-router-dom";


class ContentContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        if (this.props.isAuth === false) return <Redirect to={"/login"}></Redirect>;
        return (
            <div className={classes.content}>
                <Content {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.contentPage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ContentContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);