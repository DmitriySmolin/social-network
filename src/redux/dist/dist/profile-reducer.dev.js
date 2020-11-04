'use strict';

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArrays = void 0 && (void 0).__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

exports.__esModule = true;
exports.updateStatusThunkAC = exports.getStatusThunkAC = exports.getProfileThunkAC = exports.setStatusAC = exports.setUserProfileAC = exports.updateNewPostTextAC = exports.addPostAC = exports.profileReducer = void 0;

var api_1 = require('../components/api/api');

var ADD_POST = 'ADD-POST';
var UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
var SET_USER_PROFILE = 'SET_USER_PROFILE';
var SET_STATUS = 'SET_STATUS';
var initialState = {
  posts: [{
    id: 1,
    message: 'Hi, how are you?',
    likeCount: 11
  }, {
    id: 2,
    message: "It's my first post",
    likeCount: 15
  }],
  profile: null,
  status: ''
};

exports.profileReducer = function (state, action) {
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case ADD_POST:
      {
        var newPost = {
          id: 3,
          message: action.newPostText,
          likeCount: 0
        };
        return __assign(__assign({}, state), {
          posts: __spreadArrays(state.posts, [newPost]),
          newPostText: ''
        });
      }

    case SET_USER_PROFILE:
      return __assign(__assign({}, state), {
        profile: action.profile
      });

    case SET_STATUS:
      return __assign(__assign({}, state), {
        status: action.status
      });

    default:
      return state;
  }
};

exports.addPostAC = function (newPostText) {
  return {
    type: ADD_POST,
    newPostText: newPostText
  };
};

exports.updateNewPostTextAC = function (newPostText) {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPostText: newPostText
  };
};

exports.setUserProfileAC = function (profile) {
  return {
    type: SET_USER_PROFILE,
    profile: profile
  };
};

exports.setStatusAC = function (status) {
  return {
    type: SET_STATUS,
    status: status
  };
};

exports.getProfileThunkAC = function (userId) {
  return function (dispatch) {
    api_1.userAPI.getProfile(userId).then(function (data) {
      dispatch(exports.setUserProfileAC(data));
    });
  };
};

exports.getStatusThunkAC = function (userId) {
  return function (dispatch) {
    api_1.profileAPI.getStatus(userId).then(function (data) {
      dispatch(exports.setStatusAC(data));
    });
  };
};

exports.updateStatusThunkAC = function (status) {
  return function (dispatch) {
    api_1.profileAPI.updateStatus(status).then(function (data) {
      if (data.resultCode === 0) {
        dispatch(exports.setStatusAC(status));
      }
    });
  };
};