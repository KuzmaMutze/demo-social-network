import React, { useEffect, useState }  from "react";
import classes from "./users.module.css";
import userPhoto from "../../assets/img/1.png";
import { NavLink } from "react-router-dom";
import { UsersType } from "../../types/types";
import UsersSearchForm from "./UsersSearchForm/UsersSearchForm";
import { FilterType, getUsers } from "../../redux/users-reducer";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsersData, getUsersFilter } from "../../redux/selectors/users-selectors";

type PropsType = {

}

const dispatch = useDispatch()

// const getUsers = () => {}

useEffect(() => {
    getUsers(currentPage, pageSize, filter);
}, [])

const onPageChanged = (pageNumber: number) => {
    dispatch(getUsers(pageNumber, pageSize, filter))
}
const onFilterChanged = (filter: FilterType) => {
    dispatch(getUsers(1, pageSize, filter))
}
const unFollow = (userId: number) => {
    dispatch(unFollow(userId))
}
const follow = (userId: number) => {
    dispatch(follow(userId))
}

const usersPage = useSelector(getUsersData)
const pageSize = useSelector(getPageSize)
const totalUsersCount = useSelector(getTotalUsersCount)
const currentPage = useSelector(getCurrentPage)
const followingInProgress = useSelector(getFollowingInProgress)
const filter = useSelector(getUsersFilter)



export const Users: React.FC<PropsType> = (props) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / pageSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * pageSize + 1;
    let rightPortionPageNumber = pageSize * portionNumber;

    return <div className={classes.users}>
        <UsersSearchForm onFilterChanged={onFilterChanged}/>
        <div className={classes.paginator}>
            {
                portionNumber > 1 && <button className={classes.buttonDefult} onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>
            }

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span key={p} onClick={ (e) => { onPageChanged(p) }} className={`${currentPage === p && classes.selectPage} ${classes.pageNumber}`}>{p}</span>
            })
            }

            {
                portionCount > portionNumber && <button className={classes.buttonDefult} onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>
            }
        </div>
        {
        usersPage.map(u => <div key={u.id}>

            <span>
                <div>
                    <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto} alt="img" />
                    </NavLink>
                </div>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <div>
                    {u.followed
                        ? <button className={classes.button} disabled={followingInProgress.some(id => id === u.id)} onClick={() => { unFollow(u.id) }}>unFollow</button>
                        : <button className={classes.button} disabled={followingInProgress.some(id => id === u.id)} onClick={() => { follow(u.id) }}>Follow</button>}
                </div>
            </span>
        </div>)
    }
</div>
}
