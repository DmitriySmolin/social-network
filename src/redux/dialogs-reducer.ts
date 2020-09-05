import { DialogPageType } from "./redux-store";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your it-kamasutra" },
    { id: 3, message: "Yo" },
  ],
  newMessageBody: "",
};

export type DialogsActionsTypes = ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendMessageAC>;

export const dialogsReducer = (state: DialogPageType = initialState, action: DialogsActionsTypes) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.newMessageBody,
      };
    }
    case SEND_MESSAGE: {
      let newMessage = { id: 4, message: state.newMessageBody, cols: 0 };

      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageBody: "",
      };
    }
    default:
      return state;
  }
};

export const updateNewMessageBodyAC = (body: string) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    newMessageBody: body,
  } as const;
};

export const sendMessageAC = () => {
  return {
    type: SEND_MESSAGE,
  } as const;
};
