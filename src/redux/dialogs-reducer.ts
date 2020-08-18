import { DialogPageType, ActionsTypes } from "./redux-store";

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

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      let stateCopy = { ...state };
      stateCopy.newMessageBody = action.newMessageBody;
      return stateCopy;
    }
    case SEND_MESSAGE: {
      let newMessage = { id: 4, message: state.newMessageBody, cols: 0 };
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageBody = "";
      return stateCopy;
    }
    default:
      return state;
  }
};

export const updateNewMessageBodyCreator = (body: string) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    newMessageBody: body,
  } as const;
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  } as const;
};
