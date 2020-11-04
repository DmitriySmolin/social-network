"use strict";
exports.__esModule = true;
var profile_reducer_1 = require("./profile-reducer");
var startState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: 11 },
        { id: 2, message: "It's my first post", likeCount: 15 },
    ],
    profile: null,
    status: ''
};
test('length of posts should be incremented', function () {
    var action = profile_reducer_1.addPostAC('it-kamasutra.com');
    var endState = profile_reducer_1.profileReducer(startState, action);
    expect(endState.posts.length).toBe(3);
});
test('message of new posts should be correct', function () {
    var action = profile_reducer_1.addPostAC('it-kamasutra.com');
    var endState = profile_reducer_1.profileReducer(startState, action);
    expect(endState.posts[2].message).toBe('it-kamasutra.com');
});
test('after deleting length of messages should be decrement', function () {
    var action = profile_reducer_1.deletePostAC(1);
    var endState = profile_reducer_1.profileReducer(startState, action);
    expect(endState.posts.length).toBe(1);
});
test("after deleting length shouldn't be decrement if id is incorrect", function () {
    var action = profile_reducer_1.deletePostAC(1000);
    var endState = profile_reducer_1.profileReducer(startState, action);
    expect(endState.posts.length).toBe(2);
});
