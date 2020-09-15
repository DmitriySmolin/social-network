import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { userAPI } from "../components/api/api";
import { ProfilePageType, ProfileType, RootStateType } from "./redux-store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likeCount: 11 },
    { id: 2, message: "It's my first post", likeCount: 15 },
  ],
  newPostText: "",
  profile: null,
};

export type ProfileActionsTypes =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof setUserProfileAC>;

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsTypes) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: state.newPostText,
        likeCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newPostText,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};

export const addPostAC = () => {
  return { type: ADD_POST } as const;
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

export const getProfileThunkAC = (userId: number): ThunkAction<void, RootStateType, unknown, Action<string>> => {
  return (dispatch: Dispatch<ProfileActionsTypes>) => {
    userAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfileAC(data));
    });
  };
};
