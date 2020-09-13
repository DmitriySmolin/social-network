import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import Prealoder from "../Preloader/Preloader";
import { NavLink } from "react-router-dom";
import { UserType } from "../../redux/redux-store";
import { userAPI } from "../api/api";

type UsersPropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  isArrayFollowing: Array<number>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  onSetCurrentPage: (pageNumber: number) => void;
  toggleIsFollowing: (isFollowing: boolean, userId: number) => void;
};

const Users: React.FC<UsersPropsType> = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i += 1) {
    pages.push(i);
  }

  const unfollowClick = (userId: number) => {
    props.toggleIsFollowing(true, userId);

    userAPI.setUnfollow(userId).then((data) => {
      if (data.resultCode === 0) props.unfollow(userId);
      props.toggleIsFollowing(false, userId);
    });
  };

  const followClick = (userId: number) => {
    props.toggleIsFollowing(true, userId);

    userAPI.setFollow(userId).then((data) => {
      if (data.resultCode === 0) props.follow(userId);
      props.toggleIsFollowing(false, userId);
    });
  };

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
        {props.users.map((u) => {
          return (
            <div key={u.id}>
              <span>
                <div>
                  <NavLink to={`profile/${u.id}`}>
                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" className={classes.photo} />
                  </NavLink>
                </div>
                <div>
                  {u.followed ? (
                    <button
                      onClick={() => unfollowClick(u.id)}
                      disabled={props.isArrayFollowing.some((userId: number) => userId === u.id)}
                    >
                      UnFollow
                    </button>
                  ) : (
                    <button
                      onClick={() => followClick(u.id)}
                      disabled={props.isArrayFollowing.some((userId: number) => userId === u.id)}
                    >
                      Follow
                    </button>
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
