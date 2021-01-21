import React from "react";
import classes from "./users.module.css";

let Users = (props) => {
    debugger
    return (
        <div>
            {
                props.usersPage.map( u => <div key={u.id}>

                    <span>
                        <div>
                            <img src={u.photoUrl} className={classes.userPhoto} alt=""/>
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
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                            <div></div>
                        </span>
                    </span>
    
                </div>)
            }
        </div>
    )
};
export default Users;