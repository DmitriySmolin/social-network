import { profileReducer, updateNewPostTextAC, addPostAC } from "./profile-reducer";
import { ProfilePageType } from "./redux-store";

test("correct dialogsPage update new message body", () => {
  let startState: ProfilePageType = {
    posts: [
      { id: 1, message: "Hi, how are you?", likeCount: 11 },
      { id: 2, message: "It's my first post", likeCount: 15 },
    ],
    newPostText: "",
    profile: null,
  };

  const endState = profileReducer(startState, addPostAC());

  expect(endState.posts.length).toBe(3);
});

test("correct dialogsPage send message", () => {
  let startState = {
    posts: [
      { id: 1, message: "Hi, how are you?", likeCount: 11 },
      { id: 2, message: "It's my first post", likeCount: 15 },
    ],
    newPostText: "",
    profile: null,
  };

  let newText = "It's new text";

  const endState = profileReducer(startState, updateNewPostTextAC(newText));

  expect(endState.newPostText).toBe("It's new text");
  // expect(endState[0].id).toBe(todolistId2);
});
