import React, { useEffect, useState }  from "react";
import classes from "./users.module.css";
import userPhoto from "../../assets/img/1.png";
import { NavLink, useHistory } from "react-router-dom";
import UsersSearchForm from "./UsersSearchForm/UsersSearchForm";
import { FilterType, follow, getUsers, unFollow } from "../../redux/users-reducer";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsersData, getUsersFilter } from "../../redux/selectors/users-selectors";
import queryString from 'query-string';
import { Button } from "antd";
type PropsType = {

}

export const Users: React.FC<PropsType> = (props) => {

    const dispatch = useDispatch()
    const history = useHistory()

    const usersPage = useSelector(getUsersData)
    const pageSize = useSelector(getPageSize)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const followingInProgress = useSelector(getFollowingInProgress)
    const filter = useSelector(getUsersFilter)

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as {term: string; page: string; friend: string};
        let actualPage = currentPage
        let actualFilter = filter 
        if(!!parsed.page) actualPage = Number(parsed.page)
        if(!!parsed.term) actualFilter = {...actualFilter, term: parsed.term }
        if(!!parsed.friend) actualFilter = {...actualFilter, friend: parsed.friend === "null" ? null : parsed.friend === "true" ? true : false }
        dispatch(getUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
        history.push({
            pathname: "/users",
            search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
        })
    }, [filter, currentPage])

    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsers(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsers(1, pageSize, filter))
    }
    const unFollowCallBack = (userId: number) => {
        dispatch(unFollow(userId))
    }
    const followCallBack = (userId: number) => {
        dispatch(follow(userId))
    }

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
                portionNumber > 1 && <Button type="primary" className={classes.buttonDefult} onClick={() => setPortionNumber(portionNumber - 1)}>Prev</Button>
            }

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span key={p} onClick={ (e) => { onPageChanged(p) }} className={`${currentPage === p && classes.selectPage} ${classes.pageNumber}`}>{p}</span>
            })
            }

            {
                portionCount > portionNumber && <Button type="primary" className={classes.buttonDefult} onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</Button>
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
                        ? <Button className={classes.button} disabled={followingInProgress.some(id => id === u.id)} onClick={() => { unFollowCallBack(u.id) }}>unFollow</Button>
                        : <Button className={classes.button} disabled={followingInProgress.some(id => id === u.id)} onClick={() => { followCallBack(u.id) }}>Follow</Button>}
                </div>
            </span>
        </div>)
    }
</div>
}
