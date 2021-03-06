import { Dispatch } from 'react';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { userAPI } from '../components/api/api';
import { updateObjectInArray } from '../utils/object-helpers';
import { UserType, UserPageType, RootStateType } from './redux-store';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'SET_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'SET_IS_FOLLOWING';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  isArrayFollowing: [] as Array<number>,
};

export type UsersActionTypes =
  | ReturnType<typeof followSuccesAC>
  | ReturnType<typeof unfollowSuccesAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalUsersCountAC>
  | ReturnType<typeof toggleIsFetchingAC>
  | ReturnType<typeof toggleIsFollowingAC>;

export const userReducer = (state: UserPageType = initialState, action: UsersActionTypes): UserPageType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING:
      return {
        ...state,
        isArrayFollowing: action.isFollowing
          ? [...state.isArrayFollowing, action.userId]
          : state.isArrayFollowing.filter((userId: number) => userId !== action.userId),
      };
    default:
      return state;
  }
};

export const followSuccesAC = (userId: number) => {
  return { type: FOLLOW, userId: userId } as const;
};

export const unfollowSuccesAC = (userId: number) => {
  return {
    type: UNFOLLOW,
    userId: userId,
  } as const;
};

export const setUsersAC = (users: Array<UserType>) => {
  return {
    type: SET_USERS,
    users: users,
  } as const;
};

export const setCurrentPageAC = (currentPage: number) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  } as const;
};

export const setTotalUsersCountAC = (totalCount: number) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalCount: totalCount,
  } as const;
};

export const toggleIsFetchingAC = (isFetching: boolean) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching,
  } as const;
};

export const toggleIsFollowingAC = (isFollowing: boolean, userId: number) => {
  return {
    type: TOGGLE_IS_FOLLOWING,
    isFollowing: isFollowing,
    userId: userId,
  } as const;
};

export const getUsersThunkAC = (currentPage: number, pageSize: number) => async (
  dispatch: Dispatch<UsersActionTypes>
) => {
  dispatch(toggleIsFetchingAC(true));

  let data = await userAPI.getUsers(currentPage, pageSize);

  dispatch(setUsersAC(data.items));
  dispatch(setTotalUsersCountAC(data.totalCount));
  dispatch(toggleIsFetchingAC(false));
  dispatch(setCurrentPageAC(currentPage));
};

const followUnfollowFollow = async (
  dispatch: Dispatch<UsersActionTypes>,
  userId: number,
  apiMethod: (userId: number) => void,
  actionCreator: any
) => {
  dispatch(toggleIsFollowingAC(true, userId));

  // let data = await apiMethod(userId); ###

  dispatch(actionCreator(userId));

  dispatch(toggleIsFollowingAC(false, userId));
};

export const followThunkAC = (userId: number): ThunkAction<void, RootStateType, unknown, Action<string>> => async (
  dispatch: Dispatch<UsersActionTypes>
) => {
  followUnfollowFollow(dispatch, userId, userAPI.setFollow.bind(userAPI), followSuccesAC);
};

export const unfollowThunkAC = (userId: number): ThunkAction<void, RootStateType, unknown, Action<string>> => async (
  dispatch: Dispatch<UsersActionTypes>
) => {
  followUnfollowFollow(dispatch, userId, userAPI.setUnfollow.bind(userAPI), unfollowSuccesAC);
};
