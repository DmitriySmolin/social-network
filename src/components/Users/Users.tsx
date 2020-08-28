import React from "react";
import classes from "./Users.module.css";

type UsersPropsType = {
  users: any;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: any) => void;
};
const Users: React.FC<UsersPropsType> = (props) => {
  if (props.users.length === 0) {
    props.setUsers(props.users);
  }
  return props.users.map((u: any) => {
    return (
      <div key={u.id}>
        <span>
          <div>
            <img src={u.photoUrl} alt="" className={classes.photo} />
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
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
      </div>
    );
  });
};

export default Users;
