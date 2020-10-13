import { Action, Dispatch } from 'redux';
import { stopSubmit } from 'redux-form';
import { ThunkAction } from 'redux-thunk';
import { authAPI } from '../components/api/api';
import { getAuthUserDataThunkAC } from './auth-reducer';
import { RootStateType } from './redux-store';

const INITIALIZED_SUCCESS = 'SET_INITIALIZED';

let initialState = {
  intialized: false,
};

//export type AuthActionTypes = ReturnType<typeof setAuthUserDataAC>;

export const appReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  } as const;
};

export const initializeAppThunkAC = (): ThunkAction<void, RootStateType, unknown, Action<string>> => (
  dispatch: Dispatch<any>
) => {
  let promise = dispatch(getAuthUserDataThunkAC());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

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
