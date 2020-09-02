import { createStore, combineReducers, Store } from "redux";

import { profileReducer, addPostActionCreator, updateNewPostTextCreator } from "./profile-reducer";

import { dialogsReducer, updateNewMessageBodyCreator, sendMessageCreator } from "./dialogs-reducer";

import { sidebarReducer } from "./sidebar-reducer";
import { followAC, unfollowAC, setUsersAC, userReducer, setCurrentPageAC, setTotalUsersCountAC } from "./users-reducer";

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
  photos: string;
};

export type UserPageType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
};

export type ProfilePageType = {
  posts: Array<PostType>;
  newPostText: string;
};

export type DialogPageType = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
  newMessageBody: string;
};

export type SidebarType = {};

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogPageType;
  sidebar: SidebarType;
  usersPage: UserPageType;
};

// export type StoreType = {
//   getState: () => RootStateType;
//   callSubscriber: (state: any) => void;
//   dispatch: (action: ActionsTypes) => void;
//   subscribe: (observer: (state: RootStateType) => void) => void;
// };

export type ActionsTypes =
  | ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof updateNewPostTextCreator>
  | ReturnType<typeof updateNewMessageBodyCreator>
  | ReturnType<typeof sendMessageCreator>
  | ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalUsersCountAC>;

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: userReducer,
});

export let store: Store = createStore(reducers);
