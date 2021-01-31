import React from "react";
import Content from "./Content";
import classes from './Content.module.css';
import * as axios from "axios";
import { connect } from "react-redux";
import {setUserProfile} from "../../redax/content-reducer"
import { withRouter } from "react-router-dom";


class ContentContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
                .then(response => {
                    this.props.setUserProfile(response.data);  
                });
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
    profile: state.contentPage.profile
})

let WithUrlDataContainerComponent = withRouter(ContentContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);