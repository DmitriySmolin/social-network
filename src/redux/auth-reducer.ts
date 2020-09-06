import { authType } from "./redux-store";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

export type authReducerTypes = ReturnType<typeof setAuthUserDataAC>;

export const authReducer = (state: authType = initialState, action: authReducerTypes) => {
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
