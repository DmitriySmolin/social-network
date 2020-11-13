import React from 'react';
import Prealoder from '../common/Preloader/Preloader';
import classes from './Paginator.module.css';

type UsersPropsType = {
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  onSetCurrentPage: (pageNumber: number) => void;
};

const Paginator: React.FC<UsersPropsType> = ({
  totalUsersCount,
  pageSize,
  isFetching,
  currentPage,
  onSetCurrentPage,
}) => {
  let pageCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i += 1) {
    pages.push(i);
  }

  return (
    <>
      {isFetching ? <Prealoder /> : null}
      <div className={classes.Users}>
        {pages.map((p) => (
          <span key={p} className={currentPage === p ? classes.selectPage : ''} onClick={() => onSetCurrentPage(p)}>
            {p}
          </span>
        ))}
      </div>
    </>
  );
};

export default Paginator;
