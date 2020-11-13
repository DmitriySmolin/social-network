import { Action, Dispatch } from 'redux';
import { stopSubmit } from 'redux-form';
import { ThunkAction } from 'redux-thunk';
import { authAPI } from '../components/api/api';
import { RootStateType } from './redux-store';

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

export type AuthActionTypes = ReturnType<typeof setAuthUserDataAC>;

export const authReducer = (state: any = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
};

export const setAuthUserDataAC = (
  userId: number | null,
  email: string | null,
  login: string | number | null,
  isAuth: boolean
) => {
  return {
    type: SET_USER_DATA,
    payload: { userId: userId, email: email, login: login, isAuth: isAuth },
  } as const;
};

export const getAuthUserDataThunkAC = (): ThunkAction<void, RootStateType, unknown, Action<string>> => async (
  dispatch: Dispatch<AuthActionTypes>
) => {
  let data = await authAPI.auth();

  const { id, email, login } = data.data;
  if (data.resultCode === 0) {
    dispatch(setAuthUserDataAC(id, email, login, true));
  }
};

export const loginThunkAC = (
  email: string,
  password: any,
  rememberMe: any
): ThunkAction<void, RootStateType, unknown, Action<string>> => async (dispatch: Dispatch<any>) => {
  let data = await authAPI.login(email, password, rememberMe);

  if (data.resultCode === 0) {
    dispatch(getAuthUserDataThunkAC());
  } else {
    let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
    dispatch(stopSubmit('login', { _error: message }));
  }
};

export const logoutThunkAC = (): ThunkAction<void, RootStateType, unknown, Action<string>> => async (
  dispatch: Dispatch<any>
) => {
  let data = await authAPI.logout();

  if (data.resultCode === 0) {
    dispatch(setAuthUserDataAC(null, null, null, false));
  }
};
