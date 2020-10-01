import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { profileAPI, userAPI } from "../components/api/api";
import { ProfilePageType, ProfileType, RootStateType } from "./redux-store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likeCount: 11 },
    { id: 2, message: "It's my first post", likeCount: 15 },
  ],
  profile: null,
  status: "",
};

export type ProfileActionsTypes =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof setUserProfileAC>
  | ReturnType<typeof setStatusAC>;

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsTypes) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: action.newPostText,
        likeCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const addPostAC = (newPostText: string) => {
  return { type: ADD_POST, newPostText: newPostText } as const;
};

export const updateNewPostTextAC = (newPostText: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPostText: newPostText,
  } as const;
};

export const setUserProfileAC = (profile: ProfileType) => {
  return {
    type: SET_USER_PROFILE,
    profile: profile,
  } as const;
};

export const setStatusAC = (status: string) => {
  return {
    type: SET_STATUS,
    status: status,
  } as const;
};

export const getProfileThunkAC = (userId: number): ThunkAction<void, RootStateType, unknown, Action<string>> => (
  dispatch: Dispatch<ProfileActionsTypes>
) => {
  userAPI.getProfile(userId).then((data) => {
    dispatch(setUserProfileAC(data));
  });
};

export const getStatusThunkAC = (userId: number): ThunkAction<void, RootStateType, unknown, Action<string>> => (
  dispatch: Dispatch<ProfileActionsTypes>
) => {
  profileAPI.getStatus(userId).then((data) => {
    dispatch(setStatusAC(data));
  });
};

export const updateStatusThunkAC = (status: string): ThunkAction<void, RootStateType, unknown, Action<string>> => (
  dispatch: Dispatch<ProfileActionsTypes>
) => {
  profileAPI.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setStatusAC(status));
    }
  });
};
