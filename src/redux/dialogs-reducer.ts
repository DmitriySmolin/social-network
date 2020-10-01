import { DialogPageType } from "./redux-store";

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
};

export type DialogsActionsTypes = ReturnType<typeof sendMessageAC>;

export const dialogsReducer = (state: DialogPageType = initialState, action: DialogsActionsTypes) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = { id: 4, message: action.newMessageBody, cols: 0 };

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

export const sendMessageAC = (newMessageBody: string) => {
  return {
    type: SEND_MESSAGE,
    newMessageBody: newMessageBody,
  } as const;
};
