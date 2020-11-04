import { profileReducer, updateNewPostTextAC, addPostAC, deletePostAC } from './profile-reducer';

let startState: any = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: 11 },
    { id: 2, message: "It's my first post", likeCount: 15 },
  ],
  profile: null,
  status: '',
};

test('length of posts should be incremented', () => {
  let action = addPostAC('it-kamasutra.com');
  const endState = profileReducer(startState, action);

  expect(endState.posts.length).toBe(3);
});

test('message of new posts should be correct', () => {
  let action = addPostAC('it-kamasutra.com');
  const endState = profileReducer(startState, action);

  expect(endState.posts[2].message).toBe('it-kamasutra.com');
});

test('after deleting length of messages should be decrement', () => {
  let action = deletePostAC(1);
  const endState = profileReducer(startState, action);

  expect(endState.posts.length).toBe(1);
});

test("after deleting length shouldn't be decrement if id is incorrect", () => {
  let action = deletePostAC(1000);
  const endState = profileReducer(startState, action);

  expect(endState.posts.length).toBe(2);
});
