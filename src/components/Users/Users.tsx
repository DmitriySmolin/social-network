import React from "react";
import classes from "./Users.module.css";
import { UserType } from "../../redux/redux-store";
import axios from "axios";
import userPhoto from "../../assets/images/user.png";
type UsersPropsType = {
  users: any;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: Array<UserType>) => void;
};

class Users extends React.Component<UsersPropsType> {
  constructor(props: UsersPropsType) {
    super(props);
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((res) => {
      this.props.setUsers(res.data.items);
    });
  }

  render() {
    return (
      <div>
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
