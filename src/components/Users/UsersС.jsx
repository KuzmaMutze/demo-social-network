import * as axios from "axios";
import React from "react";
import classes from "./users.module.css";
import userPhoto from "../../assets/img/1.jpg";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                {/* <button onClick={this.getUsers}>Get Users</button> */}
                {pages.map( p => {
                    return <span onClick={ (e) => { this.onPageChanged(p) }} className={this.props.currentPage === p && classes.selectPage}>{p}</span>
                })}
                {
                    this.props.usersPage.map(u => <div key={u.id}>

                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto} alt="img" />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { this.props.unFollow(u.id) }}>unFollow</button>
                                    : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
        )
    }
}
export default Users;