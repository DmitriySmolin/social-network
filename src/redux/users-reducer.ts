import { ActionsTypes, ProfilePageType, UserType, UserPageType } from "./redux-store";
import { stat } from "fs";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      photoUrl:
        "https://avatars.mds.yandex.net/get-zen_doc/1710676/pub_5dc97f33e8c8e22cded837f7_5dc98a342538e85f0fa7f323/scale_1200",
      followed: false,
      fullName: "Dmitry",
      status: "I am boss",
      location: { country: "Belarus", city: "Minsk" },
    },
    {
      id: 2,
      photoUrl:
        "https://avatars.mds.yandex.net/get-zen_doc/1710676/pub_5dc97f33e8c8e22cded837f7_5dc98a342538e85f0fa7f323/scale_1200",
      followed: true,
      fullName: "Sasha",
      status: "I am boss too",
      location: { country: "Russia", city: "Moscow" },
    },
    {
      id: 3,
      photoUrl:
        "https://avatars.mds.yandex.net/get-zen_doc/1710676/pub_5dc97f33e8c8e22cded837f7_5dc98a342538e85f0fa7f323/scale_1200",
      followed: false,
      fullName: "Andrew",
      status: "I am boss too",
      location: { country: "Ukraine", city: "Kiev" },
    },
  ],
};

export const userReducer = (state: UserPageType = initialState, action: any) => {
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
        users: [...state.users, ...action.users],
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

export const setUsersAC = (users: UserType) => {
  return {
    type: SET_USERS,
    users: users,
  } as const;
};
