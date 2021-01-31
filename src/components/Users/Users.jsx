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
                        ? <button onClick={() => { 

                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {withCredentials: true,
                            headers: {
                                "API-KEY": "c8edb612-e245-4703-ab9b-92902f94f3b5"
                            }
                        })
                            .then(response => {
                               if (response.data.resultCode === 0) {
                                props.unFollow(u.id)
                               }
                            });

                            
                        
                        }}>unFollow</button>
                        : <button onClick={() => { 

                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true,
                            headers: {
                                "API-KEY": "c8edb612-e245-4703-ab9b-92902f94f3b5"
                            }})
                            .then(response => {
                               if (response.data.resultCode === 0) {
                                props.follow(u.id)
                               }
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