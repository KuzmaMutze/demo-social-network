import React from "react";
import classes from "./users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/img/1.jpg";

let Users = (props) => {
    debugger
    if (props.usersPage.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            });
    }

    return (
        <div>
            {
                props.usersPage.map( u => <div key={u.id}>
                    
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto} alt="img"/>
                        </div>
                        <div>
                            { u.followed
                                ? <button onClick={ () => { props.unFollow(u.id) } }>unFollow</button> 
                                : <button onClick={ () => { props.follow(u.id) } }>Follow</button>}
                        </div>
                    </span>
    
                    <span>
                        <span>
                            <div>{u.fullName}</div>
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
    )
};
export default Users;