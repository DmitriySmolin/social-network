import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import Prealoder from "../Preloader/Preloader";

type UsersPropsType = {
  users: any;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  onSetCurrentPage: (pageNumber: number) => void;
};

const Users = (props: UsersPropsType) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i += 1) {
    pages.push(i);
  }
  return (
    <>
      {props.isFetching ? <Prealoder /> : null}
      <div className={classes.Users}>
        {pages.map((p) => (
          <span
            key={p}
            className={props.currentPage === p ? classes.selectPage : ""}
            onClick={() => props.onSetCurrentPage(p)}
          >
            {p}
          </span>
        ))}
        {props.users.map((u: any) => {
          return (
            <div key={u.id}>
              <span>
                <div>
                  <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" className={classes.photo} />
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
    </>
  );
};

export default Users;
