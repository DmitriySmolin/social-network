import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

type UserPropsType = {
  u: any;
  isArrayFollowing: Array<number>;
  onSetCurrentPage: (pageNumber: number) => void;
  followThunk: (userId: number) => void;
  unfollowThunk: (userId: number) => void;
};

const User: React.FC<UserPropsType> = ({ u, isArrayFollowing, followThunk, unfollowThunk }) => {
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
              onClick={() => unfollowThunk(u.id)}
              disabled={isArrayFollowing.some((userId: number) => userId === u.id)}
            >
              UnFollow
            </button>
          ) : (
            <button
              onClick={() => followThunk(u.id)}
              disabled={isArrayFollowing.some((userId: number) => userId === u.id)}
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
          <div>{'u.location.country'}</div>
          <div>{'u.location.city'}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
