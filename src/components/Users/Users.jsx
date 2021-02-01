import React from "react";
import classes from "./users.module.css";
import userPhoto from "../../assets/img/1.jpg";
import { NavLink } from "react-router-dom";
import * as axios from "axios";


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
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.setFollowingInProgress(true, u.id);
                            
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {withCredentials: true,
                            headers: {
                                "API-KEY": "dfcd1a69-dd5c-48e6-9f01-dbdf80891de4"
                            }
                        })
                            .then(response => {
                               if (response.data.resultCode == 0) {
                                props.unFollow(u.id)
                               }
                               props.setFollowingInProgress(false, u.id);
                            });
                            
                            
                        
                        }}>unFollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { 
                            props.setFollowingInProgress(true, u.id);
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "dfcd1a69-dd5c-48e6-9f01-dbdf80891de4"
                                }
                            })
                            .then(response => {
                               if (response.data.resultCode == 0) {
                                props.follow(u.id)
                               }
                               props.setFollowingInProgress(false, u.id);
                            });
                            
                            
                            
                            }}>Follow</button>}
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