import { UserType, UserPageType } from "./redux-store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "SET_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "SET_IS_FOLLOWING";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  isArrayFollowing: [] as Array<number>,
};

type UsersActionTypes =
  | ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
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
        users: state.users.map((u: UserType) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u: UserType) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
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

export const followAC = (userId: number) => {
  return { type: FOLLOW, userId: userId } as const;
};

export const unfollowAC = (userId: number) => {
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
