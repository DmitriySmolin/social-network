import React from "react";
import classes from "./Users.module.css";
import { UserType } from "../../redux/redux-store";
import axios from "axios";
import userPhoto from "../../assets/images/user.png";
type UsersPropsType = {
  users: any;
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: Array<UserType>) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalUsersCount: (totalCount: number) => void;
};

class Users extends React.Component<UsersPropsType> {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        if (res.data.totalCount >= 54) {
          res.data.totalCount = 54;
          this.props.setTotalUsersCount(res.data.totalCount);
        }
      });
  }

  onSetCurrentPage = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((res) => {
        this.props.setUsers(res.data.items);
      });
  };

  render() {
    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i += 1) {
      pages.push(i);
    }

    return (
      <div className={classes.Users}>
        {pages.map((p) => (
          <span
            key={p}
            className={this.props.currentPage === p ? classes.selectPage : ""}
            onClick={() => this.onSetCurrentPage(p)}
          >
            {p}
          </span>
        ))}
        {this.props.users.map((u: any) => {
          return (
            <div key={u.id}>
              <span>
                <div>
                  <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" className={classes.photo} />
                </div>
                <div>
                  {u.followed ? (
                    <button onClick={() => this.props.unfollow(u.id)}>UnFollow</button>
                  ) : (
                    <button onClick={() => this.props.follow(u.id)}>Follow</button>
                  )}
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
                </span>
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;
