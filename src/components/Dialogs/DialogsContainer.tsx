import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { Store } from "redux";

type DialogsContainerPropsType = {
  store: Store;
};

const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {
  let state = props.store.getState();

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  const onNewMessageChange = (body: string) => {
    let action = updateNewMessageBodyCreator(body);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      dialogsPage={state.dialogsPage}
      sendMessage={onSendMessageClick}
      updateNewMessageBody={onNewMessageChange}
    />
  );
};

export default DialogsContainer;
