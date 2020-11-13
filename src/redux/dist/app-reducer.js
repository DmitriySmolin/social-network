"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.initializeAppThunkAC = exports.initializedSuccess = exports.appReducer = void 0;
var auth_reducer_1 = require("./auth-reducer");
var INITIALIZED_SUCCESS = 'SET_INITIALIZED';
var initialState = {
    intialized: false
};
//export type AuthActionTypes = ReturnType<typeof setAuthUserDataAC>;
exports.appReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return __assign(__assign({}, state), { initialized: true });
        }
        default:
            return state;
    }
};
exports.initializedSuccess = function () {
    return {
        type: INITIALIZED_SUCCESS
    };
};
exports.initializeAppThunkAC = function () { return function (dispatch) {
    var promise = dispatch(auth_reducer_1.getAuthUserDataThunkAC());
    Promise.all([promise]).then(function () {
        dispatch(exports.initializedSuccess());
    });
}; };
// export const loginThunkAC = (
//   email: string,
//   password: any,
//   rememberMe: any
// ): ThunkAction<void, RootStateType, unknown, Action<string>> => (dispatch: Dispatch<any>) => {
//   authAPI.login(email, password, rememberMe).then((data) => {
//     if (data.resultCode === 0) {
//       dispatch(getAuthUserDataThunkAC());
//     } else {
//       let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
//       dispatch(stopSubmit('login', { _error: message }));
//     }
//   });
// };
// export const logoutThunkAC = (): ThunkAction<void, RootStateType, unknown, Action<string>> => (
//   dispatch: Dispatch<any>
// ) => {
//   authAPI.logout().then((data) => {
//     if (data.resultCode === 0) {
//       dispatch(setAuthUserDataAC(null, null, null, false));
//     }
//   });
// };
