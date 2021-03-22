import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../redux/redux-store";


let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

type MapStateToPropsType = {
    isAuth: boolean
}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {

    function RedirectComponent (props: WCP & MapStateToPropsType) {
        let {isAuth, ...restProps} = props
        if (isAuth === false) return <Redirect to={"/login"}></Redirect>;
        return <WrappedComponent {...restProps as unknown as WCP}/>
    }

    let ConnectAuthRedirectComponent = connect<MapStateToPropsType, null, WCP, AppStateType>(mapStateToPropsForRedirect, null)(RedirectComponent)

    return ConnectAuthRedirectComponent;
} 