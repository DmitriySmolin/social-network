import { createSelector } from 'reselect';

export const getUsersSelector = (state: any) => {
  return state.usersPage.users;
};

export const getUsers = createSelector(getUsersSelector, (users) => {
  return users.filter((u: any) => true);
});

export const getPageSize = (state: any) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state: any) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state: any) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state: any) => {
  return state.usersPage.isFetching;
};

export const getIsArrayFollowing = (state: any) => {
  return state.usersPage.isArrayFollowing;
};
