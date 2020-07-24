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

export type SidebarType = {};

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogPageType;
  sidebar: SidebarType;
};

export type StoreType = {
  _state: RootStateType;
  getState: () => RootStateType;
  _callSubscriber: (state: RootStateType) => void;
  addPost: () => void;
  updateNewPostText: (newPostText: string) => void;
  subscribe: (observer: (state: RootStateType) => void) => void;
};

export const store = {
  _state: {
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
  },
  getState() {
    return this._state;
  },
  _callSubscriber(state: RootStateType) {
    console.log('State was changed');
  },
  subscribe(observer: (state: RootStateType) => void) {
    this._callSubscriber = observer;
  },

  dispatch(action: any) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newPostText;
      this._callSubscriber(this._state);
    }
  },
};
