import React, { useState }  from "react";
import classes from "./users.module.css";
import userPhoto from "../../assets/img/1.png";
import { NavLink } from "react-router-dom";
import { UsersType } from "../../types/types";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (p:number) => void
    currentPage: number
    usersPage: Array<UsersType>
    followingInProgress: Array<number>
    unFollow: (userId:number) => void
    follow: (userId:number) => void
    isFetching: boolean
    setFollowingInProgress: Array<number>
}

const Users: React.FC<PropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.pageSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.pageSize + 1;
    let rightPortionPageNumber = props.pageSize * portionNumber;

    return <div className={classes.users}>
        <div className={classes.paginator}>
            {
                portionNumber > 1 && <button className={classes.buttonDefult} onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>
            }

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span key={p} onClick={ (e) => { props.onPageChanged(p) }} className={`${props.currentPage === p && classes.selectPage} ${classes.pageNumber}`}>{p}</span>
            })
            }

            {
                portionCount > portionNumber && <button className={classes.buttonDefult} onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>
            }
        </div>
        {
        props.usersPage.map(u => <div key={u.id}>

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
                        ? <button className={classes.button} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.unFollow(u.id) }}>unFollow</button>
                        : <button className={classes.button} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.follow(u.id) }}>Follow</button>}
                </div>
            </span>

            <span>
                
                <span>
                    {/* <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div> */}
                    <div></div>
                </span>
            </span>

        </div>)
    }
</div>
}

export default Users;