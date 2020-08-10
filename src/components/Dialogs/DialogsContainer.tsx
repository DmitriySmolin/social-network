import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { Store } from "redux";
import StoreContext from "../../StoreContext";

// type DialogsContainerPropsType = {
//   store: Store;
// };

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store: Store) => {
        let state = store.getState();

        const onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };

        const onNewMessageChange = (body: string) => {
          let action = updateNewMessageBodyCreator(body);
          store.dispatch(action);
        };

        return (
          <Dialogs
            dialogsPage={state.dialogsPage}
            sendMessage={onSendMessageClick}
            updateNewMessageBody={onNewMessageChange}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
