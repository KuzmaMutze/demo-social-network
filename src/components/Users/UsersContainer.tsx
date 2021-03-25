import React from "react";
import { useSelector } from "react-redux";
import { Users } from "./Users";
import Preloader from "../common/Preloader/Preloader.jsx";
import { getIsFetching } from "../../redux/selectors/users-selectors"

type UsersPagePropsType = {}
export const UsersPage:React.FC<UsersPagePropsType> = (props) => {

    const isFetching = useSelector(getIsFetching)

    return <>
    { isFetching ? <Preloader/> : null }
    <Users />
        </>
};