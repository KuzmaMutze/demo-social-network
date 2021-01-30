import React from "react";
import classes from "./users.module.css";
import userPhoto from "../../assets/img/1.jpg";
import { NavLink } from "react-router-dom";



const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }
        

    return <div>
        <div>
            {pages.map( p => {
                return <span onClick={ (e) => { props.onPageChanged(p) }} className={props.currentPage === p && classes.selectPage}>{p}</span>
            })}
        </div>
        {
        props.usersPage.map(u => <div key={u.id}>

            <span>
                <div>
                    <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto} alt="img" />
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => { props.unFollow(u.id) }}>unFollow</button>
                        : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                </div>
            </span>

            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                    <div></div>
                </span>
            </span>

        </div>)
    }
</div>
}

export default Users;