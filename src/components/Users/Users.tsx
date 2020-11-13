import React from 'react';
import { UserType } from '../../redux/redux-store';
import Paginator from '../Paginator/Paginator';
import User from './User';

type UsersPropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  isArrayFollowing: Array<number>;
  onSetCurrentPage: (pageNumber: number) => void;
  followThunk: (userId: number) => void;
  unfollowThunk: (userId: number) => void;
};

const Users: React.FC<UsersPropsType> = ({
  users,
  pageSize,
  totalUsersCount,
  currentPage,
  isFetching,
  isArrayFollowing,
  onSetCurrentPage,
  followThunk,
  unfollowThunk,
}) => {
  // let pageCount = Math.ceil(totalUsersCount / pageSize);
  // let pages = [];
  // for (let i = 1; i <= pageCount; i += 1) {
  //   pages.push(i);
  // }

  return (
    <>
      <Paginator
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
        currentPage={currentPage}
        isFetching={isFetching}
        onSetCurrentPage={onSetCurrentPage}
      />
      {users.map((u) => {
        return (
          <User
            key={u.id}
            u={u}
            isArrayFollowing={isArrayFollowing}
            onSetCurrentPage={onSetCurrentPage}
            followThunk={followThunk}
            unfollowThunk={unfollowThunk}
          />
        );
      })}
    </>
  );
};

export default Users;
