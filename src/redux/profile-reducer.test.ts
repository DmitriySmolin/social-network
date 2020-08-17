import { addPostActionCreator, profileReducer, updateNewPostTextCreator } from "./profile-reducer";

test("correct dialogsPage update new message body", () => {
  let startState = {
    posts: [
      { id: 1, message: "Hi, how are you?", likeCount: 11 },
      { id: 2, message: "It's my first post", likeCount: 15 },
    ],
    newPostText: "",
  };

  const endState = profileReducer(startState, addPostActionCreator());

  expect(endState.posts.length).toBe(3);
});

test("correct dialogsPage send message", () => {
  let startState = {
    posts: [
      { id: 1, message: "Hi, how are you?", likeCount: 11 },
      { id: 2, message: "It's my first post", likeCount: 15 },
    ],
    newPostText: "",
  };

  let newText = "It's new text";

  const endState = profileReducer(startState, updateNewPostTextCreator(newText));

  expect(endState.newPostText).toBe("It's new text");
  // expect(endState[0].id).toBe(todolistId2);
});
