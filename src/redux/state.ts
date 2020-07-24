const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
  dispatch: (action: ActionsTypes) => void;
  subscribe: (observer: (state: RootStateType) => void) => void;
};

// type AddPostActionType = {
//   type: 'ADD-POST';
// };

// type UpdateNewPostTextActionType = {
//   type: 'UPDATE-NEW-POST-TEXT';
//   newPostText: string;
// };

// export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType;

// type AddPostActionType = ReturnType<typeof addPostActionCreator>;
// type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostText>;

export type ActionsTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostText>;

export const addPostActionCreator = () => {
  return { type: ADD_POST } as const;
};

export const updateNewPostText = (newPostText: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPostText: newPostText,
  } as const;
};

export const store: StoreType = {
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

  dispatch(action) {
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
