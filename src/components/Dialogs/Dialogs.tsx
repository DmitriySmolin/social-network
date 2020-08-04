import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { ActionsTypes, DialogPageType } from '../../redux/state';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

type PropsType = {
  state: DialogPageType;
  dispatch: (action: ActionsTypes) => void;
};

const Dialogs = (props: PropsType) => {
  let dialogsElements = props.state.dialogs.map((d) => <DialogItem key={d.id} id={d.id} name={d.name} />);

  let messagesElements = props.state.messages.map((m) => <Message key={m.id} message={m.message} />);

  const onSendMessageClick = () => {
    debugger;
    props.dispatch(sendMessageCreator());
  };

  const onNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateNewMessageBodyCreator(e.currentTarget.value));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>
          {messagesElements}
          <div>
            <div>
              <textarea value={props.state.newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message"></textarea>
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
