import { ActionsTypes, ProfilePageType } from "./redux-store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likeCount: 11 },
    { id: 2, message: "It's my first post", likeCount: 15 },
  ],
  newPostText: "",
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: state.newPostText,
        likeCount: 0,
      };
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT:
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newPostText;
      return stateCopy;
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
