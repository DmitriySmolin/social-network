import { DialogPageType, ActionsTypes } from './state';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state: DialogPageType, action: ActionsTypes) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.newMessageBody;
      return state;
    case SEND_MESSAGE:
      let newMessage = { id: 4, message: state.newMessageBody, cols: 0 };
      state.messages.push(newMessage);
      state.newMessageBody = '';
      return state;
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

export default dialogsReducer;
