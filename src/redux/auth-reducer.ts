import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { userAPI } from "../components/api/api";
import { AuthStateType, AuthType, RootStateType } from "./redux-store";

const SET_USER_DATA = "SET_USER_DATA";

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
        ...action.data,
        isAuth: true,
      };
    }

    default:
      return state;
  }
};

export const setAuthUserDataAC = (userId: number | null, email: string | null, login: string | number) => {
  return { type: SET_USER_DATA, data: { userId: userId, email: email, login: login } } as const;
};

export const authThunkAC = (): ThunkAction<void, RootStateType, unknown, Action<string>> => (
  dispatch: Dispatch<AuthActionTypes>
) => {
  userAPI.auth().then((data) => {
    const { id, email, login } = data.data;
    if (data.resultCode === 0) dispatch(setAuthUserDataAC(id, email, login));
  });
};
