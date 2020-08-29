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
const Users: React.FC<UsersPropsType> = (props) => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then((res) => {
        props.setUsers(res.data.items);
      });
    }
  };

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {props.users.map((u: any) => {
        return (
          <div key={u.id}>
            <span>
              <div>
                <img src={u.photos.small !== null ? u.photo.small : userPhoto} alt="" className={classes.photo} />
              </div>
              <div>
                {u.followed ? (
                  <button onClick={() => props.unfollow(u.id)}>UnFollow</button>
                ) : (
                  <button onClick={() => props.follow(u.id)}>Follow</button>
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
};

export default Users;
