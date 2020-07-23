let rerenderEntireTree = (state: RootStateType) => {
  console.log('State was changed');
};

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

export type ProfilePageType = {
  posts: Array<PostType>;
  newPostText: string;
};
export type DialogPageType = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
};
type SidebarType = {};

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogPageType;
  sidebar: SidebarType;
};

export const state: RootStateType = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likeCount: 11 },
      { id: 2, message: "It's my first post", likeCount: 15 },
    ],
    newPostText: 'it-kamasutra.com',
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Andrey' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Sasha' },
      { id: 5, name: 'Viktor' },
      { id: 6, name: 'Valera' },
    ],
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How is your it-kamasutra' },
      { id: 3, message: 'Yo' },
    ],
  },
  sidebar: {},
};

export const addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likeCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const updateNewPostText = (newPostText: string) => {
  state.profilePage.newPostText = newPostText;
  rerenderEntireTree(state);
};

export const subscribe = (observer: (state: RootStateType) => void) => {
  rerenderEntireTree = observer;
};
