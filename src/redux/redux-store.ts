import { createStore, combineReducers, Store } from "redux";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import { userReducer } from "./users-reducer";
import { authReducer } from "./auth-reducer";

export type PostType = {
  id: number;
  message: string;
  likeCount: number;
};

export type DialogType = {
  id: number;
  name: string;
};

export type MessageType = {
  id: number;
  message: string;
};

export type LocationType = {
  country: string;
  city: string;
};

export type UserType = {
  id: number;
  followed: boolean;
  name: string;
  status: string;
  location: LocationType;
  photos: {
    small: string;
    large: string;
  };
};

export type UserPageType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  isArrayFollowing: Array<number>;
};

export type ProfileType = {
  aboutMe: string;
  contacts: {
    facebook: string;
    github: string;
    instagram: string;
    mainLink: null;
    twitter: string;
    vk: string;
    website: null;
    youtube: null;
  };
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  photos: {
    small: string;
    large: string;
  };
  userId: number;
};

export type authStateType = {
  auth: authType;
};

export type authType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

export type ProfilePageType = {
  posts: Array<PostType>;
  newPostText: string;
  profile: ProfileType | null;
};

export type DialogPageType = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
  newMessageBody: string;
};

export type SidebarType = {};

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: userReducer,
  auth: authReducer,
});

export type RootStateType = ReturnType<typeof reducers>;

export let store: Store = createStore(reducers);
