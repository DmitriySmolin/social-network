import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { DialogPageType } from "../../redux/redux-store";

type DialogsPropsType = {
  dialogsPage: DialogPageType;
  sendMessage: () => void;
  updateNewMessageBody: (body: string) => void;
  isAuth: boolean;
};

const Dialogs: React.FC<DialogsPropsType> = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem key={d.id} id={d.id} name={d.name} />);

  let messagesElements = props.dialogsPage.messages.map((m) => <Message key={m.id} message={m.message} />);

  const onSendMessageClick = () => {
    props.sendMessage();
  };

  const onNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.currentTarget.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>
          {messagesElements}
          <div>
            <div>
              <textarea
                value={props.dialogsPage.newMessageBody}
                onChange={onNewMessageChange}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div>
              <button onClick={onSendMessageClick}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
