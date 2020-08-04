import { ProfilePageType, ActionsTypes } from './state';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
        likeCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newPostText;
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_POST } as const;
};

export const updateNewPostTextCreator = (newPostText: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPostText: newPostText,
  } as const;
};

export default profileReducer;
