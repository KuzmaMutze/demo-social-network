import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getUserProfile } from "../../redax/content-reducer";
import Content from "./Content";
import classes from './Content.module.css';


class ContentContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <div className={classes.content}>
                <Content {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.contentPage.profile,
})



export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    // withAuthRedirect
)(ContentContainer);