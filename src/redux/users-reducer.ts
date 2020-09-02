import { ActionsTypes, UserType, UserPageType } from "./redux-store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
};

export const userReducer = (state: UserPageType = initialState, action: ActionsTypes) => {
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
